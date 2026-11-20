import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FIVE_UNIVERSES, KENENTI_BRAND } from "@/lib/kenenti-data";
import { UNIVERSE_CONFIGS } from "@/lib/services-catalog";
import {
  StepProgressBar,
  type StepItem,
} from "@/components/services/step-progress-bar";
import { cn } from "@/lib/utils";

const STEPS: StepItem[] = [
  { num: 1, label: "Univers & Entretien" },
  { num: 2, label: "Photos & Description" },
  { num: 3, label: "Formulaire" },
];

export function ServicesPageContent() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF8F5] via-white to-[#F5F2EC] py-6 sm:py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,185,91,0.14),transparent_60%)]"
      />

      <div className="container relative z-10 max-w-5xl">
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-1">
            Nos Services • « {KENENTI_BRAND.slogan} »
          </p>
          <h1 className="font-heading text-lg sm:text-3xl font-extrabold text-kenenti-navy tracking-tight">
            Demande de Devis Rénovation
          </h1>
        </div>

        <StepProgressBar steps={STEPS} currentStep={1} />

        <section aria-labelledby="step1-univers-heading" className="space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
              Étape 1 • Choix de l&apos;univers
            </span>
            <h2
              id="step1-univers-heading"
              className="font-heading text-base sm:text-2xl font-extrabold text-kenenti-navy"
            >
              Choisissez parmi nos 5 Univers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {FIVE_UNIVERSES.map((universe, idx) => {
              const cfg = UNIVERSE_CONFIGS[universe.id];
              const isFullWidthDesktop = idx === 0;

              return (
                <Link
                  key={universe.id}
                  href={`/services/${universe.slug}`}
                  className={cn(
                    "group relative block text-left overflow-hidden rounded-2xl border border-kenenti-navy/12 bg-white shadow-sm transition-all hover:border-kenenti-navy/35 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-navy",
                    isFullWidthDesktop && "md:col-span-2"
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden bg-kenenti-navy",
                      isFullWidthDesktop
                        ? "h-64 sm:h-80 lg:h-96"
                        : "h-60 sm:h-72 lg:h-80"
                    )}
                  >
                    <img
                      src={cfg?.heroPhoto ?? universe.image}
                      alt={universe.title}
                      fetchPriority={idx === 0 ? "high" : undefined}
                      loading={idx === 0 ? undefined : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09152E] via-[#09152E]/35 to-transparent"
                    />

                    <span className="absolute top-3 left-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 font-heading text-[11px] sm:text-xs font-extrabold text-white">
                      0{universe.id} • Avant / Après
                    </span>

                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-heading text-[11px] sm:text-xs font-extrabold text-kenenti-navy shadow-sm transition-colors group-hover:bg-kenenti-yellow">
                      <span>Choisir</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 text-white">
                      <h3 className="font-heading text-lg sm:text-2xl font-extrabold text-white leading-tight">
                        {universe.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl">
                        {universe.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
