import Link from "next/link";
import {
  MapPin,
  Phone,
  ArrowRight,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { WORKSHOPS, KENENTI_BRAND } from "@/lib/kenenti-data";

export function WorkshopSection() {
  return (
    <section
      id="notre-atelier"
      aria-labelledby="workshop-heading"
      className="bg-[#F7F6F2] py-6 sm:py-14 lg:py-20 border-b border-kenenti-navy/10"
    >
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-7 items-stretch">
          {/* Colonne Gauche : Carte Sombre "L'Atelier & Notre Savoir-Faire" fidèle à l'écran 10 de la maquette */}
          <div className="lg:col-span-6 flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0F2143] text-white shadow-sm sm:shadow-card">
            <div className="relative h-40 sm:h-60 w-full overflow-hidden">
              <img
                src="/images/ateliers/atelier-presse-1.jpg"
                alt="Artisans et fondateur au travail dans l'atelier KENENTI"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F2143] via-[#0F2143]/35 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
                <span className="inline-block rounded-full bg-kenenti-yellow px-2.5 py-0.5 sm:px-3 sm:py-1 font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy mb-1">
                  Savoir-Faire Artisanal
                </span>
                <h2
                  id="workshop-heading"
                  className="font-heading text-base sm:text-2xl font-extrabold text-white leading-tight"
                >
                  L&apos;Atelier &amp; Notre Savoir-Faire
                </h2>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-4 sm:p-7 space-y-3.5 sm:space-y-5">
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                Né à La Goulette, <strong className="text-white">KENENTI</strong> est le
                1er atelier tunisien dédié au nettoyage, à la rénovation et à la
                personnalisation de sneakers, maroquinerie, vêtements en cuir, salons et
                intérieurs automobiles.
              </p>

              <Link
                href="/notre-atelier"
                className="flex h-10 sm:h-12 w-full items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-4 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-md"
              >
                <span>Découvrir notre atelier</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Colonne Droite : "Nos ateliers" (2 cartes côte à côte MÊME SUR MOBILE comme sur l'écran 10 de la maquette !) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-kenenti-navy/15 bg-white p-4 sm:p-7 shadow-sm space-y-4">
            <div>
              <div className="mb-3 sm:mb-4">
                <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
                  Nos 2 Adresses en Tunisie
                </p>
                <h3 className="mt-0.5 font-heading text-base sm:text-2xl font-extrabold text-kenenti-navy">
                  Nos ateliers : La Goulette &amp; Menzah 6
                </h3>
              </div>

              {/* Grille 2 colonnes sur mobile (grid-cols-2) fidèle à l'écran 10 de la maquette */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                {WORKSHOPS.map((workshop, idx) => (
                  <article
                    key={workshop.id}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-kenenti-navy/15 bg-gradient-to-b from-white to-[#FAF8F5] shadow-sm transition-all hover:border-kenenti-yellow hover:shadow-md flex flex-col justify-between"
                  >
                    <div
                      className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-[#0F2143] via-kenenti-yellow to-[#0F2143]"
                      aria-hidden="true"
                    />
                    <div className="relative h-24 sm:h-32 w-full overflow-hidden bg-kenenti-navy">
                      <img
                        src={workshop.image}
                        alt={workshop.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09152E]/75 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <span className="absolute bottom-1.5 left-2 rounded-md bg-kenenti-yellow px-1.5 py-0.5 font-heading text-[8.5px] sm:text-[10px] font-extrabold text-kenenti-navy shadow-sm">
                        Atelier 0{idx + 1}
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading text-xs sm:text-base font-extrabold text-kenenti-navy">
                          {workshop.shortName}
                        </h4>
                        <p className="mt-0.5 text-[10.5px] sm:text-xs text-kenenti-navy/75 leading-snug line-clamp-2">
                          {workshop.address}
                        </p>
                      </div>

                      <div className="pt-1.5 border-t border-kenenti-navy/10 space-y-1">
                        <a
                          href={workshop.phoneHref}
                          className="flex items-center gap-1 text-[10.5px] sm:text-xs font-heading font-bold text-kenenti-navy hover:text-kenenti-red transition-colors"
                        >
                          <Phone className="h-3 w-3 shrink-0 text-[#D98A1C]" aria-hidden="true" />
                          <span className="truncate">{workshop.phoneDisplay}</span>
                        </a>

                        <a
                          href={workshop.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-heading font-semibold text-kenenti-navy/70 hover:text-kenenti-navy transition-colors"
                        >
                          <MapPin className="h-3 w-3 shrink-0 text-kenenti-red" aria-hidden="true" />
                          <span>Voir sur la carte</span>
                          <ExternalLink className="h-2.5 w-2.5 opacity-60" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Bouton WhatsApp vert inspiré de l'écran 11 de la maquette */}
            <div className="pt-2.5 border-t border-kenenti-navy/10 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs text-kenenti-navy/75">
                <span>WhatsApp Direct :</span>
                <strong className="font-heading font-bold text-kenenti-navy">
                  {KENENTI_BRAND.whatsappGeneralDisplay}
                </strong>
              </div>

              <a
                href={KENENTI_BRAND.whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 sm:h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 font-heading text-xs sm:text-sm font-extrabold text-white shadow-md"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Envoyer un message WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
