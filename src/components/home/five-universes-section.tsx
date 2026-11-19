import {
  ChevronRight,
  Footprints,
  Briefcase,
  Shirt,
  Armchair,
  CarFront,
} from "lucide-react";
import { FIVE_UNIVERSES, KENENTI_BRAND } from "@/lib/kenenti-data";

const UNIVERSE_ICONS: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Footprints,
  2: Briefcase,
  3: Shirt,
  4: Armchair,
  5: CarFront,
};

export function FiveUniversesSection() {
  return (
    <section
      id="nos-5-univers"
      aria-labelledby="universes-heading"
      className="relative py-6 sm:py-12 lg:py-16 bg-white"
    >
      <div className="container max-w-6xl">
        {/* En-tête de section épuré */}
        <div className="flex items-end justify-between gap-2 mb-4 sm:mb-7">
          <div>
            <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-0.5">
              Nos Services
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
            const whatsappHref = `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
              `Bonjour KENENTI, je souhaite demander un devis rénovation pour l'univers "${universe.title}".`
            )}`;

            return (
              <article
                key={universe.id}
                id={`univers-${universe.slug}`}
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
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-heading text-[11px] sm:text-xs font-extrabold text-kenenti-navy group-hover:text-[#D98A1C] transition-colors"
                  >
                    <span>Devis</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-kenenti-navy/15 to-transparent"
      />
    </section>
  );
}
