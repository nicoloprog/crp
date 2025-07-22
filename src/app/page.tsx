"use client";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Works from "@/components/Works";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Works />
      <Video />
    </Box>
  );
}
