import Image from "next/image";
import {
  ChevronRight,
  MessageCircle,
  Check,
} from "lucide-react";
import { FIVE_UNIVERSES, KENENTI_BRAND } from "@/lib/kenenti-data";

export function FiveUniversesSection() {
  return (
    <section
      id="nos-5-univers"
      aria-labelledby="universes-heading"
      className="py-6 sm:py-14 lg:py-20 bg-[#F7F6F2] border-b border-kenenti-navy/10"
    >
      <div className="container max-w-6xl">
        {/* En-tête Mobile-First : "Nos 5 Univers de Rénovation" + "Voir tout >" comme sur l'écran 1 de la maquette */}
        <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-8">
          <div>
            <p className="hidden sm:block text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-1">
              Savoir-Faire &amp; Prestations
            </p>
            <h2
              id="universes-heading"
              className="font-heading text-base sm:text-2xl lg:text-3xl font-extrabold text-kenenti-navy tracking-tight"
            >
              Nos 5 Univers de Rénovation
            </h2>
          </div>

          <a
            href={KENENTI_BRAND.whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-heading text-xs sm:text-sm font-bold text-kenenti-navy/75 hover:text-kenenti-navy transition-colors shrink-0"
          >
            <span>Voir tout</span>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Aperçu Mobile Horizontal (2 cartes côte à côte exactement comme au bas de l'écran "1. Accueil" de la maquette) */}
        <div className="grid grid-cols-2 gap-2.5 mb-3 sm:hidden">
          {FIVE_UNIVERSES.slice(0, 2).map((u) => {
            const whatsappHref = `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
              `Bonjour KENENTI, je souhaite demander un devis rénovation pour l'univers "${u.title}".`
            )}`;
            return (
              <a
                key={`featured-mobile-${u.id}`}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-xl border border-kenenti-navy/10 bg-white shadow-sm flex flex-col"
              >
                <div className="relative h-24 w-full overflow-hidden bg-kenenti-navy">
                  <Image
                    src={u.image}
                    alt={u.imageAlt}
                    fill
                    loading="lazy"
                    sizes="50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-2.5">
                  <p className="font-heading text-xs font-extrabold text-kenenti-navy truncate">
                    {u.shortTitle}
                  </p>
                  <p className="text-[10.5px] font-semibold text-kenenti-navy/65 truncate mt-0.5">
                    Sur devis personnalisé
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Liste Mobile-First (Cartes horizontales compactes sur mobile comme l'écran "2. Services & Devis", Grille 3 colonnes sur desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {FIVE_UNIVERSES.map((universe) => {
            const whatsappHref = `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
              `Bonjour KENENTI, je souhaite demander un devis rénovation pour l'univers "${universe.title}".`
            )}`;

            return (
              <article
                key={universe.id}
                id={`univers-${universe.slug}`}
                className="group flex flex-row sm:flex-col items-center sm:items-stretch overflow-hidden rounded-2xl border border-kenenti-navy/10 bg-white p-2.5 sm:p-0 shadow-sm transition-all duration-300 hover:shadow-card gap-3 sm:gap-0"
              >
                {/* Vignette : w-24 h-20 arrondie à gauche sur mobile, aspect-[16/10] pleine largeur en haut sur desktop */}
                <div className="relative h-20 w-24 sm:h-auto sm:w-full sm:aspect-[16/10] shrink-0 overflow-hidden rounded-xl sm:rounded-none bg-kenenti-navy">
                  <Image
                    src={universe.image}
                    alt={universe.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="hidden sm:block pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                    aria-hidden="true"
                  />

                  <span className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 inline-flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-md sm:rounded-lg bg-kenenti-navy/90 font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow shadow-sm">
                    0{universe.id}
                  </span>

                  <span className="hidden sm:inline-block absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 font-heading text-[11px] font-bold text-kenenti-navy shadow-sm">
                    {universe.modeLabel}
                  </span>
                </div>

                {/* Contenu : Compact à droite sur mobile, complet sur desktop */}
                <div className="flex flex-1 flex-col justify-between min-w-0 sm:p-5">
                  <div className="space-y-1 sm:space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-xs sm:text-lg font-extrabold text-kenenti-navy truncate">
                        {universe.id}. {universe.title}
                      </h3>
                      <span className="sm:hidden shrink-0 rounded-md bg-kenenti-sand/60 px-2 py-0.5 text-[9.5px] font-heading font-bold text-kenenti-navy">
                        {universe.modeLabel}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs lg:text-sm text-kenenti-navy/75 leading-snug line-clamp-2 sm:line-clamp-none">
                      {universe.description}
                    </p>

                    <ul className="hidden sm:block space-y-1 pt-1">
                      {universe.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-medium text-kenenti-navy/85"
                        >
                          <Check
                            className="h-3.5 w-3.5 text-[#D98A1C] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pied de carte */}
                  <div className="mt-2 sm:mt-4 sm:pt-3 sm:border-t sm:border-kenenti-navy/10 flex items-center justify-between gap-2">
                    <span className="font-heading text-[11px] sm:text-xs lg:text-sm font-extrabold text-kenenti-navy">
                      Sur devis personnalisé
                    </span>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg sm:rounded-xl bg-kenenti-yellow px-2.5 py-1 sm:px-3.5 sm:py-2 font-heading text-[10.5px] sm:text-xs font-extrabold text-kenenti-navy shadow-sm transition-colors hover:bg-[#f2aa40]"
                    >
                      <span>Devis</span>
                      <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}

          {/* 6e carte : Devis en 3 étapes (compacte sur mobile, complète sur desktop) */}
          <article className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0F2143] via-[#1A3263] to-[#0F2143] p-4 sm:p-5 text-white shadow-card">
            <div className="space-y-2.5 sm:space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/40 px-2.5 py-0.5 font-heading text-[10.5px] sm:text-xs font-bold text-kenenti-yellow">
                  Devis Rénovation en 3 Étapes
                </span>
              </div>
              <h3 className="font-heading text-sm sm:text-xl font-extrabold text-white leading-snug">
                Étude manuelle sur photos ou en atelier
              </h3>
              <ol className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-2.5 text-[10.5px] sm:text-xs text-white/85">
                <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 rounded-xl bg-white/5 p-2 sm:p-0 sm:bg-transparent">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow font-heading text-[10px] font-extrabold text-kenenti-navy">
                    1
                  </span>
                  <span>Support &amp; Prestation</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 rounded-xl bg-white/5 p-2 sm:p-0 sm:bg-transparent">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow font-heading text-[10px] font-extrabold text-kenenti-navy">
                    2
                  </span>
                  <span>2 à 4 Photos</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 rounded-xl bg-white/5 p-2 sm:p-0 sm:bg-transparent">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow font-heading text-[10px] font-extrabold text-kenenti-navy">
                    3
                  </span>
                  <span>Collecte ou Atelier</span>
                </li>
              </ol>
            </div>

            <div className="mt-3.5 sm:mt-5 pt-3 border-t border-white/15">
              <a
                href={KENENTI_BRAND.whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 sm:h-11 w-full items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-4 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-md"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>Envoyer mes photos sur WhatsApp</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
