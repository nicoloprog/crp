import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions legales | Concept Renovation Prestige",
  description: "Mentions legales de Concept Renovation Prestige.",
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Cette page présente les informations générales relatives à Concept Renovation Prestige et à l'exploitation de ce site."
      updatedAt="13 mai 2026"
      sections={[
        {
          title: "Entreprise",
          items: [
            "Nom commercial : Concept Renovation Prestige",
            "Secteur : rénovation résidentielle et commerciale",
            "RBQ : 5867 - 4334 - 01",
            "Courriel : contact@infocrp.com",
            "Téléphone : 450 822-8711",
          ],
        },
        {
          title: "Responsable du site",
          body: [
            "Le site est exploite pour présenter les services, réalisations, coordonnées et options de communication de Concept Renovation Prestige.",
          ],
        },
        {
          title: "Hébergement et services tiers",
          body: [
            "Le site peut utiliser des services tiers pour l'hébergement, la performance, les formulaires, les courriels, les statistiques et les réseaux sociaux. Ces fournisseurs peuvent appliquer leurs propres conditions et politiques.",
          ],
        },
        {
          title: "Photos et réalisations",
          body: [
            "Les photos, videos et descriptions de projets sont fournies à titre représentatif. Les résultats, matériaux, couts et délais peuvent varier selon chaque projet.",
          ],
        },
        {
          title: "Aucune garantie de disponibilité",
          body: [
            "Nous faisons des efforts raisonnables pour maintenir le site accessible, mais nous ne garantissons pas un accès continu, sans erreur ou sans interruption.",
          ],
        },
      ]}
    />
  );
}
