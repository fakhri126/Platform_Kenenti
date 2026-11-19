import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  Truck,
  Home,
  Footprints,
  ShoppingBag,
  Hammer,
} from "lucide-react";
import { KENENTI_BRAND, WORKSHOPS, FIVE_UNIVERSES } from "@/lib/kenenti-data";

export function SiteFooter() {
  return (
    <>
      <footer
        id="contact-devis"
        className="bg-[#0F2143] text-white border-t-2 sm:border-t-4 border-kenenti-yellow pb-16 lg:pb-0"
      >
        {/* Bandeau d'engagements compact sur mobile */}
        <div className="border-b border-white/10 bg-[#0A1731]">
          <div className="container py-4 sm:py-8">
            <div className="grid gap-2.5 sm:gap-6 md:grid-cols-3">
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-white">
                    Devis examiné manuellement
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-white/75 leading-snug">
                    Évaluation par nos artisans avant confirmation de tarif ou de délai.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-white">
                    Collecte &amp; Retour à domicile
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-white/75 leading-snug">
                    KENENTI récupère votre article chez vous et vous le retourne restauré
                    sans vous déplacer. Paiement à la livraison (COD).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-white">
                    WhatsApp &amp; 2 Ateliers
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-white/75 leading-snug">
                    La Goulette (29 286 445) &amp; Menzah 6 (28 877 074).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal du pied de page */}
        <div className="container py-7 sm:py-12">
          <div className="grid gap-6 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Colonne 1 : Marque */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 rounded-xl bg-white px-3 py-1.5 sm:px-3.5 sm:py-2">
                <Image
                  src={KENENTI_BRAND.logos.icon192}
                  alt="Logo officiel KENENTI"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                />
                <span className="font-heading text-sm sm:text-base font-extrabold tracking-widest text-kenenti-navy">
                  KENENTI
                </span>
              </div>
              <p className="font-heading text-xs sm:text-sm font-bold text-kenenti-yellow">
                « {KENENTI_BRAND.slogan} »
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {KENENTI_BRAND.shortIntro}
              </p>
            </div>

            {/* Colonne 2 : Nos 5 univers */}
            <div>
              <h2 className="font-heading text-xs sm:text-sm font-bold text-kenenti-yellow uppercase tracking-wider">
                Nos 5 Univers
              </h2>
              <ul className="mt-2.5 sm:mt-4 grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/85">
                {FIVE_UNIVERSES.map((universe) => (
                  <li key={universe.id}>
                    <Link
                      href={`/#univers-${universe.slug}`}
                      className="inline-flex items-center gap-1.5 hover:text-kenenti-yellow transition-colors py-0.5"
                    >
                      <span className="text-kenenti-yellow font-bold">
                        0{universe.id}.
                      </span>
                      <span className="truncate">{universe.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 : Nos 2 Ateliers */}
            <div>
              <h2 className="font-heading text-xs sm:text-sm font-bold text-kenenti-yellow uppercase tracking-wider">
                Nos 2 Ateliers
              </h2>
              <div className="mt-2.5 sm:mt-4 grid grid-cols-2 sm:grid-cols-1 gap-2.5 text-xs">
                {WORKSHOPS.map((w) => (
                  <div
                    key={w.id}
                    className="rounded-xl border border-white/15 bg-white/5 p-2.5 sm:p-3 space-y-1"
                  >
                    <p className="font-heading font-bold text-white text-xs">
                      {w.shortName}
                    </p>
                    <p className="flex items-start gap-1.5 text-[11px] text-white/80">
                      <MapPin
                        className="h-3.5 w-3.5 shrink-0 text-kenenti-yellow mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="line-clamp-2">{w.address}</span>
                    </p>
                    <p className="flex items-center gap-1.5 text-[11px]">
                      <Phone
                        className="h-3.5 w-3.5 shrink-0 text-kenenti-yellow"
                        aria-hidden="true"
                      />
                      <a
                        href={w.phoneHref}
                        className="font-semibold text-kenenti-yellow hover:underline"
                      >
                        {w.phoneDisplay}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne 4 : Contact & Devis */}
            <div>
              <h2 className="font-heading text-xs sm:text-sm font-bold text-kenenti-yellow uppercase tracking-wider">
                Contact &amp; Devis
              </h2>
              <div className="mt-2.5 sm:mt-4 space-y-2.5">
                <a
                  href={KENENTI_BRAND.whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 sm:h-11 w-full items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-4 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Demander un devis WhatsApp</span>
                </a>
                <a
                  href={`mailto:${KENENTI_BRAND.email}`}
                  className="flex h-9 sm:h-10 items-center gap-2 rounded-xl border border-white/20 px-3.5 text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-kenenti-yellow" aria-hidden="true" />
                  <span>{KENENTI_BRAND.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 bg-[#09152E] py-3.5 text-[11px] text-white/75">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © {new Date().getFullYear()} <strong>KENENTI</strong> — «{" "}
              {KENENTI_BRAND.slogan} ».
            </p>
          </div>
        </div>
      </footer>

      {/* Barre de navigation inférieure Mobile */}
      <nav
        aria-label="Navigation rapide mobile"
        className="fixed bottom-0 inset-x-0 z-40 flex lg:hidden items-center justify-around border-t border-kenenti-navy/15 bg-white/95 backdrop-blur-md pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] px-1 shadow-[0_-4px_16px_rgba(15,33,67,0.08)]"
      >
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 px-2 py-0.5 text-[10px] font-heading font-bold text-kenenti-navy"
        >
          <Home className="h-4 w-4 text-kenenti-navy" aria-hidden="true" />
          <span>Accueil</span>
        </Link>
        <Link
          href="/#nos-5-univers"
          className="flex flex-col items-center gap-0.5 px-2 py-0.5 text-[10px] font-heading font-semibold text-kenenti-navy/65 hover:text-kenenti-navy"
        >
          <Footprints className="h-4 w-4" aria-hidden="true" />
          <span>Services</span>
        </Link>
        <Link
          href="/#notre-boutique"
          className="flex flex-col items-center gap-0.5 px-2 py-0.5 text-[10px] font-heading font-semibold text-kenenti-navy/65 hover:text-kenenti-navy"
        >
          <ShoppingBag className="h-4 w-4" aria-hidden="true" />
          <span>Boutique</span>
        </Link>
        <Link
          href="/#notre-atelier"
          className="flex flex-col items-center gap-0.5 px-2 py-0.5 text-[10px] font-heading font-semibold text-kenenti-navy/65 hover:text-kenenti-navy"
        >
          <Hammer className="h-4 w-4" aria-hidden="true" />
          <span>Atelier</span>
        </Link>
        <a
          href={KENENTI_BRAND.whatsappGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-kenenti-yellow px-3 py-1 text-[10px] font-heading font-extrabold text-kenenti-navy shadow-sm"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span>Devis</span>
        </a>
      </nav>
    </>
  );
}
