"use client";

import { Box, Flex, Container, Text, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";

// Types for props
type PlayIconProps = {
  width: string | number | object;
  height: string | number | object;
};

// Composant PlayIcon typé
const PlayIcon = ({ width, height }: PlayIconProps) => (
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoActive(true);
    if (videoRef.current) {
      videoRef.current.muted = false;

      // Typage étendu pour supporter les méthodes spécifiques aux navigateurs
      const video = videoRef.current as HTMLVideoElement & {
        webkitRequestFullscreen?: () => void;
        msRequestFullscreen?: () => void;
      };

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
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
        minH={{ base: "auto", md: "100vh" }}
        w="100%"
        direction={{ base: "column", md: "row" }}
        px={{ base: 4, md: 0 }}
      >
        <Box
          position={{ base: "relative", md: "relative" }}
          w={{ base: "90%", md: "100%" }}
          maxW={{ base: "500px", md: "1400px" }}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          {/* VIDEO CARD */}
          <Box
            position={{ base: "relative", md: "absolute" }}
            left={{ base: "auto", md: "10%" }}
            w={{ base: "100%", md: "38%" }}
            maxH={{ base: "300px", md: "70svh" }}
            borderRadius="15px"
            overflow="hidden"
            boxShadow="0 20px 40px rgba(0, 0, 0, 0.71), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
            transform={{
              base: "none",
              md: "perspective(700px) rotateY(10.5deg) rotateZ(-0.75deg)",
            }}
            transformOrigin="bottom"
            transition="transform 0.5s ease"
            _hover={{
              base: {},
              md: { transform: "perspective(800px) rotateY(0deg)" },
            }}
            zIndex={2}
          >
            {/* VIDEO ELEMENT */}
            <Box
              as="video"
              ref={videoRef}
              src="/conceptrenovationprestige.mp4"
              muted
              playsInline
              autoPlay
              loop
              title="Concept Renovation Prestige Introduction"
              objectFit="cover"
              w="100%"
              h="100%"
            />

            {/* PLAY BUTTON */}
            <Box
              as="button"
              position="absolute"
              bottom={{ base: "20px", md: "40px" }}
              left={{ base: "20px", md: "40px" }}
              zIndex={10}
              opacity={isVideoActive ? 0 : 1}
              pointerEvents={isVideoActive ? "none" : "all"}
              transition="opacity 0.7s"
              onClick={handleVideoPlay}
            >
              <PlayIcon
                height={{ base: "40px", md: "95px" }}
                width={{ base: "40px", md: "95px" }}
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
