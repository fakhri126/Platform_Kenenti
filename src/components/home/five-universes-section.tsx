<<<<<<< HEAD
"use client";

import * as React from "react";
import Image from "next/image";
import {
  ChevronRight,
  MessageCircle,
  Check,
  Sparkles,
  ArrowLeft,
  ArrowRight,
=======
import {
  ChevronRight,
  Footprints,
  Briefcase,
  Shirt,
  Armchair,
  CarFront,
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
} from "lucide-react";
import { FIVE_UNIVERSES, KENENTI_BRAND } from "@/lib/kenenti-data";
import { cn } from "@/lib/utils";

const UNIVERSE_ICONS: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Footprints,
  2: Briefcase,
  3: Shirt,
  4: Armchair,
  5: CarFront,
};

export function FiveUniversesSection() {
  const [activeIdx, setActiveIdx] = React.useState(0);

  const selectUniverse = React.useCallback((index: number) => {
    const clamped =
      ((index % FIVE_UNIVERSES.length) + FIVE_UNIVERSES.length) %
      FIVE_UNIVERSES.length;
    setActiveIdx(clamped);
  }, []);

  React.useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith("#univers-")) return;
      const slug = hash.replace("#univers-", "");
      const foundIdx = FIVE_UNIVERSES.findIndex((u) => u.slug === slug);
      if (foundIdx !== -1) {
        setActiveIdx(foundIdx);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section
      id="nos-5-univers"
      aria-labelledby="universes-heading"
<<<<<<< HEAD
      className="py-7 sm:py-14 lg:py-20 bg-gradient-to-b from-[#F7F5F0] via-[#FAF9F6] to-[#F3EFE8] border-b border-kenenti-navy/10"
    >
      <div className="container max-w-6xl">
        {/* En-tête Chic & Moderne */}
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-navy px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-kenenti-yellow shadow-sm">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
              <span>Savoir-Faire &amp; Prestations</span>
            </div>
=======
      className="relative py-6 sm:py-12 lg:py-16 bg-white"
    >
      <div className="container max-w-6xl">
        {/* En-tête de section épuré */}
        <div className="flex items-end justify-between gap-2 mb-4 sm:mb-7">
          <div>
            <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-0.5">
              Nos Services
            </p>
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
            <h2
              id="universes-heading"
              className="font-heading text-lg sm:text-2xl lg:text-3xl font-extrabold text-kenenti-navy tracking-tight"
            >
              Nos 5 Univers de Rénovation
            </h2>
          </div>

<<<<<<< HEAD
          {/* Flèches de navigation rapide sur Mobile/Tablette + Lien Voir tout */}
          <div className="flex items-center gap-1.5">
            <div className="flex lg:hidden items-center gap-1">
              <button
                type="button"
                onClick={() => selectUniverse(activeIdx - 1)}
                aria-label="Univers précédent"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-kenenti-navy/15 bg-white text-kenenti-navy shadow-sm transition-colors hover:bg-kenenti-navy hover:text-kenenti-yellow"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => selectUniverse(activeIdx + 1)}
                aria-label="Univers suivant"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-kenenti-navy text-kenenti-yellow shadow-sm transition-colors hover:bg-kenenti-navy/90"
              >
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>

            <a
              href={KENENTI_BRAND.whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 rounded-full border border-kenenti-navy/15 bg-white px-3.5 py-1.5 font-heading text-xs font-extrabold text-kenenti-navy shadow-sm hover:border-kenenti-yellow transition-colors shrink-0"
            >
              <span>Devis sur mesure</span>
              <ChevronRight className="h-3.5 w-3.5 text-[#D98A1C]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Barre des 5 Univers (Sélecteur Visuel Chic visible uniquement sur Mobile/Tablette) */}
        <div
          role="tablist"
          aria-label="Sélectionner l'un de nos 5 univers"
          className="grid grid-cols-5 lg:hidden gap-1.5 sm:gap-2.5 mb-4 sm:mb-6"
        >
          {FIVE_UNIVERSES.map((u, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={`pill-${u.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => selectUniverse(idx)}
                className={cn(
                  "group relative flex flex-col items-center justify-between overflow-hidden rounded-xl sm:rounded-2xl p-1.5 sm:p-2 text-center transition-all duration-300 border cursor-pointer",
                  isSelected
                    ? "bg-[#0F2143] text-white border-kenenti-yellow shadow-[0_6px_18px_rgba(15,33,67,0.22)] -translate-y-0.5"
                    : "bg-white text-kenenti-navy border-kenenti-navy/12 hover:border-kenenti-navy/35 shadow-sm"
                )}
              >
                <div className="relative h-9 w-full sm:h-12 overflow-hidden rounded-lg sm:rounded-xl bg-kenenti-navy">
                  <Image
                    src={u.image}
                    alt={u.shortTitle}
                    fill
                    loading="lazy"
                    sizes="20vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity",
                      isSelected ? "bg-black/15" : "bg-black/35 group-hover:bg-black/15"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      "absolute top-1 left-1 inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded text-[8.5px] sm:text-[10px] font-heading font-extrabold",
                      isSelected
                        ? "bg-kenenti-yellow text-kenenti-navy"
                        : "bg-[#0F2143]/85 text-white"
                    )}
                  >
                    0{u.id}
                  </span>
                </div>

                <span
                  className={cn(
                    "mt-1 sm:mt-1.5 font-heading text-[9.5px] sm:text-xs font-extrabold leading-tight line-clamp-1 w-full",
                    isSelected ? "text-kenenti-yellow" : "text-kenenti-navy"
                  )}
                >
                  {u.shortTitle.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cartes Univers avec description :
            - Sur Mobile/Tablette (< lg) : Seule la catégorie sélectionnée s'affiche (pleine largeur)
            - Sur Desktop (lg:) : Grille 5 colonnes avec les 5 univers affichés côte à côte */}
        <div className="block lg:grid lg:grid-cols-5 gap-3 sm:gap-3.5 pb-1">
          {FIVE_UNIVERSES.map((universe, index) => {
=======
          <a
            href={KENENTI_BRAND.whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-heading text-xs sm:text-sm font-bold text-kenenti-navy/70 hover:text-kenenti-navy transition-colors shrink-0"
          >
            <span>Demander un devis</span>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Grille minimaliste : 2 colonnes compactes sur mobile (la 5e carte prend 2 colonnes), 5 colonnes sur desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {FIVE_UNIVERSES.map((universe, index) => {
            const IconComponent = UNIVERSE_ICONS[universe.id] ?? Footprints;
            const isLastOdd = index === FIVE_UNIVERSES.length - 1;
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
            const whatsappHref = `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
              `Bonjour KENENTI, je souhaite demander un devis rénovation pour l'univers "${universe.title}".`
            )}`;
            const isSelected = activeIdx === index;

            return (
              <article
                key={universe.id}
                id={`univers-${universe.slug}`}
<<<<<<< HEAD
                className={cn(
                  "group w-full flex-col justify-between overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                  isSelected ? "flex" : "hidden lg:flex",
                  "border-kenenti-yellow shadow-[0_10px_28px_rgba(15,33,67,0.14)] ring-1 ring-kenenti-yellow/50 lg:ring-0 lg:border-kenenti-navy/15 lg:shadow-[0_4px_16px_rgba(15,33,67,0.06)] lg:hover:border-kenenti-yellow lg:hover:shadow-xl"
                )}
              >
                <div>
                  {/* Cadre Photo Éditorial Chic */}
                  <div className="relative h-48 sm:h-52 lg:h-44 w-full overflow-hidden bg-[#0B1933]">
                    <Image
                      src={universe.image}
                      alt={universe.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09152E] via-[#09152E]/35 to-black/10"
                      aria-hidden="true"
                    />

                    {/* Badges supérieurs */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-kenenti-yellow font-heading text-[11px] font-extrabold text-kenenti-navy shadow-md">
                        0{universe.id}
                      </span>

                      <span className="rounded-full bg-[#0F2143]/85 backdrop-blur-md border border-white/20 px-2.5 py-0.5 font-heading text-[9.5px] font-bold text-white shadow-sm">
                        {universe.modeLabel}
                      </span>
                    </div>

                    {/* Titre superposé au bas de l'image avec filet doré */}
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <div className="h-0.5 w-7 rounded-full bg-kenenti-yellow mb-1.5" />
                      <h3 className="font-heading text-base lg:text-base font-extrabold text-white leading-tight drop-shadow-sm">
                        {universe.title}
                      </h3>
                    </div>
                  </div>

                  {/* Corps de carte chic et structuré */}
                  <div className="p-3.5 sm:p-4 lg:p-3.5 space-y-2.5">
                    <p className="text-xs text-kenenti-navy/75 leading-snug lg:line-clamp-2">
                      {universe.description}
                    </p>

                    <ul className="space-y-1 pt-1 border-t border-kenenti-navy/10">
                      {universe.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[11px] font-semibold text-kenenti-navy/90"
                        >
                          <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow/30 text-[#B86E08]">
                            <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                          </span>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pied de carte avec appel à l'action attractif */}
                <div className="px-3.5 pb-3.5 pt-1">
=======
                className={`group flex flex-col justify-between rounded-2xl border border-kenenti-navy/10 bg-[#FAF8F5] p-3.5 sm:p-5 transition-all duration-300 hover:border-kenenti-navy/25 hover:bg-white hover:shadow-[0_8px_24px_-12px_rgba(26,50,99,0.12)] ${
                  isLastOdd ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-kenenti-navy text-kenenti-yellow shadow-sm transition-transform group-hover:scale-105">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-heading text-xs sm:text-base font-extrabold text-kenenti-navy leading-snug">
                      {universe.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-kenenti-navy/70 leading-relaxed line-clamp-2">
                      {universe.description}
                    </p>
                  </div>
                </div>

                {/* Lien discret Devis → */}
                <div className="mt-3 pt-2.5 border-t border-kenenti-navy/8 flex items-center justify-between">
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="flex h-9 w-full items-center justify-between rounded-xl bg-gradient-to-r from-[#0F2143] to-[#1A3263] px-3 font-heading text-[11px] font-extrabold text-white shadow-sm transition-all group-hover:from-kenenti-yellow group-hover:to-[#f2aa40] group-hover:text-kenenti-navy"
                  >
                    <span>Demander un devis</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-kenenti-yellow group-hover:bg-kenenti-navy/10 group-hover:text-kenenti-navy">
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
=======
                    className="inline-flex items-center gap-1 font-heading text-[11px] sm:text-xs font-extrabold text-kenenti-navy group-hover:text-[#D98A1C] transition-colors"
                  >
                    <span>Devis</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
                  </a>
                </div>
              </article>
            );
          })}
        </div>
<<<<<<< HEAD

        {/* Points de progression mobiles sous la carte active */}
        <div className="mt-2.5 flex lg:hidden items-center justify-center gap-1.5">
          {FIVE_UNIVERSES.map((u, idx) => (
            <button
              key={`dot-${u.id}`}
              type="button"
              onClick={() => selectUniverse(idx)}
              aria-label={`Aller à l'univers ${u.title}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                activeIdx === idx
                  ? "w-6 bg-kenenti-navy"
                  : "w-1.5 bg-kenenti-navy/25"
              )}
            />
          ))}
        </div>

        {/* Cadre Devis en 3 Étapes : Bandeau Horizontal Chic sous les 5 Univers */}
        <article className="mt-4 sm:mt-6 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0B1933] via-[#152C57] to-[#0B1933] p-4 sm:p-6 text-white shadow-[0_12px_30px_-10px_rgba(15,33,67,0.4)] border border-kenenti-yellow/35">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-2 flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/45 px-2.5 py-0.5 font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                <span>Devis Rénovation en 3 Étapes</span>
              </div>
              <h3 className="font-heading text-sm sm:text-xl font-extrabold text-white leading-snug">
                Étude manuelle sur photos WhatsApp ou dépôt en atelier
              </h3>

              <ol className="grid grid-cols-3 gap-2 sm:gap-3 pt-1 text-[10px] sm:text-xs text-white/90">
                <li className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white/10 border border-white/15 px-2.5 py-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow font-heading text-[10px] font-extrabold text-kenenti-navy">
                    1
                  </span>
                  <span className="font-semibold leading-tight">Article &amp; Soin</span>
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white/10 border border-white/15 px-2.5 py-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow font-heading text-[10px] font-extrabold text-kenenti-navy">
                    2
                  </span>
                  <span className="font-semibold leading-tight">2 à 4 Photos</span>
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white/10 border border-white/15 px-2.5 py-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow font-heading text-[10px] font-extrabold text-kenenti-navy">
                    3
                  </span>
                  <span className="font-semibold leading-tight">Collecte / Atelier</span>
                </li>
              </ol>
            </div>

            <div className="shrink-0">
              <a
                href={KENENTI_BRAND.whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 sm:h-12 w-full lg:w-auto items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-5 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-md transition-transform active:scale-[0.99] hover:bg-[#f2aa40]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Envoyer mes photos sur WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
=======
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-kenenti-navy/15 to-transparent"
      />
    </section>
  );
}
