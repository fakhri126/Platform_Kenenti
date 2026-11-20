"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { UniversePastExample } from "@/lib/services-catalog";
import { cn } from "@/lib/utils";

interface PastWorksCarouselProps {
  universeTitle: string;
  examples: UniversePastExample[];
}

export function PastWorksCarousel({
  universeTitle,
  examples,
}: PastWorksCarouselProps) {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const pendingTargetRef = React.useRef<number | null>(null);
  const settledIndexRef = React.useRef<number>(0);
  const userInitiatedRef = React.useRef<boolean>(false);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState("");

  const total = examples.length;

  const getNearestIndex = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let nearestIdx = 0;
    let minDist = Infinity;

    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(slideCenter - trackCenter);
      if (dist < minDist) {
        minDist = dist;
        nearestIdx = idx;
      }
    });

    return nearestIdx;
  }, []);

  const scrollToSlide = React.useCallback(
    (targetIdx: number, fromUser = false) => {
      const track = trackRef.current;
      const targetSlide = slideRefs.current[targetIdx];
      if (!track || !targetSlide) return;

      const wrappedIdx = ((targetIdx % total) + total) % total;
      pendingTargetRef.current = wrappedIdx;
      userInitiatedRef.current = fromUser;
      setActiveIndex((prev) => (prev === wrappedIdx ? prev : wrappedIdx));

      const targetLeft =
        targetSlide.offsetLeft -
        (track.clientWidth - targetSlide.offsetWidth) / 2;
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      track.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: prefersReduced ? "auto" : "smooth",
      });
    },
    [total]
  );

  // Défilement automatique toutes les 3 secondes (respecte prefers-reduced-motion et la pause au survol/focus)
  React.useEffect(() => {
    if (total <= 1 || isPaused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      const base =
        pendingTargetRef.current !== null
          ? pendingTargetRef.current
          : activeIndex;
      const next = (base + 1) % total;
      scrollToSlide(next, false);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, scrollToSlide, total]);

  // Synchronisation du marqueur actif via rAF + gestion unique scrollend / fallback
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track || total <= 1) return;

    let rafId = 0;
    let fallbackTimer: number | null = null;
    const supportsScrollEnd = "onscrollend" in window;

    const handleSettled = () => {
      const settledIdx = getNearestIndex();
      pendingTargetRef.current = null;

      setActiveIndex((prev) => (prev === settledIdx ? prev : settledIdx));

      if (settledIdx !== settledIndexRef.current) {
        settledIndexRef.current = settledIdx;
        if (userInitiatedRef.current) {
          setStatusMessage(
            `Réalisation ${settledIdx + 1} sur ${total} : ${examples[settledIdx]?.caption ?? ""}`
          );
          userInitiatedRef.current = false;
        }
      }
    };

    const onScroll = () => {
      if (pendingTargetRef.current === null) {
        if (!rafId) {
          rafId = window.requestAnimationFrame(() => {
            rafId = 0;
            const nearest = getNearestIndex();
            userInitiatedRef.current = true;
            setActiveIndex((prev) => (prev === nearest ? prev : nearest));
          });
        }
      }

      if (!supportsScrollEnd) {
        if (fallbackTimer !== null) window.clearTimeout(fallbackTimer);
        fallbackTimer = window.setTimeout(handleSettled, 150);
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    if (supportsScrollEnd) {
      track.addEventListener("scrollend", handleSettled, { passive: true });
    }

    return () => {
      track.removeEventListener("scroll", onScroll);
      if (supportsScrollEnd) {
        track.removeEventListener("scrollend", handleSettled);
      }
      if (rafId) window.cancelAnimationFrame(rafId);
      if (fallbackTimer !== null) window.clearTimeout(fallbackTimer);
    };
  }, [examples, getNearestIndex, total]);

  const handleStep = (delta: -1 | 1) => {
    const base =
      pendingTargetRef.current !== null
        ? pendingTargetRef.current
        : activeIndex;
    const next = ((base + delta) % total + total) % total;
    scrollToSlide(next, true);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label={`Réalisations passées — ${universeTitle}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="space-y-3"
    >
      {/* En-tête du carrousel */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
            Travaux passés KENENTI
          </span>
          <h2 className="font-heading text-sm sm:text-xl font-extrabold text-kenenti-navy">
            Réalisations dans cet univers
          </h2>
        </div>

        <span className="rounded-full bg-[#FAF8F5] border border-kenenti-navy/10 px-2.5 py-0.5 font-heading text-[11px] font-bold text-kenenti-navy">
          {activeIndex + 1} / {total}
        </span>
      </div>

      {/* Zone Carrousel avec contrôles Précédent / Suivant avant la piste dans le DOM */}
      <div className="relative rounded-2xl border border-kenenti-navy/10 bg-[#FAF8F5] overflow-hidden">
        {total > 1 && (
          <div className="pointer-events-none absolute inset-x-2.5 sm:inset-x-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleStep(-1)}
              aria-label="Réalisation précédente"
              className="pointer-events-auto flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 border border-kenenti-navy/15 text-kenenti-navy shadow-sm transition-colors hover:bg-kenenti-navy hover:text-kenenti-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-navy cursor-pointer touch-manipulation"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => handleStep(1)}
              aria-label="Réalisation suivante"
              className="pointer-events-auto flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 border border-kenenti-navy/15 text-kenenti-navy shadow-sm transition-colors hover:bg-kenenti-navy hover:text-kenenti-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-navy cursor-pointer touch-manipulation"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Piste horizontale scrollable nativement avec scroll-snap + overscroll-behavior-x: contain */}
        <div
          ref={trackRef}
          tabIndex={0}
          role="group"
          aria-label="Diapositives des travaux passés"
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
          className="flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain no-scrollbar motion-safe:scroll-smooth touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-kenenti-navy"
        >
          {examples.map((example, idx) => (
            <div
              key={example.src}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} sur ${total}`}
              className="w-full flex-none snap-center"
            >
              <div className="relative h-64 sm:h-80 lg:h-96 w-full flex items-center justify-center bg-[#F4F1EC] p-2 sm:p-4">
                <img
                  src={example.src}
                  alt={example.caption}
                  fetchPriority={idx === 0 ? "high" : "low"}
                  loading={idx === 0 ? undefined : "lazy"}
                  decoding="async"
                  className="max-h-full max-w-full rounded-xl object-contain shadow-xs"
                />
              </div>
              <div className="border-t border-kenenti-navy/8 bg-white px-4 py-3 text-center">
                <p className="font-heading text-xs sm:text-sm font-bold text-kenenti-navy">
                  {example.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Annonce polie pour lecteurs d'écran */}
      <p className="sr-only" role="status" aria-live="polite">
        {statusMessage}
      </p>

      {/* Marqueurs de pagination (taille de cible >= 24x24px + distinction largeur & couleur) */}
      {total > 1 && (
        <nav
          aria-label="Choisir une réalisation"
          className="flex items-center justify-center gap-1"
        >
          {examples.map((example, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={example.src}
                type="button"
                aria-label={`Afficher la réalisation ${idx + 1} sur ${total}`}
                aria-current={isCurrent ? "true" : undefined}
                onClick={() => scrollToSlide(idx, true)}
                className="group flex h-6 min-w-6 items-center justify-center px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-navy rounded-full cursor-pointer touch-manipulation"
              >
                <span
                  className={cn(
                    "relative block h-2 overflow-hidden rounded-full transition-all duration-300",
                    isCurrent
                      ? "w-7 bg-kenenti-navy/20"
                      : "w-2 bg-kenenti-navy/25 group-hover:bg-kenenti-navy/50"
                  )}
                >
                  {isCurrent && (
                    <span
                      key={`slide-progress-${activeIndex}-${isPaused ? "paused" : "run"}`}
                      className={cn(
                        "block h-full w-full rounded-full bg-kenenti-navy",
                        !isPaused && "animate-kenenti-tab-progress"
                      )}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </section>
  );
}
