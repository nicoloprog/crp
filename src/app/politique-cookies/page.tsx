import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies | Concept Renovation Prestige",
  description: "Politique de cookies de Concept Renovation Prestige.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Politique de cookies"
      intro="Cette politique decrit les types de cookies et technologies similaires utilises sur notre site, ainsi que les choix qui vous sont offerts."
      updatedAt="13 mai 2026"
      sections={[
        {
          title: "Qu'est-ce qu'un cookie?",
          body: [
            "Un cookie est un petit fichier ou une petite information stockée sur votre appareil par votre navigateur. Il peut servir à faire fonctionner un site, conserver un choix ou mesurer l'utilisation du site.",
          ],
        },
        {
          title: "Cookies essentiels",
          body: [
            "Les cookies essentiels permettent le fonctionnement de base du site et la conservation de vos choix de consentement. Ils ne peuvent pas être désactivés depuis notre bannière de consentement.",
          ],
        },
        {
          title: "Cookies de mesure d'audience",
          body: [
            "Avec votre accord, nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent le site. Ces cookies sont activés seulement après votre consentement.",
          ],
        },
        {
          title: "Cookies de marketing",
          body: [
            "La catégorie marketing est prévue pour les outils publicitaires ou de personnalisation qui pourraient être ajoutés au site. Elle demeure désactivée si vous refusez ce consentement.",
          ],
        },
        {
          title: "Modifier vos choix",
          body: [
            "Vous pouvez modifier vos choix à tout moment en cliquant sur le bouton Cookies affiché en bas de la page après votre première décision.",
          ],
        },
        {
          title: "Paramètres du navigateur",
          body: [
            "Vous pouvez aussi bloquer ou supprimer les cookies depuis les paramètres de votre navigateur. Certaines fonctions du site peuvent toutefois être affectées.",
          ],
        },
      ]}
    />
  );
}
