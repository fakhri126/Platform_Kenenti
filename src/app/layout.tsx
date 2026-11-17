import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { KENENTI_BRAND, WORKSHOPS } from "@/lib/kenenti-data";

export const viewport: Viewport = {
  themeColor: "#1A3263",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kenenti.com"),
  title: {
    default:
      "KENENTI — 1er Atelier Tunisien de Restauration Sneakers, Cuir, Maroquinerie & Boutique",
    template: "%s | KENENTI Tunisie",
  },
  description:
    "KENENTI (« kenenti tjik win enti ») : restauration, rénovation, personnalisation et entretien de chaussures et sneakers, maroquinerie, vêtements en cuir, mobilier et intérieur automobile. Ateliers à La Goulette et Menzah 6 & boutique avec paiement à la livraison (COD).",
  keywords: [
    "KENENTI",
    "kenenti tjik win enti",
    "nettoyage sneakers Tunisie",
    "rénovation chaussures cuir Tunis",
    "restauration maroquinerie Tunisie",
    "peinture cuir daim Tunisie",
    "atelier La Goulette",
    "atelier Menzah 6",
    "customisation sneakers Tunisie",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/logo/cropped-logo1-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/cropped-logo1-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/cropped-logo1-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://kenenti.com/",
    siteName: "KENENTI",
    title:
      "KENENTI — Restauration Cuir, Sneakers, Maroquinerie & Produits de Soin en Tunisie",
    description:
      "Découvrez nos 5 univers de restauration (Chaussures & sneakers, Maroquinerie, Vêtements en cuir, Mobilier, Intérieur automobile), notre boutique de soins et nos ateliers à La Goulette et Menzah 6.",
    images: [
      {
        url: "/images/ateliers/atelier-presse-1.jpg",
        width: 1024,
        height: 576,
        alt: "Atelier KENENTI de restauration et soin du cuir en Tunisie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KENENTI — Restauration Sneakers, Cuir & Maroquinerie en Tunisie",
    description:
      "Savoir-faire artisanal pour chaussures, maroquinerie, vêtements en cuir, mobilier et intérieur automobile. Ateliers à La Goulette et Menzah 6.",
    images: ["/images/ateliers/atelier-presse-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kenenti.com/#organization",
    name: KENENTI_BRAND.name,
    slogan: KENENTI_BRAND.slogan,
    description: KENENTI_BRAND.shortIntro,
    url: "https://kenenti.com",
    logo: "https://kenenti.com/images/logo/LOGO-NOIR-TRANSP.png",
    image: "https://kenenti.com/images/ateliers/atelier-presse-1.jpg",
    email: KENENTI_BRAND.email,
    telephone: "+216 90 747 044",
    priceRange: "DT",
    paymentAccepted: "Cash on Delivery (Paiement à la livraison)",
    currenciesAccepted: "TND",
    areaServed: {
      "@type": "Country",
      name: "Tunisia",
    },
    sameAs: [
      KENENTI_BRAND.socials.facebook,
      KENENTI_BRAND.socials.instagramBrand,
      KENENTI_BRAND.socials.instagramCustom,
      KENENTI_BRAND.socials.youtube,
    ],
    department: WORKSHOPS.map((w) => ({
      "@type": "LocalBusiness",
      name: w.name,
      telephone: w.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: w.address,
        addressLocality: w.city,
        addressCountry: "TN",
      },
    })),
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-kenenti-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
