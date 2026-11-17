import Link from "next/link";
import { ArrowLeft, MessageCircle, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KENENTI_BRAND } from "@/lib/kenenti-data";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32 bg-kenenti-sand/35 border-b border-kenenti-navy/10">
      <div className="container max-w-2xl text-center space-y-6">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-kenenti-navy text-kenenti-yellow shadow-md">
          <Compass className="h-8 w-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-heading font-bold uppercase tracking-widest text-kenenti-red">
            Navigation KENENTI
          </p>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-kenenti-navy">
            Page en cours de déploiement ou introuvable
          </h1>
          <p className="text-base text-kenenti-navy/80 leading-relaxed pt-2">
            Conformément à la méthode de développement progressive étape par étape, la page
            d&apos;accueil est actuellement soumise à validation avant le développement des
            pages secondaires (Services, Boutique, Notre atelier, Contact, FAQ).
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button asChild variant="navy" size="lg">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Retourner à la page d&apos;accueil</span>
            </Link>
          </Button>

          <Button asChild variant="default" size="lg">
            <a
              href={KENENTI_BRAND.whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Demander un devis WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
