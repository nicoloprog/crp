import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialite | Concept Renovation Prestige",
  description: "Politique de confidentialite de Concept Renovation Prestige.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="Cette politique explique comment nous recueillons, utilisons et protégeons les renseignements personnels lorsque vous utilisez notre site ou communiquez avec nous."
      updatedAt="13 mai 2026"
      sections={[
        {
          title: "Renseignements recueillis",
          body: [
            "Nous pouvons recueillir les renseignements que vous nous transmettez volontairement, par exemple votre nom, votre adresse courriel, votre numéro de téléphone, votre adresse de projet et les détails de votre demande de soumission.",
          ],
        },
        {
          title: "Utilisation des renseignements",
          items: [
            "Répondre à vos questions et demandes de soumission.",
            "Planifier, évaluer et réaliser des projets de rénovation.",
            "Faire le suivi de nos communications avec vous.",
            "Améliorer le contenu, la performance et la sécurité du site.",
          ],
        },
        {
          title: "Google Analytics et mesures d'audience",
          body: [
            "Google Analytics est charge seulement apres votre consentement aux cookies de mesure d'audience. Les données servent à comprendre l'utilisation générale du site, comme les pages consultées et les sources de trafic.",
          ],
        },
        {
          title: "Partage des renseignements",
          body: [
            "Nous ne vendons pas vos renseignements personnels. Nous pouvons les partager avec des fournisseurs de services lorsque cela est nécéssaire pour exploiter le site, communiquer avec vous, traiter une demande ou respecter nos obligations légales.",
          ],
        },
        {
          title: "Conservation et sécurité",
          body: [
            "Nous conservons les renseignements aussi longtemps que nécéssaire pour les fins décrites dans cette politique, sauf si une période plus longue est requise par la loi. Nous utilisons des mesures raisonnables pour protéger les renseignements contre l'accès non autorisé.",
          ],
        },
        {
          title: "Vos droits",
          body: [
            "Vous pouvez demander l'accès, la correction ou la suppression de vos renseignements personnels, sous réserve des limites prévues par la loi et des obligations de conservation applicables.",
          ],
        },
      ]}
    />
  );
}
