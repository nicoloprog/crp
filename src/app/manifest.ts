import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Concept Renovation Prestige",
    short_name: "CRP",
    lang: "fr-CA",
    description:
      "Experts en construction et rénovation de tous genres, offrant qualité, respect des délais et souci du détail.",
    start_url: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#ffffff",
    theme_color: "#0a3d62",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "maskable",
      },
    ],
  };
}
