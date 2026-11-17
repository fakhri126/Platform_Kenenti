import {
  MessageSquareQuote,
  Instagram,
  Facebook,
  Tv,
  ExternalLink,
} from "lucide-react";
import { KENENTI_BRAND } from "@/lib/kenenti-data";

const SOCIAL_PLACEHOLDER_SLOTS = [
  {
    id: "slot-1",
    slotLabel: "Espace Avis #01",
    channel: "Instagram • @kenenti_brand",
    targetUniverse: "Chaussures & Sneakers",
    href: KENENTI_BRAND.socials.instagramBrand,
    note: "Espace réservé à un avis client authentique issu du compte Instagram officiel KENENTI.",
  },
  {
    id: "slot-2",
    slotLabel: "Espace Avis #02",
    channel: "Instagram • @kenenti_sneakers_custom",
    targetUniverse: "Maroquinerie & Customisation",
    href: KENENTI_BRAND.socials.instagramCustom,
    note: "Espace réservé à un retour client réel issu de la galerie de réalisations KENENTI.",
  },
  {
    id: "slot-3",
    slotLabel: "Espace Avis #03",
    channel: "Facebook • KENENTI",
    targetUniverse: "Produits de Soin & Ateliers",
    href: KENENTI_BRAND.socials.facebook,
    note: "Espace réservé à un témoignage officiel publié sur la page Facebook KENENTI.",
  },
];

const VERIFIED_MEDIA_FEATURES = [
  "DW (Deutsche Welle)",
  "Al Jazeera",
  "Asharq News",
  "Anadolu Ajansı",
  "Al Arab",
  "Kapitalis",
  "L'instant M",
];

export function SocialReviewsSection() {
  return (
    <section
      id="avis-reseaux-sociaux"
      aria-labelledby="social-reviews-heading"
      className="bg-white py-6 sm:py-14 lg:py-20 border-b border-kenenti-navy/10"
    >
      <div className="container max-w-6xl">
        {/* En-tête Mobile-First */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-5 mb-4 sm:mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-sand px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider text-kenenti-navy">
              <MessageSquareQuote className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-kenenti-red" aria-hidden="true" />
              <span>Avis des Réseaux Sociaux</span>
            </div>
            <h2
              id="social-reviews-heading"
              className="text-base sm:text-2xl lg:text-3xl font-heading font-extrabold text-kenenti-navy tracking-tight"
            >
              La Confiance de Notre Communauté
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={KENENTI_BRAND.socials.instagramBrand}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg sm:rounded-xl border border-kenenti-navy/15 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-heading font-bold text-kenenti-navy transition-colors hover:bg-kenenti-sand/50"
            >
              <Instagram className="h-3.5 w-3.5 text-kenenti-red" aria-hidden="true" />
              <span>@kenenti_brand</span>
            </a>
            <a
              href={KENENTI_BRAND.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg sm:rounded-xl border border-kenenti-navy/15 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-heading font-bold text-kenenti-navy transition-colors hover:bg-kenenti-sand/50"
            >
              <Facebook className="h-3.5 w-3.5 text-kenenti-navy" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Cartes d'avis : Carrousel horizontal compact sur mobile (flex overflow-x-auto), Grille 3 colonnes sur md+ */}
        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-1">
          {SOCIAL_PLACEHOLDER_SLOTS.map((slot) => (
            <article
              key={slot.id}
              className="w-[265px] sm:w-[300px] md:w-auto shrink-0 snap-start flex flex-col justify-between rounded-2xl border border-kenenti-navy/15 bg-kenenti-sand/25 p-3.5 sm:p-5 transition-all hover:border-kenenti-navy/30"
            >
              <div className="space-y-2.5 sm:space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-kenenti-navy px-2.5 py-0.5 text-[10px] font-heading font-bold uppercase tracking-wider text-kenenti-yellow">
                    {slot.slotLabel}
                  </span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-heading font-semibold text-kenenti-navy/70 border border-kenenti-navy/10">
                    À intégrer
                  </span>
                </div>

                <div>
                  <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-kenenti-red">
                    {slot.targetUniverse}
                  </p>
                  <p className="text-xs sm:text-sm font-heading font-bold text-kenenti-navy">
                    {slot.channel}
                  </p>
                </div>

                <div className="rounded-xl bg-white/90 p-3 border border-kenenti-navy/10">
                  <p className="text-[11px] sm:text-xs text-kenenti-navy/75 leading-relaxed">
                    {slot.note}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-kenenti-navy/10 flex items-center justify-between">
                <a
                  href={slot.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-kenenti-navy hover:text-kenenti-red transition-colors"
                >
                  <span>Page officielle</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <span className="text-[10px] font-medium text-kenenti-navy/55">
                  0 faux avis
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bandeau Presse & Médias ("Ils parlent de nous") compact sur mobile */}
        <div className="mt-4 sm:mt-8 rounded-2xl sm:rounded-3xl bg-kenenti-navy p-4 sm:p-7 lg:p-8 text-white shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider text-kenenti-yellow">
                <Tv className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Ils Parlent de Nous</span>
              </div>
              <h3 className="text-sm sm:text-xl font-heading font-extrabold text-white leading-snug">
                Un savoir-faire salué par 7 médias nationaux &amp; internationaux
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {VERIFIED_MEDIA_FEATURES.map((media) => (
                <span
                  key={media}
                  className="rounded-lg bg-white/10 border border-white/15 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10.5px] sm:text-xs font-heading font-bold text-white"
                >
                  {media}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
