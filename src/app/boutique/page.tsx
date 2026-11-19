import * as React from "react";
import type { Metadata } from "next";
import { BoutiquePageContent } from "@/components/boutique/boutique-page-content";

export const metadata: Metadata = {
  title: "Notre Boutique — Peintures, Kits de Soin & Accessoires | KENENTI",
  description:
    "Découvrez la boutique officielle KENENTI : peintures 100ml pour cuir, daim et textile, kits de nettoyage complets, reblanchissant Sole Bright et accessoires d'entretien. Paiement uniquement à la livraison (COD).",
  alternates: {
    canonical: "/boutique",
  },
};

export default function BoutiquePage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#FAF8F5]" />}>
      <BoutiquePageContent />
    </React.Suspense>
  );
}
