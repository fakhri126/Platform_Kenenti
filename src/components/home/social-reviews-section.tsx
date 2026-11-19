"use client";

import * as React from "react";
import {
  Star,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  GOOGLE_REVIEWS,
  WORKSHOPS,
  type GoogleReviewItem,
} from "@/lib/kenenti-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="inline-flex items-center gap-0.5"
      aria-label={`Note de ${rating} sur 5 étoiles`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? "h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#FBBC05] text-[#FBBC05]"
              : "h-3.5 w-3.5 sm:h-4 sm:w-4 fill-kenenti-navy/15 text-kenenti-navy/15"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function GoogleGIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

function LuxuryReviewCard({
  review,
  isDuplicate = false,
  showProgressBar = false,
  isPaused = false,
  progressKey,
  className = "",
}: {
  review: GoogleReviewItem;
  isDuplicate?: boolean;
  showProgressBar?: boolean;
  isPaused?: boolean;
  progressKey?: string | number;
  className?: string;
}) {
  return (
    <article
      aria-hidden={isDuplicate ? "true" : undefined}
      aria-live={showProgressBar ? "polite" : undefined}
      className={`relative overflow-hidden rounded-2xl border border-kenenti-navy/12 bg-gradient-to-br from-[#FAF8F5] via-white to-[#F4EFE6] p-5 sm:p-6 shadow-[0_14px_38px_-14px_rgba(26,50,99,0.14)] flex flex-col justify-between ${className}`}
    >
      {/* Filigrane décoratif discret */}
      <Quote
        className="pointer-events-none absolute top-4 right-5 h-10 w-10 sm:h-11 sm:w-11 text-kenenti-navy/[0.06]"
        aria-hidden="true"
      />

      <div>
        {/* Barre supérieure : Étoiles + note + univers */}
        <div className="relative z-10 flex items-center justify-between gap-2 mb-3.5">
          <div className="inline-flex items-center gap-1.5">
            <StarRating rating={review.rating} />
            <span className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy">
              {review.rating},0
            </span>
          </div>

          <span className="rounded-full bg-kenenti-navy px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-heading font-bold uppercase tracking-wider text-kenenti-yellow shadow-2xs">
            {review.universeTag}
          </span>
        </div>

        {/* Citation courte (1 à 2 lignes) */}
        <blockquote
          key={review.id}
          className="relative z-10 min-h-[52px] sm:min-h-[56px] flex items-center mb-4"
        >
          <p className="font-heading text-xs sm:text-[15px] font-bold text-kenenti-navy leading-relaxed">
            « {review.text} »
          </p>
        </blockquote>
      </div>

      {/* Pied du carreau : Auteur vérifié + atelier + lien Google */}
      <div className="relative z-10 pt-3.5 border-t border-kenenti-navy/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kenenti-navy font-heading text-xs font-extrabold uppercase text-kenenti-yellow shadow-sm"
            aria-hidden="true"
          >
            {review.author.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <h3 className="text-xs sm:text-sm font-heading font-extrabold text-kenenti-navy truncate">
                {review.author}
              </h3>
              <CheckCircle2
                className="h-3.5 w-3.5 text-[#34A853] shrink-0"
                aria-label="Avis Google vérifié"
              />
            </div>
            <p className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-kenenti-navy/65 truncate">
              <MapPin className="h-3 w-3 text-[#D98A1C] shrink-0" aria-hidden="true" />
              <span>{review.workshopName}</span>
              <span aria-hidden="true">•</span>
              <span>{review.relativeDate}</span>
            </p>
          </div>
        </div>

        <a
          href={review.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isDuplicate ? -1 : undefined}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-kenenti-navy/12 bg-white px-2.5 py-1.5 text-[10.5px] sm:text-xs font-heading font-bold text-kenenti-navy hover:border-kenenti-navy/30 hover:text-kenenti-red transition-colors shadow-2xs"
        >
          <GoogleGIcon className="h-3.5 w-3.5 shrink-0" />
          <span>Voir l&apos;avis</span>
          <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
        </a>
      </div>

      {/* Fine barre de progression dorée en bas du carreau (uniquement sur le carreau mobile) */}
      {showProgressBar && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[3px] bg-kenenti-navy/8"
        >
          {!isPaused && (
            <div
              key={`review-progress-${progressKey}`}
              className="h-full w-full bg-kenenti-yellow animate-kenenti-review-progress"
            />
          )}
        </div>
      )}
    </article>
  );
}

export function SocialReviewsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const totalReviews = GOOGLE_REVIEWS.length;
  const activeReview = GOOGLE_REVIEWS[activeIndex] ?? GOOGLE_REVIEWS[0];

  // Rotation automatique rapide sur mobile (2,5 secondes)
  React.useEffect(() => {
    if (isPaused || totalReviews <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalReviews);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [isPaused, totalReviews, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  return (
    <section
      id="avis-reseaux-sociaux"
      aria-labelledby="social-reviews-heading"
      className="relative bg-white py-6 sm:py-12 lg:py-16"
    >
      <div className="container max-w-6xl">
        {/* En-tête avec les 2 cartes La Goulette & Menzah 6 côte à côte sur mobile */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-5 mb-4 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-1">
              <GoogleGIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
                Avis Google Maps Vérifiés
              </p>
            </div>
            <h2
              id="social-reviews-heading"
              className="text-base sm:text-2xl lg:text-3xl font-heading font-extrabold text-kenenti-navy tracking-tight"
            >
              La Confiance de Nos Clients
            </h2>
          </div>

          {/* Les 2 cartes La Goulette & Menzah 6 placées l'une près de l'autre (grid-cols-2 sur mobile) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
            {WORKSHOPS.map((workshop) => (
              <a
                key={workshop.id}
                href={workshop.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 rounded-xl border border-kenenti-navy/12 bg-[#FAF8F5] px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[10.5px] sm:text-xs font-heading font-bold text-kenenti-navy transition-all hover:border-kenenti-navy/30 hover:bg-kenenti-sand/50 min-w-0"
              >
                <GoogleGIcon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{workshop.shortName}</span>
                <span className="inline-flex items-center gap-0.5 sm:gap-1 rounded-md bg-white px-1.5 py-0.5 border border-kenenti-navy/10 shrink-0">
                  <span className="font-extrabold text-kenenti-navy">
                    {workshop.googleRating}
                  </span>
                  <Star
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-[#FBBC05] text-[#FBBC05]"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-[9.5px] sm:text-[11px] font-medium text-kenenti-navy/65 shrink-0">
                  ({workshop.googleReviewCount})
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* VERSION MOBILE (md:hidden) : Un seul carreau de luxe qui change toutes les 2,5s */}
        <div
          className="md:hidden mx-auto max-w-xl"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
        >
          <LuxuryReviewCard
            review={activeReview}
            showProgressBar
            isPaused={isPaused}
            progressKey={activeIndex}
          />

          {/* Contrôles discrets sous le carreau mobile */}
          <div className="mt-3 flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Choisir un avis client">
              {GOOGLE_REVIEWS.map((review, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={review.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Avis ${idx + 1} sur ${totalReviews} de ${review.author}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? "w-6 bg-kenenti-navy"
                        : "w-1.5 bg-kenenti-navy/20 hover:bg-kenenti-navy/45"
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-heading text-[11px] font-bold text-kenenti-navy/55 tabular-nums">
                0{activeIndex + 1} / 0{totalReviews}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Avis précédent"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-kenenti-navy/12 bg-white text-kenenti-navy transition-colors hover:bg-[#FAF8F5] cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Avis suivant"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-kenenti-navy text-kenenti-yellow transition-colors hover:bg-kenenti-navy/90 cursor-pointer"
                >
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* VERSION WEB / DESKTOP (hidden md:block) : Bande passante continue avec ces mêmes cartes de luxe */}
        <div className="hidden md:block relative overflow-hidden motion-reduce:overflow-x-auto py-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent"
          />

          <div className="animate-kenenti-reviews-marquee gap-5 pr-5">
            {[...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS].map((review, idx) => (
              <LuxuryReviewCard
                key={`${review.id}-${idx}`}
                review={review}
                isDuplicate={idx >= GOOGLE_REVIEWS.length}
                className="w-[370px] shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-kenenti-navy/15 to-transparent"
      />
    </section>
  );
}
