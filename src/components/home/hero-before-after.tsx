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

<<<<<<< HEAD
const QUICK_UNIVERSE_TABS = [
  {
    number: "01",
    label: "Sneakers",
    fullTitle: "Chaussures et sneakers",
    href: "#univers-chaussures-et-sneakers",
    icon: Footprints,
  },
  {
    number: "02",
    label: "Sacs",
    fullTitle: "Maroquinerie",
    href: "#univers-maroquinerie",
    icon: Briefcase,
  },
  {
    number: "03",
    label: "Vestes",
    fullTitle: "Vêtements en cuir",
    href: "#univers-vetements-en-cuir",
    icon: Shirt,
  },
  {
    number: "04",
    label: "Salons",
    fullTitle: "Mobilier",
    href: "#univers-mobilier",
    icon: Armchair,
  },
  {
    number: "05",
    label: "Voitures",
    fullTitle: "Intérieur automobile",
    href: "#univers-interieur-automobile",
    icon: CarFront,
  },
];

const WHY_CHOOSE_KENENTI = [
  {
    id: "pionnier",
    stepNumber: "01",
    badge: "Expertise N°1",
    statValue: "1er Atelier",
    statTitle: "Pionnier en Tunisie",
    description:
      "Le premier atelier tunisien dédié au nettoyage, à la rénovation et à la customisation de sneakers et cuirs.",
    footerTag: "Savoir-faire artisanal",
    icon: Trophy,
  },
  {
    id: "collecte-retour",
    stepNumber: "02",
    badge: "Zéro Déplacement",
    statValue: "Collecte & Retour",
    statTitle: "À domicile sans bouger",
    description:
      "KENENTI récupère votre article chez vous, le restaure en atelier et vous le livre prêt à porter.",
    footerTag: "Service « tjik win enti »",
    icon: Truck,
  },
  {
    id: "deux-ateliers",
    stepNumber: "03",
    badge: "2 Adresses",
    statValue: "2 Ateliers",
    statTitle: "La Goulette & Menzah 6",
    description:
      "Deux adresses physiques pour déposer vos pièces et bénéficier d'un diagnostic manuel par nos artisans.",
    footerTag: "Accueil & conseil direct",
    icon: MapPin,
  },
  {
    id: "gamme-medias",
    stepNumber: "04",
    badge: "Référence Pro",
    statValue: "67 Soins & 7 Médias",
    statTitle: "DW, Al Jazeera, Asharq...",
    description:
      "67 peintures et soins professionnels et une expertise saluée par 7 médias nationaux et internationaux.",
    footerTag: "Reconnu à l'international",
    icon: Award,
  },
];

=======
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
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

