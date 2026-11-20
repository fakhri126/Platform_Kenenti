import { Trophy, Truck, MapPin, Award } from "lucide-react";

const WHY_CHOOSE_KENENTI = [
  {
    id: "pionnier",
    statValue: "1er Atelier",
    statTitle: "en Tunisie",
    description: "Pionnier de la rénovation cuir & sneakers.",
    icon: Trophy,
  },
  {
    id: "collecte-retour",
    statValue: "Collecte & Retour",
    statTitle: "à domicile sans bouger",
    description: "Récupération chez vous et livraison prêt à porter.",
    icon: Truck,
  },
  {
    id: "deux-ateliers",
    statValue: "2 Ateliers",
    statTitle: "La Goulette & Menzah 6",
    description: "Diagnostic manuel et conseil par nos artisans.",
    icon: MapPin,
  },
  {
    id: "paires-renovees",
    statValue: "+1 500 Paires",
    statTitle: "rénovées en atelier",
    description: "Chaussures, sneakers et cuirs restaurés avec soin.",
    icon: Award,
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="nos-points-forts"
      aria-labelledby="why-choose-heading"
      className="relative py-6 sm:py-12 lg:py-16 bg-[#F4F4F5] text-kenenti-navy border-y border-kenenti-navy/8"
    >
      <div className="container max-w-6xl">
        <div className="mb-4 sm:mb-7">
          <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-0.5">
            Pourquoi Choisir KENENTI
          </p>
          <h2
            id="why-choose-heading"
            className="font-heading text-base sm:text-2xl lg:text-3xl font-extrabold text-kenenti-navy tracking-tight"
          >
            Nos Points Forts
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {WHY_CHOOSE_KENENTI.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.id}
                className="group flex flex-col justify-between rounded-2xl border border-kenenti-navy/10 bg-white p-3.5 sm:p-5 shadow-[0_6px_22px_-12px_rgba(15,33,67,0.1)] transition-all hover:border-kenenti-yellow/70 hover:shadow-[0_12px_28px_-14px_rgba(15,33,67,0.14)]"
              >
                <div className="space-y-2.5">
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F4F5] border border-kenenti-navy/10 text-[#D98A1C] transition-colors group-hover:bg-kenenti-yellow group-hover:text-kenenti-navy group-hover:border-kenenti-yellow">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="font-heading text-xs sm:text-lg font-extrabold text-kenenti-navy leading-tight">
                      {pillar.statValue}
                    </p>
                    <p className="font-heading text-[10.5px] sm:text-xs font-bold text-[#D98A1C] leading-tight mt-0.5">
                      {pillar.statTitle}
                    </p>
                  </div>

                  <p className="text-[11px] sm:text-xs text-kenenti-navy/70 leading-snug">
                    {pillar.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
