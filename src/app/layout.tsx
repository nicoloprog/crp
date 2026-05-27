import type { Metadata } from "next";
import Header from "@/components/Header";
import ChakraProviders from "@/contexts/ChakraProviders";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Rénovation rive-sud montréal | résidentiel et commercial",
  description:
    "Rénovation intérieur et extérieur rive sud de montreal : cuisine, salle de bain, sous-sol et projets extérieurs.",
  keywords: [
    "rénovation rive sud",
    "rénovation rive-sud de montréal",
    "renovation rive sud",
    "renovation rive-sud",
    "cuisine",
    "salle de bain",
    "sous-sol",
    "entrepreneur en rénovation",
    "reno montreal rive sud",
    "réno rive-sud montréal",
  ],
  openGraph: {
    title: "Rénovation Rive-Sud Montréal | Résidentiel & Commercial",
    description:
      "Expert en rénovation intérieure et extérieure sur la Rive-Sud de Montréal. Cuisine, salle de bain, sous-sol. renovation rive sud. renovation montreal rive sud.",
    url: "https://www.conceptrenovationprestige.com",
    siteName: "Concept Rénovation Prestige",
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
        <meta name="google" content="all" key="sitelinks" />
        <meta name="googlebot" content="all" />
        <meta name="googlebot-news" content="all" />
        <title>
          Rénovation résidentiel et commercial - Rive-Sud | Montréal
        </title>
        <meta
          name="description"
          content="Expert en rénovation intérieure et extérieure Montréal. Cuisine, salle de bain, sous-sol. renovation rive sud financement"
          key="desc"
        />
        <meta
          property="og:title"
          content="Rénovation Rive-Sud Montréal | Résidentiel & Commercial"
        />
        <meta
          property="og:description"
          content="Expert en rénovation intérieure et extérieure Montréal. Cuisine, salle de bain, sous-sol. renovation rive sud financement"
        />
        <meta
          property="og:image"
          content="https://conceptrenovationprestige.com/public/gallerie4.jpg"
        />
      </head>
      <body>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap&apos;);
        </style>
        <ChakraProviders>
          <Header />
          {children}
          <CookieConsent />
        </ChakraProviders>
      </body>
    </html>
  );
}
