import type { Metadata } from "next";
import ChakraProviders from "@/contexts/ChakraProviders";

export const metadata: Metadata = {
  title: "Concept Renovation Prestige",
  description:
    "De la conception à la réalisation, nous construisons des espaces durables et sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap');
        </style>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
