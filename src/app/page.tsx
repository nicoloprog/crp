"use client";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Works from "@/components/Works";
import ProjetsSection from "@/components/Projets";
import Footer from "@/components/Footer";
// import Contact from "@/components/Contact";
import FinancingBanner from "@/components/Financement";
import SoumissionBanner from "@/components/Soumission";
import SubscribePopup from "@/components/SubscribeForm";
import Planbanner from "@/components/plan";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Works />
      <Video />
      <ProjetsSection />
      {/* <Contact /> */}
      <SoumissionBanner />
      <Planbanner />
      <FinancingBanner />
      <SubscribePopup />
      <Footer />
    </Box>
  );
}