<<<<<<< HEAD
      {/* Feuille Blanche Arrondie : Accès rapide + Pourquoi Choisir KENENTI (Points Forts & Statistiques Enrichies) */}
      <div className="relative z-20 -mt-4 sm:-mt-6 rounded-t-[1.75rem] sm:rounded-t-[2.25rem] bg-white pt-4 pb-7 sm:pt-8 sm:pb-12 shadow-[0_-10px_32px_rgba(15,33,67,0.16)] border-b border-kenenti-navy/10">
        {/* Petit indicateur visuel de feuille mobile chic */}
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-kenenti-navy/15 sm:hidden" aria-hidden="true" />

        <div className="container max-w-5xl space-y-5 sm:space-y-8">
          {/* Rangée 1 : Les 5 Univers côte à côte en accès rapide chic */}
          <div className="rounded-2xl border border-kenenti-navy/10 bg-gradient-to-b from-[#FAF8F5] to-white p-2 sm:p-3.5 shadow-sm">
            <div className="grid grid-cols-5 gap-1.5 sm:gap-3">
              {QUICK_UNIVERSE_TABS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    title={item.fullTitle}
                    className="group relative flex flex-col items-center justify-center text-center gap-1 sm:gap-2 rounded-xl bg-white border border-kenenti-navy/10 py-2 px-1 sm:py-3 sm:px-2 shadow-[0_2px_8px_rgba(15,33,67,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-kenenti-yellow hover:shadow-md active:scale-[0.98]"
                  >
                    <span className="absolute top-1 right-1.5 text-[8px] sm:text-[9px] font-heading font-extrabold text-kenenti-navy/35 group-hover:text-[#D98A1C]">
                      {item.number}
                    </span>
                    <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2143] to-[#1A3263] text-kenenti-yellow shadow-sm ring-2 ring-kenenti-yellow/25 transition-all group-hover:scale-105 group-hover:ring-kenenti-yellow">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy leading-tight tracking-tight">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Rangée 2 : Cadre Signature (« kenenti tjik win enti » — Collecte & Retour sans vous déplacer) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B1933] via-[#152C57] to-[#0B1933] p-4 sm:p-6 text-white shadow-[0_12px_30px_-10px_rgba(15,33,67,0.45)] border border-kenenti-yellow/30">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-kenenti-yellow/15 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 sm:gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/45 px-2.5 py-0.5 text-[10px] sm:text-xs font-heading font-extrabold text-kenenti-yellow">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden="true" />
                  <span>Service Signature • « {KENENTI_BRAND.slogan} »</span>
=======
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
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
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
<<<<<<< HEAD
                <p className="text-[11px] sm:text-xs lg:text-sm text-white/85 leading-relaxed">
                  <strong className="text-white">
                    KENENTI collecte votre article directement chez vous
                  </strong>
                  , le restaure avec soin dans nos ateliers et vous le livre prêt à porter.
=======

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  KENENTI collecte votre article chez vous, le rénove en atelier et vous le
                  retourne à domicile prêt à porter.
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
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

<<<<<<< HEAD
              {/* Parcours Aller-Retour en 3 étapes connectées */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 shrink-0">
                <div className="relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 sm:px-3.5 sm:py-2.5 text-center">
                  <span className="inline-flex items-center justify-center rounded-md bg-kenenti-yellow px-1.5 py-0.5 font-heading text-[9px] sm:text-[10px] font-extrabold text-kenenti-navy">
                    01 • Collecte
                  </span>
                  <p className="text-[9.5px] sm:text-[11px] text-white font-semibold mt-1">
                    À votre porte
                  </p>
                </div>
                <div className="relative rounded-xl bg-white/10 backdrop-blur-sm border border-kenenti-yellow/35 px-2 py-2 sm:px-3.5 sm:py-2.5 text-center">
                  <span className="inline-flex items-center justify-center rounded-md bg-kenenti-yellow px-1.5 py-0.5 font-heading text-[9px] sm:text-[10px] font-extrabold text-kenenti-navy">
                    02 • Atelier
                  </span>
                  <p className="text-[9.5px] sm:text-[11px] text-white font-semibold mt-1">
                    Soin artisanal
                  </p>
                </div>
                <div className="relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-2 sm:px-3.5 sm:py-2.5 text-center">
                  <span className="inline-flex items-center justify-center rounded-md bg-kenenti-yellow px-1.5 py-0.5 font-heading text-[9px] sm:text-[10px] font-extrabold text-kenenti-navy">
                    03 • Retour
                  </span>
                  <p className="text-[9.5px] sm:text-[11px] text-white font-semibold mt-1">
=======
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
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
                    Livré chez vous
                  </p>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          {/* Rangée 3 : Nos Points Forts — Design Chic, Moderne & Ordonné */}
          <div className="space-y-3.5 sm:space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5">
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-navy/5 border border-kenenti-navy/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-widest text-[#D98A1C]">
                  <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-kenenti-navy" aria-hidden="true" />
                  <span>Nos Points Forts</span>
                </div>
                <h3 className="font-heading text-base sm:text-2xl font-extrabold text-kenenti-navy tracking-tight">
                  L&apos;Excellence KENENTI en 4 Piliers
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-kenenti-navy/65">
                Diagnostic manuel sur chaque pièce • Collecte à domicile ou dépôt en atelier
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {WHY_CHOOSE_KENENTI.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-kenenti-navy/15 bg-gradient-to-b from-white via-[#FCFBF9] to-[#F4F0EA] p-3 sm:p-4 shadow-[0_4px_16px_rgba(15,33,67,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-kenenti-yellow hover:shadow-lg"
                  >
                    {/* Ligne d'accent dorée supérieure */}
                    <div
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-kenenti-navy via-kenenti-yellow to-kenenti-navy"
                      aria-hidden="true"
                    />

                    <div className="space-y-2.5 pt-0.5">
                      <div className="flex items-center justify-between gap-1.5">
                        <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2143] to-[#1A3263] text-kenenti-yellow shadow-sm ring-2 ring-kenenti-yellow/30 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                        </div>
                        <span className="rounded-full bg-kenenti-yellow/25 border border-kenenti-yellow/50 px-2 py-0.5 text-[8.5px] sm:text-[10px] font-heading font-extrabold uppercase tracking-wider text-kenenti-navy">
                          {pillar.badge}
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        <p className="font-heading text-[13px] sm:text-base font-extrabold text-kenenti-navy leading-tight">
                          {pillar.statValue}
                        </p>
                        <p className="font-heading text-[10.5px] sm:text-xs font-extrabold text-[#D98A1C] leading-tight">
                          {pillar.statTitle}
                        </p>
                      </div>

                      <p className="text-[10.5px] sm:text-xs text-kenenti-navy/75 leading-snug line-clamp-3">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-kenenti-navy/10 flex items-center justify-between gap-1">
                      <span className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10.5px] font-heading font-bold text-kenenti-navy/85 truncate">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D98A1C] shrink-0" />
                        <span className="truncate">{pillar.footerTag}</span>
                      </span>
                      <ArrowRight
                        className="h-3 w-3 text-kenenti-navy/40 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-kenenti-navy"
                        aria-hidden="true"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
=======
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-kenenti-navy/15 to-transparent"
      />
    </section>
  );
}
