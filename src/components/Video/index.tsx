"use client";

import { Box, Flex, Container, Text, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import PlayIcon from "../icons/PlayIcon";

export default function Component() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <Container maxW="100%" py={20} bgColor="#0B101E" centerContent>
      <Flex
        position="relative"
        justify="center"
        align="center"
        minH="100vh"
        w="100%"
      >
        <Box
          position="relative"
          w="100%"
          maxW="1400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* VIDEO CARD CONTAINER */}
          <Box
            position="absolute"
            left={{ base: "0", md: "10%" }}
            w={{ base: "80%", md: "38%" }}
            maxH={{ base: "auto", md: "70vh" }}
            borderRadius="15px"
            overflow="hidden"
            boxShadow="0 20px 40px rgba(0, 0, 0, 0.71), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
            transform="perspective(700px) rotateY(7.5deg) rotateZ(-0.5deg)"
            transformOrigin="bottom"
            transition="transform 0.5s ease"
            _hover={{
              transform: "perspective(700px) rotateY(0deg)",
            }}
            zIndex={2}
          >
            {/* Video Element */}
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

            {/* Play Button inside video */}
            <Box
              as="button"
              position="absolute"
              bottom="40px"
              left="40px"
              zIndex={10}
              opacity={isVideoActive ? 0 : 1}
              pointerEvents={isVideoActive ? "none" : "all"}
              transition="opacity 0.7s"
              onClick={() => {
                setIsVideoActive(true);
                if (videoRef.current) {
                  videoRef.current.muted = false;
                  videoRef.current.requestFullscreen();
                  videoRef.current.controls = true;
                }
              }}
            >
              <PlayIcon
                height={{ base: "50px", md: "95px" }}
                width={{ base: "50px", md: "95px" }}
              />
            </Box>
          </Box>

          {/* TEXT CARD */}
          <Box
            position="absolute"
            right={{ base: "0", md: "2.5%" }}
            maxW={{ base: "80%", md: "60%" }}
            h={{ base: "auto", md: "70vh" }}
            borderRadius="15px"
            boxShadow="0 20px 40px rgba(0, 0, 0, 0.71), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
            p={{ base: 6, md: 10 }}
            color="white"
            overflow="hidden"
            transform="perspective(1000px) rotateY(-10.5deg) rotateX(-2.5deg) rotateZ(0.5deg)"
            transformOrigin="bottom"
            transition="transform 0.5s ease"
            borderRightRadius="20px"
            border={"1px solid rgba(255, 255, 255, 0.19)"}
            bg="rgba(77, 77, 77, 0.2)"
            backdropFilter="blur(10px)"
            display={{ base: "none", md: "block" }}
            zIndex={1}
          >
            <Flex justify="flex-end" h="100%">
              <Box w="84%" textAlign="left">
                <Heading fontSize={{ base: "xl", md: "5xl" }} mt={4}>
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
