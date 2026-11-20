import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FIVE_UNIVERSES } from "@/lib/kenenti-data";
import { getUniverseWithConfigBySlug } from "@/lib/services-catalog";
import { UniverseEntretienFlow } from "@/components/services/universe-entretien-flow";

interface ServiceUniversePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FIVE_UNIVERSES.map((universe) => ({ slug: universe.slug }));
}

export async function generateMetadata({
  params,
}: ServiceUniversePageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getUniverseWithConfigBySlug(slug);
  if (!entry) {
    return { title: "Univers introuvable | KENENTI" };
  }
  return {
    title: `${entry.universe.title} — Choisir l'entretien | KENENTI`,
    description: entry.universe.description,
    alternates: { canonical: `/services/${entry.universe.slug}` },
  };
}

export default async function ServiceUniversePage({
  params,
}: ServiceUniversePageProps) {
  const { slug } = await params;
  const entry = getUniverseWithConfigBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <UniverseEntretienFlow universe={entry.universe} config={entry.config} />
  );
}
