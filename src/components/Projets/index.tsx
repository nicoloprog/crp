"use client";

import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const imageSources = [
  "/projet1.png",
  "/projet1.png",
  "/projet1.png",
  "/projet2.png",
  "/projet1.png",
  "/projet3.png",
  "/projet2.png",
  "/projet1.png",
];

export default function ProjetsCarousel() {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        if (slider.current) {
          slider.current.next();
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [slider, isMobile]);

  return (
    <Box
      alignContent="center"
      minH="100svh"
      px={{ base: 4, md: 10 }}
      py={10}
      bg="white"
    >
      <Heading
        mb={6}
        color="gray.700"
        fontWeight="500"
        fontFamily="Cinzel"
        fontSize={{ base: "1.5rem", lg: "3.15rem" }}
      >
        PROJETS
      </Heading>

      {isMobile ? (
        // ✅ Mobile Grid Layout
        <SimpleGrid columns={2} spacing={4}>
          {imageSources.map((src, index) => (
            <Box key={index} borderRadius="md" overflow="hidden">
              <Image
                src={src}
                alt={`Projet ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="md"
              />
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        // ✅ Carousel for Tablet/Desktop
        <Box ref={sliderInstanceRef} className="keen-slider">
          {imageSources.map((src, index) => (
            <Box
              key={index}
              className="keen-slider__slide"
              borderRadius="md"
              overflow="hidden"
            >
              <Image
                src={src}
                alt={`Projet ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="auto"
                borderRadius="md"
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
