import type { Metadata } from "next";
import Header from "@/components/Header";
import ChakraProviders from "@/contexts/ChakraProviders";

export const metadata: Metadata = {
  title: "Rénovation rive-sud montréal | résidentiel et commercial",
  description:
    "Projets de rénovations intérieur et extérieur sur la rive sud de montreal : cuisine, salle de bain, sous-sol et projets extérieurs.",
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
      "Expert en rénovation intérieure et extérieure sur la Rive-Sud de Montréal. Cuisine, salle de bain, sous-sol et projets extérieurs. Soumission gratuite.",
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
