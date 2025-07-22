"use client";

import { Box, Flex, Container, Text, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";

// Placeholder for PlayIcon component, as it's imported from a relative path.
// In a real application, ensure this component is correctly defined and imported.
const PlayIcon = ({ width, height }) => (
  <Box
    as="svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    color="white"
    width={width}
    height={height}
    filter="drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))"
  >
    <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
  </Box>
);

export default function Component() {
  const videoRef = useRef(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoActive(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      // Attempt to go fullscreen and show controls.
      // Fullscreen might require user gesture and browser support.
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        /* Safari */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        /* IE11 */
        videoRef.current.msRequestFullscreen();
      }
      videoRef.current.controls = true;
    }
  };

  return (
    <Container
      maxW="100%"
      py={{ base: 10, md: 20 }}
      bgColor="#0B101E"
      centerContent
    >
      <Flex
        position="relative"
        justify="center"
        align="center"
        // Adjust minH for mobile to prevent excessive scrolling on short content
        minH={{ base: "auto", md: "100vh" }}
        w="100%"
        direction={{ base: "column", md: "row" }} // Add gap between stacked elements on mobile
        px={{ base: 4, md: 0 }} // Add horizontal padding on mobile
      >
        <Box
          position={{ base: "relative", md: "relative" }} // Relative positioning for stacking
          w={{ base: "90%", md: "100%" }} // Wider on mobile
          maxW={{ base: "500px", md: "1400px" }} // Max width for content
          display="flex"
          flexDirection={{ base: "column", md: "row" }} // Ensure column for content inside on mobile
          alignItems="center"
          justifyContent="center"
        >
          {/* VIDEO CARD CONTAINER */}
          <Box
            position={{ base: "relative", md: "absolute" }} // Absolute for desktop, relative for mobile
            left={{ base: "auto", md: "10%" }} // Auto for mobile, 10% for desktop
            w={{ base: "100%", md: "38%" }} // Full width on mobile, 38% on desktop
            maxH={{ base: "300px", md: "70svh" }} // Adjusted max height for mobile
            borderRadius="15px"
            border={"4px solid rgba(57, 57, 57, 0.45)"}
            overflow="hidden"
            boxShadow="0 20px 40px rgba(0, 0, 0, 0.71), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
            // Simplified transform for mobile, keep original for desktop
            transform={{
              base: "none",
              md: "perspective(700px) rotateY(10.5deg) rotateZ(-0.75deg)",
            }}
            transformOrigin="bottom"
            transition="transform 0.5s ease"
            _hover={{
              base: {}, // No hover effect on mobile
              md: { transform: "perspective(800px) rotateY(0deg)" },
            }}
            zIndex={2}
          >
            {/* Video Element */}
            <Box
              as="video"
              ref={videoRef}
              src="/conceptrenovationprestige.mp4" // Ensure this video path is correct
              muted
              playsInline
              autoPlay
              loop
              title="Concept Renovation Prestige Introduction"
              objectFit="cover"
              w="100%"
              h="100%"
            />

            {/* Play Button inside video */}
            <Box
              as="button"
              position="absolute"
              // Adjust position for mobile
              bottom={{ base: "20px", md: "40px" }}
              left={{ base: "20px", md: "40px" }}
              zIndex={10}
              opacity={isVideoActive ? 0 : 1}
              pointerEvents={isVideoActive ? "none" : "all"}
              transition="opacity 0.7s"
              onClick={handleVideoPlay}
            >
              <PlayIcon
                height={{ base: "40px", md: "95px" }} // Smaller icon on mobile
                width={{ base: "40px", md: "95px" }} // Smaller icon on mobile
              />
            </Box>
          </Box>

          {/* TEXT CARD */}
          <Box
            position={{ base: "relative", md: "absolute" }}
            right={{ base: "auto", md: "2.5%" }}
            maxW={{ base: "100%", md: "60%" }}
            w="100%"
            mt={{ base: 6, md: 0 }}
            h={{ base: "auto", md: "70svh" }}
            borderRadius="15px"
            boxShadow="0 20px 40px rgba(0, 0, 0, 0.71), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
            p={{ base: 4, md: 10 }}
            color="white"
            overflow="hidden"
            transform={{
              base: "none",
              md: "perspective(1000px) rotateY(-10.5deg) rotateX(-2.5deg) rotateZ(0.5deg)",
            }}
            transformOrigin="bottom"
            transition="transform 0.5s ease"
            borderRightRadius="20px"
            border="1px solid rgba(255, 255, 255, 0.19)"
            bg="rgba(77, 77, 77, 0.2)"
            backdropFilter="blur(10px)"
            display="block"
            zIndex={1}
          >
            <Flex justify="flex-end" h="100%">
              <Box w={{ base: "100%", md: "85%" }} textAlign="left">
                <Heading fontSize={{ base: "2xl", md: "5xl" }} mt={2}>
                  À propos
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "lg" }}
                  lineHeight="tall"
                  mt={4}
                >
                  Découvrez l&apos;excellence en rénovation résidentielle avec
                  notre entreprise de projets clés en main. Nous vous
                  accompagnons de la conception à la réalisation, en prenant en
                  charge chaque étape avec rigueur et transparence.
                  <br />
                  <br />
                  Notre professionnalisme transforme vos espaces de vie en
                  véritables chefs-d&apos;œuvre, alliant savoir-faire, élégance
                  et matériaux de qualité. Qu&apos;il s&apos;agisse de
                  moderniser une cuisine, repenser une salle de bain ou rénover
                  entièrement une maison, notre équipe d&apos;experts met tout
                  en œuvre pour donner vie à vos idées et dépasser vos attentes.
                  Offrez à votre intérieur le confort, la fonctionnalité et
                  l&apos;esthétique qu&apos;il mérite.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
