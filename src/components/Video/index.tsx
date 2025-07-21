"use client";

import { Box, Flex, Container, Text, Heading } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Icon } from "@chakra-ui/react";

// Simple PlayIcon component using Chakra UI's Icon and SVG
const PlayIcon = (props: any) => <Icon viewBox="0 0 64 64" {...props}></Icon>;

export default function Component() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <Container maxW="6xl">
      <Flex
        justify="center"
        align="center"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 0 }}
        minH="100vh"
        position="relative"
        marginTop={{ base: 0, md: 32 }}
      >
        <Box
          position={{ base: "relative", md: "absolute" }}
          left={{ base: "0", md: "-7.5%" }}
          w={{ base: "80%", md: "60%" }}
          maxH={{ base: "40%", md: "70.5%" }}
          boxShadow="0 20px 40px rgba(0, 0, 0, 0.71), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
          borderRadius="15px"
          transform="perspective(500px) rotateY(7.5deg) rotateZ(-0.5deg)"
          transformOrigin="bottom"
          transition="transform 0.5s ease"
          _hover={{
            transform: "perspective(100px) rotateY(-0deg)",
          }}
          zIndex={2}
          as="video"
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          controls={videoRef.current?.controls}
          title={"Concept Renovation Prestige Introduction"}
          src="/conceptrenovationprestige.mp4"
          objectFit="fill"
        />

        <Box
          transition={"700ms"}
          opacity={isVideoActive ? 0 : 1}
          pointerEvents={isVideoActive ? "none" : "all"}
          as={"button"}
          isolation={"isolate"}
          position={"absolute"}
          bottom={{ base: "24px", lg: "50px" }}
          left={{ base: "24px", lg: "0px" }}
          zIndex={10}
          onClick={() => {
            setIsVideoActive((prev) => !prev);
            if (videoRef.current) {
              videoRef.current.muted = false;
              videoRef.current.requestFullscreen();
              videoRef.current.controls = true;
            }
          }}
        >
          <PlayIcon
            height={{ base: "50px", lg: "125px" }}
            width={{ base: "50px", lg: "125px" }}
          />
        </Box>
        <Box
          position={{ base: "relative", md: "absolute" }}
          right={{ base: "0", md: "-7.5%" }}
          minW={{ base: "80%", md: "68.5%" }}
          h={{ base: "auto", md: "70svh" }}
          boxShadow="0 20px 40px rgba(0, 0, 0, 0.71), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
          borderRadius="15px"
          transform="perspective(1000px) rotateY(-10.5deg) rotateX(-2.5deg) rotateZ(0.5deg)"
          transformOrigin="bottom"
          transition="transform 0.5s ease"
          bg="linear-gradient(to right, #bdc3c7, #4a4a4a);"
          p={{ base: 6, md: 10 }}
          color="white"
          overflow="hidden"
        >
          <Flex justify="flex-end">
            <Box w={{ base: "100%", md: "50%" }} textAlign="left">
              <Heading fontSize={{ base: "xl", md: "2xl" }} mt={4}>
                À propos
              </Heading>

              <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
                Découvrez l&apos;excellence en rénovation résidentielle avec
                notre entreprise de projets clés en main. Nous vous accompagnons
                de la conception à la réalisation, en prenant en charge chaque
                étape avec rigueur et transparence. <br />
                <br />
                Notre professionnalisme transforme vos espaces de vie en
                véritables chefs-d&apos;œuvre, alliant savoir-faire, élégance et
                matériaux de qualité. Qu&apos;il s&apos;agisse de moderniser une
                cuisine, repenser une salle de bain ou rénover entièrement une
                maison, notre équipe d&apos;experts met tout en œuvre pour
                donner vie à vos idées et dépasser vos attentes. Offrez à votre
                intérieur le confort, la fonctionnalité et l&apos;esthétique
                qu&apos;il mérite.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
