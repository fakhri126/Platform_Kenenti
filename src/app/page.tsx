import { HeroBeforeAfter } from "@/components/home/hero-before-after";
import { FiveUniversesSection } from "@/components/home/five-universes-section";
import { BoutiqueCarouselSection } from "@/components/home/boutique-carousel-section";
import { SocialReviewsSection } from "@/components/home/social-reviews-section";
import { WorkshopSection } from "@/components/home/workshop-section";
import { FaqSection } from "@/components/home/faq-section";

export default function HomePage() {
  return (
    <>
      {/* 4.1 Hero avec comparateur Avant / Après intégré */}
      <HeroBeforeAfter />

      {/* 4.2 Nos 5 univers */}
      <FiveUniversesSection />

      {/* 4.3 Notre boutique (Carousel de 3 affiches promotionnelles) */}
      <BoutiqueCarouselSection />

      {/* 4.4 Avis des réseaux sociaux */}
      <SocialReviewsSection />

      {/* 4.5 Découvrir notre atelier (La Goulette & Menzah 6) */}
      <WorkshopSection />

      {/* 4.6 FAQ (Accordéon) */}
      <FaqSection />
    </>
  );
}
