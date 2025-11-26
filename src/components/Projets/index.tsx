"use client";

import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const imageSources = [
  "/gallerie1.jpg",
  "/gallerie2.jpg",
  "/gallerie3.jpg",
  // "/cuisine.jpeg",
  "/gallerie5.jpg",
  "/gallerie6.jpg",
  "/gallerie7.jpg",
];

export default function ProjetsCarousel() {
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
      {/* ⭐ Heading + Number inline, aligned right */}
      <Flex justify="space-between" align="center" gap={4} mb={6}>
        <Heading
          color="gray.700"
          fontWeight="500"
          fontFamily="Cinzel"
          fontSize={{ base: "1.5rem", lg: "3.15rem" }}
        >
          PROJETS
        </Heading>

        <Box
          bg="rgba(195, 158, 111, 1)"
          color="white"
          px={{ base: 4, md: 5 }}
          py={{ base: 1, md: 2 }}
          rounded="full"
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "xl" }}
          boxShadow="md"
          border="1px solid #ddd"
        >
          5867 - 4334 - 01
        </Box>
      </Flex>

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
