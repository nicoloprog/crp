import type { Metadata } from "next";
import Header from "@/components/Header";
import ChakraProviders from "@/contexts/ChakraProviders";
import Script from "next/script";

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
