"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BOUTIQUE_POSTERS } from "@/lib/kenenti-data";

export function BoutiqueCarouselSection() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const pendingTargetRef = React.useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const totalSlides = BOUTIQUE_POSTERS.length;
  const activePoster = BOUTIQUE_POSTERS[activeIndex] ?? BOUTIQUE_POSTERS[0];

  const scrollToSlide = (targetIdx: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clampedIdx = ((targetIdx % totalSlides) + totalSlides) % totalSlides;
    const slide = track.children[clampedIdx] as HTMLElement | undefined;
    if (!slide) return;

    pendingTargetRef.current = clampedIdx;
    setActiveIndex((prev) => (prev === clampedIdx ? prev : clampedIdx));

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    slide.scrollIntoView({
      behavior: prefersReducedMotion ? "instant" : "smooth",
      block: "nearest",
      inline: "center",
    });

    window.setTimeout(() => {
      pendingTargetRef.current = null;
    }, 350);
  };

  const handleScroll = () => {
    if (pendingTargetRef.current !== null) return;
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    const idx = Math.min(
      totalSlides - 1,
      Math.max(0, Math.round(track.scrollLeft / track.clientWidth))
    );
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  };

  return (
    <section
      id="notre-boutique"
      aria-roledescription="carousel"
      aria-label="La boutique des professionnels : 3 affiches KENENTI"
      className="relative bg-[#F6F3EE] py-6 sm:py-12 lg:py-16"
    >
      <div className="container max-w-5xl">
        {/* En-tête minimaliste sur fond clair */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-0.5">
              Notre Boutique
            </p>
            <h2 className="font-heading text-base sm:text-2xl lg:text-3xl font-extrabold text-kenenti-navy tracking-tight">
              Nos Produits KENENTI
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
            <div className="w-full sm:w-auto grid grid-cols-3 sm:flex items-center gap-1.5">
              {BOUTIQUE_POSTERS.map((poster, idx) => {
                const isCurrent = activeIndex === idx;
                return (
                  <button
                    key={poster.id}
                    type="button"
                    aria-current={isCurrent ? "true" : undefined}
                    onClick={() => scrollToSlide(idx)}
                    className={`truncate text-center rounded-full px-2 sm:px-3.5 py-1.5 font-heading text-[11px] sm:text-xs font-extrabold transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-kenenti-navy text-kenenti-yellow shadow-sm"
                        : "bg-white text-kenenti-navy/75 border border-kenenti-navy/10 hover:text-kenenti-navy"
                    }`}
                  >
                    {poster.tabLabel}
                  </button>
                );
              })}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => scrollToSlide(activeIndex - 1)}
                aria-label="Affiche précédente"
                className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-kenenti-navy/12 bg-white text-kenenti-navy transition-colors hover:bg-[#FAF8F5] cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSlide(activeIndex + 1)}
                aria-label="Affiche suivante"
                className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-kenenti-navy text-kenenti-yellow transition-colors hover:bg-kenenti-navy/90 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Affiche {activeIndex + 1} sur {totalSlides} : {activePoster.headline}
        </p>

        {/* Piste du Carousel : Style Minimaliste (uniquement les vrais produits, leurs prix et 1 bouton CTA) */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="kenenti-carousel-track rounded-2xl"
        >
          {BOUTIQUE_POSTERS.map((poster, index) => {
            const isTrioPaints = poster.featuredProducts.length === 3;

            return (
              <article
                key={poster.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} sur ${totalSlides} : ${poster.headline}`}
                className="overflow-hidden rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-8 lg:p-10 shadow-[0_6px_24px_-12px_rgba(26,50,99,0.08)] flex flex-col items-center justify-between gap-4 sm:gap-6"
              >
                {isTrioPaints ? (
                  /* AFFICHE 1 : Les 3 vraies bouteilles de peinture (Cuir, Daim, Tissu) côte à côte + prix */
                  <div className="w-full grid grid-cols-3 gap-2.5 sm:gap-8 items-end max-w-3xl mx-auto">
                    {poster.featuredProducts.map((prod) => (
                      <div
                        key={prod.name}
                        className="flex flex-col items-center text-center group"
                      >
                        <div className="relative w-full h-32 sm:h-64 flex items-center justify-center bg-white">
                          <img
                            src={prod.image || poster.image}
                            alt={prod.name}
                            loading="lazy"
                            decoding="async"
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="mt-2 sm:mt-3 font-heading text-xs sm:text-base font-extrabold text-kenenti-navy">
                          {prod.name}
                        </p>
                        <p className="mt-0.5 font-heading text-sm sm:text-lg font-extrabold text-[#D98A1C]">
                          {prod.price}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* AFFICHE 2 (Kit de nettoyage) & AFFICHE 3 (Reblanchissant) */
                  <div className="w-full flex flex-col items-center text-center max-w-md mx-auto">
                    <div className="relative w-full h-44 sm:h-72 flex items-center justify-center bg-white">
                      <img
                        src={poster.image}
                        alt={poster.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 font-heading text-base sm:text-xl font-extrabold text-kenenti-navy">
                      {poster.featuredProducts[0]?.name || poster.headline}
                    </p>
                    <p className="mt-1 font-heading text-lg sm:text-2xl font-extrabold text-[#D98A1C]">
                      {poster.featuredProducts[0]?.price}
                    </p>
                  </div>
                )}

                {/* Un seul bouton Call to Action épuré */}
                <div className="w-full flex justify-center pt-3 border-t border-kenenti-navy/8">
                  <Link
                    href={poster.ctaHref}
                    className="inline-flex h-10 sm:h-12 items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-7 sm:px-9 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-sm transition-colors hover:bg-[#f2aa40]"
                  >
                    <span>{poster.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Points de pagination discrets sous le carrousel */}
        <div className="mt-3 flex items-center justify-center gap-1.5" aria-hidden="true">
          {BOUTIQUE_POSTERS.map((poster, idx) => (
            <button
              key={poster.id}
              type="button"
              tabIndex={-1}
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx
                  ? "w-6 bg-kenenti-navy"
                  : "w-1.5 bg-kenenti-navy/20 hover:bg-kenenti-navy/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-kenenti-navy/15 to-transparent"
      />
    </section>
  );
}
