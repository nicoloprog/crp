import type { Metadata } from "next";
import Header from "@/components/Header";
import ChakraProviders from "@/contexts/ChakraProviders";

export const metadata: Metadata = {
  title:
    "Résidentielle et Commerciale | Soumission En Ligne | Rénovation Rive-Sud De Montréal",
  description:
    "Expert en rénovation intérieur et extérieur Rive-sud de Montréal : cuisine, salle de bain, sous-sol et projets extérieurs. Entrepreneur expérimenté rive sud de montréal",
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
