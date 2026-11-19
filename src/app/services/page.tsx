import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/services/services-page-content";

export const metadata: Metadata = {
  title: "Nos Services & 5 Univers de Rénovation | KENENTI",
  description:
    "Découvrez en détail les 5 univers de restauration, rénovation, personnalisation et entretien KENENTI : Chaussures et sneakers, Maroquinerie, Vêtements en cuir, Mobilier et Intérieur automobile. Demande de devis étudiée manuellement.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
