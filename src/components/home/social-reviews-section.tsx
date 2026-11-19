"use client";

import * as React from "react";
import Image from "next/image";
import {
  MessageSquareQuote,
  Instagram,
  Facebook,
  Tv,
  ExternalLink,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { KENENTI_BRAND } from "@/lib/kenenti-data";

const SOCIAL_REVIEW_TILES = [
  {
    id: "slot-1",
    badge: "Avis & Réalisations #01",
    platform: "Instagram",
    handle: "@kenenti_brand",
    targetUniverse: "Chaussures & Sneakers",
    image: "/images/avant-apres/sneaker-profile-after.jpg",
    imageAlt: "Sneaker en cuir blanc remise à neuf par l'atelier KENENTI",
    highlightTitle: "Remise à neuf & Déjaunissement",
    quote:
      "« Résultat bluffant sur mes sneakers blanches, le cuir et la semelle sont revenus comme au premier jour avec la collecte à domicile ! »",
    href: KENENTI_BRAND.socials.instagramBrand,
    ctaText: "Voir sur Instagram",
  },
  {
    id: "slot-2",
    badge: "Avis & Réalisations #02",
    platform: "Instagram",
    handle: "@kenenti_sneakers_custom",
    targetUniverse: "Maroquinerie & Luxe",
    image: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_b462408b.jpg",
    imageAlt: "Sac à main Chanel restauré et repigmenté en cuir noir par KENENTI",
    highlightTitle: "Soin des Pièces de Marque",
    quote:
      "« Travail d'orfèvre sur mon sac en cuir : repigmentation uniforme, nutrition du cuir et finitions impeccables en atelier. »",
    href: KENENTI_BRAND.socials.instagramCustom,
    ctaText: "Galerie Instagram",
  },
  {
    id: "slot-3",
    badge: "Avis & Réalisations #03",
    platform: "Facebook",
    handle: "KENENTI Officiel",
    targetUniverse: "Produits de Soin & Ateliers",
    image: "/images/ateliers/atelier-presse-1.jpg",
    imageAlt: "Artisans KENENTI au travail dans l'atelier de rénovation",
    highlightTitle: "Peintures 100ml & Diagnostic",
    quote:
      "« Accueil très professionnel à La Goulette et Menzah 6. Les peintures cuir et daim KENENTI offrent une couvrance exceptionnelle. »",
    href: KENENTI_BRAND.socials.facebook,
    ctaText: "Avis sur Facebook",
  },
];

interface MediaOutlet {
  id: string;
  name: string;
  category: string;
  renderLogo: () => React.ReactNode;
}

const VERIFIED_MEDIA_OUTLETS: MediaOutlet[] = [
  {
    id: "dw",
    name: "DW (Deutsche Welle)",
    category: "TV Internationale",
    renderLogo: () => (
      <svg viewBox="0 0 64 40" className="h-7 w-11 shrink-0" aria-hidden="true">
        <rect width="64" height="40" rx="6" fill="#002D5A" />
        <text
          x="32"
          y="26"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="18"
          letterSpacing="1"
        >
          DW
        </text>
        <rect x="14" y="31" width="36" height="2.5" rx="1.25" fill="#00A5FF" />
      </svg>
    ),
  },
  {
    id: "aljazeera",
    name: "Al Jazeera",
    category: "Média International",
    renderLogo: () => (
      <svg viewBox="0 0 64 40" className="h-7 w-11 shrink-0" aria-hidden="true">
        <rect width="64" height="40" rx="6" fill="#0F1E36" />
        <path
          d="M32 6C27 12 24 17 26 22C27.5 25.5 31 27 34 25C36.5 23.2 37 19 35 15C38.5 18 39.5 23 36.5 27.5C33.5 31.5 27 31 23.5 26.5C20 22 22.5 14 32 6Z"
          fill="#E59F24"
        />
        <text
          x="32"
          y="36"
          textAnchor="middle"
          fill="#F4C15D"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="6.5"
          letterSpacing="0.8"
        >
          AL JAZEERA
        </text>
      </svg>
    ),
  },
  {
    id: "asharq",
    name: "Asharq News",
    category: "TV & Économie",
    renderLogo: () => (
      <svg viewBox="0 0 64 40" className="h-7 w-11 shrink-0" aria-hidden="true">
        <rect width="64" height="40" rx="6" fill="#121824" />
        <circle cx="20" cy="20" r="9" fill="#E62E2D" />
        <path d="M13 17H27M12 20H28M13 23H27" stroke="#FFFFFF" strokeWidth="1.6" />
        <text
          x="45"
          y="19"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="9.5"
        >
          الشرق
        </text>
        <text
          x="45"
          y="28"
          textAnchor="middle"
          fill="#E62E2D"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="6"
          letterSpacing="0.6"
        >
          ASHARQ
        </text>
      </svg>
    ),
  },
  {
    id: "anadolu",
    name: "Anadolu Ajansı",
    category: "Agence de Presse",
    renderLogo: () => (
      <svg viewBox="0 0 64 40" className="h-7 w-11 shrink-0" aria-hidden="true">
        <rect width="64" height="40" rx="6" fill="#0B3B68" />
        <circle cx="32" cy="20" r="13" fill="none" stroke="#38A1F3" strokeWidth="1.8" />
        <text
          x="32"
          y="24"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="13"
          letterSpacing="0.8"
        >
          AA
        </text>
      </svg>
    ),
  },
  {
    id: "alarab",
    name: "Al Arab",
    category: "Presse Internationale",
    renderLogo: () => (
      <svg viewBox="0 0 64 40" className="h-7 w-11 shrink-0" aria-hidden="true">
        <rect width="64" height="40" rx="6" fill="#0D402D" />
        <text
          x="32"
          y="21"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="13"
        >
          العرب
        </text>
        <text
          x="32"
          y="32"
          textAnchor="middle"
          fill="#FAB95B"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="6.5"
          letterSpacing="1"
        >
          AL ARAB
        </text>
      </svg>
    ),
  },
  {
    id: "kapitalis",
    name: "Kapitalis",
    category: "Média Tunisien",
    renderLogo: () => (
      <svg viewBox="0 0 64 40" className="h-7 w-11 shrink-0" aria-hidden="true">
        <rect width="64" height="40" rx="6" fill="#FFFFFF" />
        <rect x="4" y="4" width="56" height="32" rx="4" fill="#B91C1C" />
        <text
          x="32"
          y="24"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="10.5"
          letterSpacing="0.4"
        >
          Kapitalis
        </text>
      </svg>
    ),
  },
  {
    id: "linstantm",
    name: "L'instant M",
    category: "Lifestyle & Culture",
    renderLogo: () => (
      <svg viewBox="0 0 64 40" className="h-7 w-11 shrink-0" aria-hidden="true">
        <rect width="64" height="40" rx="6" fill="#16284C" />
        <rect
          x="3"
          y="3"
          width="58"
          height="34"
          rx="4"
          fill="none"
          stroke="#FAB95B"
          strokeWidth="1.2"
        />
        <text
          x="32"
          y="18"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Montserrat, sans-serif"
          fontWeight="700"
          fontSize="7.5"
          letterSpacing="0.6"
        >
          L&apos;INSTANT
        </text>
        <text
          x="32"
          y="31"
          textAnchor="middle"
          fill="#FAB95B"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="12"
        >
          M
        </text>
      </svg>
    ),
  },
];

export function SocialReviewsSection() {
  const marqueeItems = [...VERIFIED_MEDIA_OUTLETS, ...VERIFIED_MEDIA_OUTLETS];

  return (
    <section
      id="avis-reseaux-sociaux"
      aria-labelledby="social-reviews-heading"
      className="bg-gradient-to-b from-white via-[#FAF9F6] to-white py-7 sm:py-14 lg:py-20 border-b border-kenenti-navy/10"
    >
      <div className="container max-w-6xl">
        {/* En-tête Chic Mobile-First */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-5 mb-4 sm:mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-navy px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-kenenti-yellow shadow-sm">
              <MessageSquareQuote className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
              <span>Avis des Réseaux Sociaux</span>
            </div>
            <h2
              id="social-reviews-heading"
              className="text-lg sm:text-2xl lg:text-3xl font-heading font-extrabold text-kenenti-navy tracking-tight"
            >
              La Confiance de Notre Communauté
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={KENENTI_BRAND.socials.instagramBrand}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-kenenti-navy/15 bg-white px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-heading font-extrabold text-kenenti-navy shadow-sm transition-all hover:border-kenenti-yellow hover:shadow-md"
            >
              <Instagram className="h-3.5 w-3.5 text-[#E1306C]" aria-hidden="true" />
              <span>@kenenti_brand</span>
            </a>
            <a
              href={KENENTI_BRAND.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-kenenti-navy/15 bg-white px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-heading font-extrabold text-kenenti-navy shadow-sm transition-all hover:border-kenenti-yellow hover:shadow-md"
            >
              <Facebook className="h-3.5 w-3.5 text-[#1877F2]" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Les Carreaux d'Avis Réseaux Sociaux : Optimisés, Modernes & Chics */}
        <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-1 px-1">
          {SOCIAL_REVIEW_TILES.map((tile) => {
            const isInsta = tile.platform === "Instagram";
            return (
              <article
                key={tile.id}
                className="group relative w-[275px] sm:w-[310px] md:w-auto shrink-0 snap-center flex flex-col justify-between overflow-hidden rounded-2xl border border-kenenti-navy/15 bg-white p-3.5 sm:p-4 shadow-[0_6px_24px_rgba(15,33,67,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-kenenti-yellow hover:shadow-xl"
              >
                {/* Filet supérieur doré chic */}
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F2143] via-kenenti-yellow to-[#0F2143]"
                  aria-hidden="true"
                />

                <div className="space-y-3">
                  {/* En-tête du Carreau Social (Avatar + Compte Vérifié + Plateforme) */}
                  <div className="flex items-center justify-between gap-2 pt-0.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="relative h-9 w-9 shrink-0 rounded-full bg-[#0F2143] p-0.5 ring-2 ring-kenenti-yellow/60">
                        <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5">
                          <Image
                            src={KENENTI_BRAND.logos.icon192}
                            alt="Logo KENENTI"
                            width={32}
                            height={32}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <p className="font-heading text-xs font-extrabold text-kenenti-navy truncate">
                            {tile.handle}
                          </p>
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-[#1877F2]"
                            aria-label="Compte officiel vérifié"
                          />
                        </div>
                        <p className="text-[10px] font-heading font-bold text-[#D98A1C] truncate">
                          {tile.targetUniverse}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9.5px] font-heading font-extrabold text-white shadow-sm shrink-0 ${
                        isInsta
                          ? "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
                          : "bg-[#1877F2]"
                      }`}
                    >
                      {isInsta ? (
                        <Instagram className="h-2.5 w-2.5" aria-hidden="true" />
                      ) : (
                        <Facebook className="h-2.5 w-2.5" aria-hidden="true" />
                      )}
                      <span>{tile.platform}</span>
                    </span>
                  </div>

                  {/* Carreau Visuel avec Note 5 Étoiles */}
                  <div className="relative h-32 sm:h-36 w-full overflow-hidden rounded-xl bg-[#0F2143] border border-kenenti-navy/10">
                    <Image
                      src={tile.image}
                      alt={tile.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 280px, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09152E]/85 via-transparent to-black/20"
                      aria-hidden="true"
                    />

                    {/* Badge 5 Étoiles Dorées */}
                    <div className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-[#09152E]/85 backdrop-blur-md border border-white/20 px-2 py-0.5 text-[10px] font-heading font-extrabold text-kenenti-yellow">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-2.5 w-2.5 fill-kenenti-yellow text-kenenti-yellow"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-white ml-0.5">5.0</span>
                    </div>

                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="font-heading text-[11px] font-extrabold text-white drop-shadow-sm">
                        {tile.highlightTitle}
                      </span>
                      <span className="rounded-md bg-kenenti-yellow px-1.5 py-0.5 font-heading text-[8.5px] font-extrabold uppercase text-kenenti-navy">
                        Atelier Réel
                      </span>
                    </div>
                  </div>

                  {/* Citation Client Chic */}
                  <div className="relative rounded-xl bg-gradient-to-br from-[#FAF8F5] to-[#F3EFE8] p-3 border border-kenenti-navy/10">
                    <p className="text-[11px] sm:text-xs text-kenenti-navy/85 font-medium italic leading-relaxed">
                      {tile.quote}
                    </p>
                  </div>
                </div>

                {/* Pied du Carreau */}
                <div className="mt-3 pt-2.5 border-t border-kenenti-navy/10 flex items-center justify-between">
                  <a
                    href={tile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-kenenti-navy/5 px-2.5 py-1 text-[11px] font-heading font-extrabold text-kenenti-navy hover:bg-kenenti-navy hover:text-kenenti-yellow transition-colors"
                  >
                    <span>{tile.ctaText}</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <span className="inline-flex items-center gap-1 text-[10px] font-heading font-bold text-[#D98A1C]">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    <span>Vérifié</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Cadre "Ils Parlent de Nous" : Moderne & Chic avec Logos dans une Bande Défilante ("Bande qui passe") */}
        <div className="mt-5 sm:mt-9 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#09152E] via-[#132850] to-[#09152E] py-5 sm:py-7 text-white shadow-[0_14px_34px_-10px_rgba(15,33,67,0.5)] border border-kenenti-yellow/35">
          {/* Halo décoratif subtil */}
          <div
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-80 rounded-full bg-kenenti-yellow/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="px-4 sm:px-7 mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/45 px-2.5 py-0.5 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-kenenti-yellow">
                <Tv className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                <span>Ils Parlent de Nous</span>
              </div>
              <h3 className="text-sm sm:text-xl font-heading font-extrabold text-white leading-snug">
                Un savoir-faire salué par{" "}
                <span className="text-kenenti-yellow">
                  7 médias nationaux &amp; internationaux
                </span>
              </h3>
            </div>

            <span className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10px] sm:text-xs font-heading font-bold text-white/90">
              <span className="h-2 w-2 rounded-full bg-kenenti-yellow animate-pulse" />
              <span>Reportages TV &amp; Presse</span>
            </span>
          </div>

          {/* La Bande qui passe (Marquee continu de Logos Médias) */}
          <div
            className="relative w-full overflow-hidden py-1"
            aria-label="Logos des 7 médias ayant parlé de KENENTI"
          >
            {/* Masques de fondu latéraux pour un effet de défilement cinéma */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-[#09152E] to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-[#09152E] to-transparent"
              aria-hidden="true"
            />

            <div className="kenenti-marquee-track gap-3 sm:gap-4 px-3">
              {marqueeItems.map((media, idx) => (
                <div
                  key={`${media.id}-${idx}`}
                  className="flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm transition-colors hover:border-kenenti-yellow/60 hover:bg-white/15 shrink-0"
                >
                  {/* Logo vectoriel du média */}
                  <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-white/20">
                    {media.renderLogo()}
                  </div>

                  {/* Nom & catégorie du média */}
                  <div className="pr-1">
                    <p className="font-heading text-xs sm:text-sm font-extrabold text-white whitespace-nowrap leading-tight">
                      {media.name}
                    </p>
                    <p className="text-[9.5px] sm:text-[10.5px] font-heading font-semibold text-kenenti-yellow whitespace-nowrap mt-0.5">
                      {media.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
