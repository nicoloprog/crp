import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Concept Renovation Prestige",
  description:
    "Conditions d'utilisation du site de Concept Renovation Prestige.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Conditions d'utilisation"
      intro="Ces conditions encadrent l'utilisation du site web de Concept Renovation Prestige. En utilisant le site, vous acceptez ces conditions."
      updatedAt="13 mai 2026"
      sections={[
        {
          title: "Utilisation du site",
          body: [
            "Le contenu du site est fourni à titre informatif pour présenter nos services de rénovation résidentielle et commerciale. Vous acceptez d'utiliser le site de facon légale, raisonnable et respectueuse.",
          ],
        },
        {
          title: "Demandes de soumission",
          body: [
            "Toute demande envoyée par le site ne constitue pas un contrat. Les prix, délais, disponibilités et travaux doivent être confirmés par une entente écrite séparée entre vous et Concept Renovation Prestige.",
          ],
        },
        {
          title: "Exactitude des renseignements",
          body: [
            "Nous faisons des efforts raisonnables pour garder les renseignements du site à jour, mais nous ne garantissons pas que tout le contenu est complet, exact ou disponible en tout temps.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          body: [
            "Les textes, images, logos, vidéos, mises en page et autres éléments du site appartiennent à Concept Renovation Prestige ou à leurs titulaires respectifs. Ils ne peuvent pas être copies, réutilisés ou modifiés sans autorisation.",
          ],
        },
        {
          title: "Liens externes",
          body: [
            "Le site peut contenir des liens vers des plateformes externes, comme les réseaux sociaux. Nous ne sommes pas responsables du contenu, des politiques ou des pratiques de ces sites externes.",
          ],
        },
        {
          title: "Limitation de responsabilité",
          body: [
            "Dans la mesure permise par la loi, Concept Renovation Prestige ne peut être tenue responsable des dommages découlant de l'utilisation du site ou de l'impossibilité d'y accéder.",
          ],
        },
      ]}
    />
  );
}
