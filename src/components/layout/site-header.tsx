"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  ShoppingBag,
  Truck,
  Sofa,
  PackageCheck,
  MessageCircle,
  Footprints,
  Sparkles,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { KENENTI_BRAND } from "@/lib/kenenti-data";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Accueil", href: "/", icon: Sparkles },
  { label: "Services", href: "/services", icon: Footprints },
  { label: "Boutique", href: "/boutique", icon: ShoppingBag },
  { label: "Notre Atelier", href: "/#notre-atelier", icon: MapPin },
  { label: "FAQ", href: "/#faq", icon: HelpCircle },
  { label: "Contact", href: "/#contact-devis", icon: MessageCircle },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F2143] text-white shadow-md">
      {/* Top Bar Mobile-First : 1 message clair centré sur mobile, barre complète sur desktop */}
      <div className="bg-[#09152E] text-white/90 text-[9.5px] sm:text-xs py-1 sm:py-1.5 border-b border-white/10">
        <div className="container flex items-center justify-center lg:justify-between gap-1.5">
          <div className="flex sm:hidden items-center justify-center gap-1.5 font-medium text-[10px]">
            <Truck className="h-3 w-3 text-kenenti-yellow shrink-0" aria-hidden="true" />
            <span>
              <strong className="text-kenenti-yellow">Collecte &amp; Retour à domicile</strong> • La Goulette &amp; Menzah 6
            </span>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-3 whitespace-nowrap overflow-x-auto no-scrollbar">
            <span className="inline-flex items-center gap-1 font-medium">
              <Truck className="h-3.5 w-3.5 text-kenenti-yellow shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-kenenti-yellow">Collecte &amp; Retour à domicile</strong>{" "}
                (Sans vous déplacer)
              </span>
            </span>
            <span className="text-white/25" aria-hidden="true">|</span>
            <span className="inline-flex items-center gap-1 font-medium">
              <Sofa className="h-3.5 w-3.5 text-kenenti-yellow shrink-0" aria-hidden="true" />
              <span>Intervention Salons &amp; Auto</span>
            </span>
            <span className="text-white/25" aria-hidden="true">|</span>
            <span className="inline-flex items-center gap-1 font-medium">
              <PackageCheck className="h-3.5 w-3.5 text-kenenti-yellow shrink-0" aria-hidden="true" />
              <span>Ateliers La Goulette &amp; Menzah 6</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-3.5 text-xs whitespace-nowrap shrink-0">
            <span className="font-heading font-bold text-kenenti-yellow">
              « {KENENTI_BRAND.slogan} »
            </span>
            <span className="text-white/25">|</span>
            <a href="tel:+21629286445" className="text-white/85 hover:text-kenenti-yellow transition-colors">
              La Goulette : 29 286 445
            </a>
            <span className="text-white/25">|</span>
            <a href="tel:+21628877074" className="text-white/85 hover:text-kenenti-yellow transition-colors">
              Menzah 6 : 28 877 074
            </a>
          </div>
        </div>
      </div>

      {/* Barre principale Mobile-First : h-12 (48px) sur mobile, h-16 (64px) sur desktop */}
      <div className="container flex lg:grid lg:grid-cols-12 h-12 sm:h-16 items-center justify-between gap-2">
        {/* Zone Gauche : Menu Hamburger Mobile + Logo officiel KENENTI */}
        <div className="flex items-center gap-2 sm:gap-3 lg:col-span-3">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Ouvrir le menu de navigation"
                className="inline-flex lg:hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#0F2143] text-white border-l border-white/15 p-5">
              <SheetHeader className="border-b border-white/15 pb-3.5 text-left">
                <SheetTitle className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white p-0.5 shadow-sm">
                    <Image
                      src={KENENTI_BRAND.logos.icon192}
                      alt="Logo officiel KENENTI"
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="font-heading text-base font-extrabold tracking-[0.15em] text-white">
                    KENENTI
                  </span>
                </SheetTitle>
                <SheetDescription className="text-kenenti-yellow font-heading font-semibold text-[11px] pt-0.5">
                  « {KENENTI_BRAND.slogan} » — 1er Atelier Tunisien
                </SheetDescription>
              </SheetHeader>

              <nav aria-label="Menu mobile" className="mt-4">
                <ul className="flex flex-col space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isCurrent =
                      !item.href.includes("#") && pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            aria-current={isCurrent ? "page" : undefined}
                            className={cn(
                              "flex min-h-[40px] items-center gap-2.5 rounded-xl px-3.5 py-2 font-heading text-xs font-bold transition-colors",
                              isCurrent
                                ? "bg-kenenti-yellow text-kenenti-navy"
                                : "text-white/90 hover:bg-white/10"
                            )}
                          >
                            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>{item.label}</span>
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-5 space-y-2.5 border-t border-white/15 pt-4">
                <SheetClose asChild>
                  <Button asChild className="w-full h-10 text-xs font-extrabold" size="default">
                    <a
                      href={KENENTI_BRAND.whatsappGeneralUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demander un Devis Rénovation
                    </a>
                  </Button>
                </SheetClose>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-[11px] text-white/85 space-y-1">
                  <p className="font-heading font-bold text-kenenti-yellow">
                    Nos 2 Ateliers en Tunisie :
                  </p>
                  <p>• La Goulette : Rue des Ecoles (29 286 445)</p>
                  <p>• Menzah 6 : Ariana, R5W9+G34 (28 877 074)</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow rounded-lg py-0.5"
            aria-label="KENENTI — Retour à l'accueil"
          >
            <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white p-0.5 sm:p-1 shadow-sm ring-1 ring-white/20">
              <Image
                src={KENENTI_BRAND.logos.icon192}
                alt="Logo officiel KENENTI"
                width={56}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span className="font-heading text-base sm:text-xl font-extrabold tracking-[0.14em] text-white">
              KENENTI
            </span>
          </Link>
        </div>

        {/* Zone Centrale (6 col) : Navigation Desktop centrée */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:col-span-6 lg:flex items-center justify-center"
        >
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isCurrent =
                !item.href.includes("#") && pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "relative inline-flex min-h-[38px] items-center whitespace-nowrap px-3.5 py-1.5 text-sm font-heading font-semibold text-white/85 transition-colors rounded-lg hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow",
                      isCurrent &&
                        "bg-white/10 text-kenenti-yellow font-bold after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-[2.5px] after:rounded-full after:bg-kenenti-yellow"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Zone Droite (3 col) : Recherche, Panier & Bouton Devis Desktop */}
        <div className="flex items-center justify-end gap-1 sm:gap-2 lg:col-span-3">
          <Link
            href="/boutique"
            aria-label="Rechercher un produit dans la boutique"
            className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10 hover:text-kenenti-yellow transition-colors"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </Link>

          <Link
            href="/boutique"
            aria-label="Accéder à la boutique KENENTI (3 gammes)"
            className="relative inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10 hover:text-kenenti-yellow transition-colors"
          >
            <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-kenenti-yellow font-heading text-[9.5px] font-extrabold text-kenenti-navy shadow-sm">
              3
            </span>
          </Link>

          <Button
            asChild
            variant="default"
            size="sm"
            className="inline-flex min-h-0 h-8 sm:min-h-[40px] sm:h-9 px-2.5 sm:px-3.5 text-[11px] sm:text-xs rounded-lg sm:rounded-md whitespace-nowrap font-extrabold shadow-md ml-1"
          >
            <a
              href={KENENTI_BRAND.whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sm:hidden">Devis</span>
              <span className="hidden sm:inline">Demander un Devis</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
