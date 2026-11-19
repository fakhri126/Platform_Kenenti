import { HeroBeforeAfter } from "@/components/home/hero-before-after";
import { FiveUniversesSection } from "@/components/home/five-universes-section";
import { BoutiqueCarouselSection } from "@/components/home/boutique-carousel-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { SocialReviewsSection } from "@/components/home/social-reviews-section";
import { WorkshopSection } from "@/components/home/workshop-section";
import { FaqSection } from "@/components/home/faq-section";

export default function HomePage() {
  return (
    <>
      {/* Hero avec comparateur Avant / Après (3 types d'entretien en rotation 3s) + Collecte & Livraison à domicile */}
      <HeroBeforeAfter />

      {/* Nos 5 univers (placés juste après le Hero à la place des points forts, avec icônes et descriptions résumées) */}
      <FiveUniversesSection />

      {/* Notre boutique (Carousel de 3 affiches promotionnelles) */}
      <BoutiqueCarouselSection />

      {/* Nos Points Forts & Repères Clés (placés après la boutique) */}
      <WhyChooseSection />

      {/* Avis des réseaux sociaux (sans "Ils Parlent de Nous") */}
      <SocialReviewsSection />

      {/* Découvrir notre atelier (La Goulette & Menzah 6) */}
      <WorkshopSection />

      {/* FAQ (Accordéon) */}
      <FaqSection />
    </>
  );
}
