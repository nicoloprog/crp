import type { Metadata } from "next";
import Header from "@/components/Header";
import ChakraProviders from "@/contexts/ChakraProviders";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Concept Rénovation Prestige | Entrepreneur résidentielle et commerciale Rive-sud de Montréal",
  description:
    "Experts en rénovation résidentielle et commerciale Rive-sud de Montréal : cuisine, salle de bain, sous-sol et projets extérieurs. Rive-sud",
  // ✅ Add keywords
  keywords: [
    "rénovation Rive-sud de Montréal",
    "constructiontion Rive-sud de Montréal",
    "entrepreneur rénovation Rive-sud de Montréal",
    "céramique Rive-sud de Montréal",
    "cuisine céramique",
    "construction extérieur maison",
    "construction salle de bain, céramique",
    "entrepreneur général Montréal",
    "rénovation condo",
    "rénovation commerciale Rive-sud de Montréal",
    "rénovation résidentielle Rive-sud de Montréal",
  ],

  // ✅ Control search engine behavior
  robots: {
    index: true,
    follow: true,
  },

  // ✅ Open Graph for social media sharing
  openGraph: {
    title:
      "Concept Rénovation Prestige | Rénovation résidentielle et commerciale sur la Rive-sud de Montréal",
    description:
      "De la conception à la réalisation, nous créons des espaces durables et élégants à Montréal.",
    url: "https://www.conceptrenovationprestige.com",
    siteName: "Concept Rénovation Prestige",
    images: [
      {
        url: "/crp.png",
        width: 1200,
        height: 630,
        alt: "Rénovation haut de gamme Rive-sud de Montréal",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="JKL3omtAk8ucptzVUFxaVSyOiYrOfDrvdoQ1HGZlaNo"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RKR1ZZ8PQ8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RKR1ZZ8PQ8');
          `}
        </Script>
      </head>
      <body>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap&apos;);
        </style>
        <ChakraProviders>
          <Header />
          {children}
        </ChakraProviders>
      </body>
    </html>
  );
}
