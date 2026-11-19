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
    id: "gamme-pro",
    statValue: "67 Produits Pro",
    statTitle: "Peintures, kits & soins",
    description: "Gamme complète formulée pour l'entretien durable.",
    icon: Award,
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="nos-points-forts"
      aria-labelledby="why-choose-heading"
      className="relative py-6 sm:py-12 lg:py-16 bg-gradient-to-b from-[#0F2143] to-[#162B55] text-white"
    >
      <div className="container max-w-6xl">
        <div className="mb-4 sm:mb-7">
          <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-kenenti-yellow mb-0.5">
            Pourquoi Choisir KENENTI
          </p>
          <h2
            id="why-choose-heading"
            className="font-heading text-base sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight"
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
                className="group flex flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.06] p-3.5 sm:p-5 backdrop-blur-sm transition-all hover:border-kenenti-yellow/40 hover:bg-white/[0.09]"
              >
                <div className="space-y-2.5">
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-kenenti-yellow text-kenenti-navy shadow-sm">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="font-heading text-xs sm:text-lg font-extrabold text-white leading-tight">
                      {pillar.statValue}
                    </p>
                    <p className="font-heading text-[10.5px] sm:text-xs font-bold text-kenenti-yellow leading-tight mt-0.5">
                      {pillar.statTitle}
                    </p>
                  </div>

                  <p className="text-[11px] sm:text-xs text-white/80 leading-snug">
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
