"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MoveHorizontal,
  ShoppingBag,
  Briefcase,
  Truck,
  Sparkles,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import {
  HERO_BEFORE_AFTER_PAIRS,
  KENENTI_BRAND,
} from "@/lib/kenenti-data";
import { cn } from "@/lib/utils";

export function HeroBeforeAfter() {
  const [activePairIndex, setActivePairIndex] = React.useState(0);
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isInteracting, setIsInteracting] = React.useState(false);

  const totalPairs = HERO_BEFORE_AFTER_PAIRS.length;
  const activePair =
    HERO_BEFORE_AFTER_PAIRS[activePairIndex] ?? HERO_BEFORE_AFTER_PAIRS[0];

  // Changement automatique de l'image Avant / Après toutes les 3 secondes
  React.useEffect(() => {
    if (isInteracting || totalPairs <= 1) return;
    const timer = window.setInterval(() => {
      setActivePairIndex((prev) => (prev + 1) % totalPairs);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [isInteracting, totalPairs, activePairIndex]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-gradient-to-b from-[#FAF8F5] via-white to-[#F5F2EC] text-kenenti-navy pt-5 pb-7 sm:pt-8 sm:pb-12"
    >
      {/* Halo radial doré subtil derrière le comparateur ("Atelier Lumineux") */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,185,91,0.16),transparent_65%)]"
      />
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          {/* Titre principal sur fond clair */}
          <div className="text-center mb-3.5 sm:mb-5">
            <h1
              id="hero-heading"
              className="font-heading text-[19px] sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-kenenti-navy leading-[1.2]"
            >
              Le 1er Atelier Tunisien de rénovation et de nettoyage
            </h1>
          </div>

          {/* Titres au-dessus de l'image : Nettoyage, Peinture, Rénovation + barre de progression 3s */}
          <div
            role="tablist"
            aria-label="Types d'entretien Avant / Après"
            className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-3 sm:mb-4"
          >
            {HERO_BEFORE_AFTER_PAIRS.map((pair, idx) => {
              const isSelected = idx === activePairIndex;
              return (
                <button
                  key={pair.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActivePairIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={cn(
                    "relative overflow-hidden shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-heading font-extrabold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-navy",
                    isSelected
                      ? "bg-kenenti-navy text-kenenti-yellow shadow-sm"
                      : "bg-white text-kenenti-navy/75 hover:text-kenenti-navy border border-kenenti-navy/10"
                  )}
                >
                  <span>{pair.title}</span>
                  {isSelected && !isInteracting && (
                    <span
                      key={`progress-${activePairIndex}`}
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 inset-x-0 h-[2.5px] bg-kenenti-yellow animate-kenenti-tab-progress"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Cadre galerie blanc ("passe-partout") autour du comparateur Avant / Après */}
          <div className="rounded-2xl bg-white p-1.5 sm:p-2 shadow-[0_12px_36px_-12px_rgba(26,50,99,0.18)] ring-1 ring-kenenti-navy/10">
            <div
              className="relative h-[185px] sm:h-[275px] lg:h-[315px] w-full overflow-hidden rounded-xl bg-kenenti-navy select-none"
              onPointerDown={() => setIsInteracting(true)}
              onPointerUp={() => setIsInteracting(false)}
              onPointerCancel={() => setIsInteracting(false)}
              onMouseLeave={() => setIsInteracting(false)}
            >
            {HERO_BEFORE_AFTER_PAIRS.map((pair, idx) => {
              const isActive = idx === activePairIndex;
              const isInitialSlide = idx === 0;
              return (
                <div
                  key={pair.id}
                  aria-hidden={!isActive}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-out",
                    isActive ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
                  )}
                >
                  {/* Image APRÈS */}
                  <Image
                    src={pair.afterImage}
                    alt={pair.afterAlt}
                    fill
                    priority={isInitialSlide}
                    fetchPriority={isInitialSlide ? "high" : "low"}
                    sizes="(max-width: 640px) 100vw, 768px"
                    className="object-cover object-center"
                  />

                  {/* Image AVANT */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                  >
                    <Image
                      src={pair.beforeImage}
                      alt={pair.beforeAlt}
                      fill
                      priority={isInitialSlide}
                      fetchPriority={isInitialSlide ? "high" : "low"}
                      sizes="(max-width: 640px) 100vw, 768px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              );
            })}

            {/* Badges Avant / Après uniquement */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 sm:top-3 sm:left-3.5 z-10">
              <span className="inline-flex items-center rounded-lg bg-black/50 border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 font-heading text-[10px] sm:text-xs font-bold text-white backdrop-blur-md">
                Avant
              </span>
            </div>
            <div className="pointer-events-none absolute top-2.5 right-2.5 sm:top-3 sm:right-3.5 z-10">
              <span className="inline-flex items-center rounded-lg bg-black/50 border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 font-heading text-[10px] sm:text-xs font-bold text-white backdrop-blur-md">
                Après
              </span>
            </div>

            {/* Séparateur vertical + Poignée circulaire */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-white/95 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-kenenti-navy shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-2 ring-white/30">
                <MoveHorizontal className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
              </div>
            </div>

            {/* Input range natif */}
            <label htmlFor="hero-before-after-slider" className="sr-only">
              Faire glisser le séparateur pour comparer l&apos;état Avant et Après
            </label>
            <input
              id="hero-before-after-slider"
              type="range"
              min={0}
              max={100}
              step={1}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label={`Comparateur Avant / Après pour ${activePair.title}`}
              aria-valuetext={`${sliderPosition}% Avant visible, ${100 - sliderPosition}% Après visible`}
              className="kenenti-range-slider absolute inset-0 z-20 opacity-0"
            />
            </div>
          </div>

          {/* Les 2 Boutons CTA adaptés au fond clair (côte à côte même sur mobile) */}
          <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
            <a
              href={KENENTI_BRAND.whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 sm:h-12 items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-kenenti-yellow px-2.5 sm:px-4 font-heading text-[11px] sm:text-sm font-extrabold text-kenenti-navy shadow-sm whitespace-nowrap transition-transform active:scale-[0.99]"
            >
              <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden="true" />
              <span className="sm:hidden">Devis Rénovation</span>
              <span className="hidden sm:inline">Demander un Devis Rénovation</span>
            </a>

            <Link
              href="/#notre-boutique"
              className="flex h-10 sm:h-12 items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-kenenti-navy px-2.5 sm:px-4 font-heading text-[11px] sm:text-sm font-bold text-white shadow-sm whitespace-nowrap transition-colors hover:bg-kenenti-navy/90"
            >
              <ShoppingBag
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-kenenti-yellow"
                aria-hidden="true"
              />
              <span className="sm:hidden">Peintures &amp; Kits</span>
              <span className="hidden sm:inline">Acheter nos Peintures &amp; Kits</span>
            </Link>
          </div>
        </div>

        {/* Section "Collecte & Livraison à Domicile — Sans Vous Déplacer" */}
        <div className="mx-auto max-w-5xl mt-4 sm:mt-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F2143] via-[#1A3263] to-[#0F2143] p-4 sm:p-6 text-white shadow-sm border border-kenenti-navy/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 sm:gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/15 border border-kenenti-yellow/35 px-3 py-0.5 text-[10.5px] sm:text-xs font-heading font-extrabold text-kenenti-yellow">
                  <span>« {KENENTI_BRAND.slogan} »</span>
                </div>

                <h2 className="font-heading text-sm sm:text-xl lg:text-2xl font-extrabold text-white leading-snug">
                  Collecte &amp; Livraison à Domicile —{" "}
                  <span className="text-kenenti-yellow">Sans Vous Déplacer</span>
                </h2>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  KENENTI collecte votre article chez vous, le rénove en atelier et vous le
                  retourne à domicile prêt à porter.
                </p>

                <div className="pt-1">
                  <a
                    href={KENENTI_BRAND.whatsappGeneralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 sm:h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-4 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <span>Demander une collecte à domicile</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Parcours Aller-Retour en 3 étapes avec icônes (01. Collecte, 02. Atelier, 03. Retour) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0">
                <div className="flex flex-col items-center justify-center rounded-xl bg-white/8 border border-white/12 p-2 sm:px-4 sm:py-3 text-center">
                  <div className="mb-1 sm:mb-1.5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-kenenti-yellow text-kenenti-navy">
                    <Truck className="h-3.5 w-3.5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                    01. Collecte
                  </span>
                  <p className="text-[9px] sm:text-[11px] text-white/85 font-medium mt-0.5">
                    À votre porte
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl bg-white/8 border border-white/12 p-2 sm:px-4 sm:py-3 text-center">
                  <div className="mb-1 sm:mb-1.5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-kenenti-yellow text-kenenti-navy">
                    <Sparkles className="h-3.5 w-3.5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                    02. Atelier
                  </span>
                  <p className="text-[9px] sm:text-[11px] text-white/85 font-medium mt-0.5">
                    Soin sur mesure
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl bg-white/8 border border-white/12 p-2 sm:px-4 sm:py-3 text-center">
                  <div className="mb-1 sm:mb-1.5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-kenenti-yellow text-kenenti-navy">
                    <PackageCheck className="h-3.5 w-3.5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                    03. Retour
                  </span>
                  <p className="text-[9px] sm:text-[11px] text-white/85 font-medium mt-0.5">
                    Livré chez vous
                  </p>
                </div>
              </div>
            </div>
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
