"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { BOUTIQUE_POSTERS } from "@/lib/kenenti-data";

export function BoutiqueCarouselSection() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const slideRefs = React.useRef<(HTMLElement | null)[]>([]);
  const pendingIndexRef = React.useRef<number | null>(null);
  const rafIdRef = React.useRef<number>(0);
  const settleTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [settledIndex, setSettledIndex] = React.useState(0);

  const totalSlides = BOUTIQUE_POSTERS.length;

  const findClosestSlideIndex = React.useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const center = rect.left + rect.width / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - center);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    return closestIdx;
  }, []);

  const scrollToSlide = React.useCallback(
    (targetIdx: number) => {
      const clampedIdx = ((targetIdx % totalSlides) + totalSlides) % totalSlides;
      const slide = slideRefs.current[clampedIdx];
      if (!slide) return;

      pendingIndexRef.current = clampedIdx;
      setActiveIndex((prev) => (prev === clampedIdx ? prev : clampedIdx));

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      slide.scrollIntoView({
        behavior: prefersReducedMotion ? "instant" : "smooth",
        block: "nearest",
        inline: "center",
      });
    },
    [totalSlides]
  );

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScrollSettled = () => {
      pendingIndexRef.current = null;
      const idx = findClosestSlideIndex();
      setActiveIndex((prev) => (prev === idx ? prev : idx));
      setSettledIndex((prev) => (prev === idx ? prev : idx));
    };

    const onScroll = () => {
      if (settleTimerRef.current) {
        clearTimeout(settleTimerRef.current);
      }
      settleTimerRef.current = setTimeout(onScrollSettled, 150);

      if (pendingIndexRef.current !== null || rafIdRef.current !== 0) return;

      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = 0;
        const idx = findClosestSlideIndex();
        setActiveIndex((prev) => (prev === idx ? prev : idx));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", onScrollSettled as EventListener);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", onScrollSettled as EventListener);
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      if (settleTimerRef.current) {
        clearTimeout(settleTimerRef.current);
      }
    };
  }, [findClosestSlideIndex]);

  const settledPoster = BOUTIQUE_POSTERS[settledIndex] ?? BOUTIQUE_POSTERS[0];

  return (
    <section
      id="notre-boutique"
      aria-roledescription="carousel"
      aria-label="La boutique des professionnels : 3 affiches KENENTI"
      className="bg-white py-6 sm:py-12 lg:py-16 border-b border-kenenti-navy/10"
    >
      <div className="container max-w-5xl">
        {/* Bandeau d'en-tête avec navigation des 3 affiches */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0F2143] via-[#1A3263] to-[#0F2143] p-4 sm:p-6 text-white mb-4 sm:mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider text-kenenti-yellow">
                <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Notre Boutique</span>
              </div>
              <h2 className="font-heading text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                Nos produits KENENTI
              </h2>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {BOUTIQUE_POSTERS.map((poster, idx) => {
                  const isCurrent = activeIndex === idx;
                  return (
                    <button
                      key={poster.id}
                      type="button"
                      aria-current={isCurrent ? "true" : undefined}
                      onClick={() => scrollToSlide(idx)}
                      className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 font-heading text-xs font-bold transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-kenenti-yellow text-kenenti-navy shadow-sm"
                          : "bg-white/10 text-white/85 hover:bg-white/20"
                      }`}
                    >
                      {poster.tabLabel}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToSlide(activeIndex - 1)}
                  aria-label="Affiche précédente"
                  className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white hover:text-kenenti-navy cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSlide(activeIndex + 1)}
                  aria-label="Affiche suivante"
                  className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-kenenti-yellow text-kenenti-navy transition-colors hover:bg-kenenti-yellow/90 cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Affiche {settledIndex + 1} sur {totalSlides} : {settledPoster.headline}
        </p>

        {/* Piste du Carousel : Style Minimaliste (uniquement les vrais produits, leurs prix et 1 bouton CTA) */}
        <div ref={trackRef} className="kenenti-carousel-track rounded-2xl sm:rounded-3xl">
          {BOUTIQUE_POSTERS.map((poster, index) => {
            const isTrioPaints = poster.featuredProducts.length === 3;

            return (
              <article
                key={poster.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} sur ${totalSlides} : ${poster.headline}`}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-kenenti-navy/15 bg-gradient-to-b from-white via-[#FCFBF9] to-[#F5F2EB] p-4 sm:p-8 lg:p-10 shadow-[0_8px_28px_rgba(15,33,67,0.08)] flex flex-col items-center justify-between gap-5"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F2143] via-kenenti-yellow to-[#0F2143]"
                  aria-hidden="true"
                />

                {/* Affichage chic des produits en cadres ordonnés */}
                {isTrioPaints ? (
                  /* AFFICHE 1 : Les 3 vraies bouteilles de peinture (Cuir, Daim, Tissu) côte à côte + prix */
                  <div className="w-full grid grid-cols-3 gap-2 sm:gap-6 items-stretch max-w-3xl mx-auto">
                    {poster.featuredProducts.map((prod) => (
                      <div
                        key={prod.name}
                        className="flex flex-col items-center justify-between text-center group rounded-2xl border border-kenenti-navy/10 bg-white p-2 sm:p-4 shadow-sm transition-all hover:border-kenenti-yellow hover:shadow-md"
                      >
                        <div className="relative w-full h-32 sm:h-56 flex items-center justify-center bg-white rounded-xl overflow-hidden">
                          <img
                            src={prod.image || poster.image}
                            alt={prod.name}
                            loading="lazy"
                            decoding="async"
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="mt-2 pt-2 border-t border-kenenti-navy/10 w-full">
                          <p className="font-heading text-[11px] sm:text-base font-extrabold text-kenenti-navy leading-tight">
                            {prod.name}
                          </p>
                          <span className="mt-1 inline-block rounded-full bg-kenenti-yellow/25 px-2.5 py-0.5 font-heading text-xs sm:text-base font-extrabold text-[#B86E08]">
                            {prod.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* AFFICHE 2 (Kit de nettoyage) & AFFICHE 3 (Reblanchissant) */
                  <div className="w-full flex flex-col items-center text-center max-w-md mx-auto rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-6 shadow-sm">
                    <div className="relative w-full h-48 sm:h-64 flex items-center justify-center bg-white">
                      <img
                        src={poster.image}
                        alt={poster.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 pt-3 border-t border-kenenti-navy/10 w-full">
                      <p className="font-heading text-base sm:text-xl font-extrabold text-kenenti-navy">
                        {poster.featuredProducts[0]?.name || poster.headline}
                      </p>
                      <span className="mt-1.5 inline-block rounded-full bg-kenenti-yellow/25 px-3.5 py-0.5 font-heading text-base sm:text-xl font-extrabold text-[#B86E08]">
                        {poster.featuredProducts[0]?.price}
                      </span>
                    </div>
                  </div>
                )}

                {/* Un seul bouton Call to Action épuré */}
                <div className="w-full flex justify-center pt-1">
                  <Link
                    href={poster.ctaHref}
                    className="inline-flex h-10 sm:h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0F2143] to-[#1A3263] px-7 sm:px-9 font-heading text-xs sm:text-sm font-extrabold text-kenenti-yellow shadow-md transition-all hover:from-kenenti-yellow hover:to-[#f2aa40] hover:text-kenenti-navy"
                  >
                    <span>{poster.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
