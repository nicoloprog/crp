"use client";

import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import AnimatedHeading from "../AnimatedHeading";
import AnimatedTitle from "../AnimatedTitle";
import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  // Pick the right video based on screen size
  const videoSrc = useBreakpointValue({
    base: "/crpAccueil2.mov", // mobile
    lg: "/crpAccueil.mov", // desktop
  });
  return (
    <Box position="relative" w="full" minH="100svh" overflow="hidden">
      <Box
        as="video"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        src={videoSrc}
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
      />
      <Flex w={"100%"} h="100%">
        <Flex
          position="absolute"
          top={{ base: "57.5%", lg: "60%" }}
          left={{ base: "2.25%", lg: "5%" }}
          direction="column"
          w={"full"}
          maxH="100svh"
          m={{ base: "0 0.5%", lg: "0%" }}
          gap={{ base: 3, lg: 3 }}
          zIndex={1000}
          textAlign="left"
        >
          <Box maxW={{ base: "98%", lg: "100%" }}>
            <AnimatedTitle
              id="heroTitle"
              fontFamily={"Cinzel"}
              fontSize={{ base: "2rem", xl: "4rem" }}
              maxW={{ base: "60%", lg: "75%" }}
              fontWeight={"600"}
              lineHeight="95%"
              opacity={0}
              wordBreak={"break-word"}
            >
              construisons vos projets de demain
            </AnimatedTitle>
          </Box>
          <Box>
            <AnimatedHeading
              id="textHero"
              fontFamily={"Cinzel"}
              fontSize={{ base: "0.90rem", lg: "1.5rem" }}
              maxW={{ base: "85%", lg: "35%" }}
              fontWeight="400"
              lineHeight="115%"
              opacity={0}
            >
              de la conception à la réalisation, nous bâtissons des espaces
              avant-gardiste et sur mesure
            </AnimatedHeading>
          </Box>

          <NextLink href={""}>
            <Box
              m={{ base: "5% 1.5%", lg: "1.5% 0.25%" }}
              position="relative"
              display="inline-block"
              role="group"
            >
              <Box
                position="relative"
                px={{ base: 20, lg: 32 }}
                py={{ base: 5, lg: 8 }}
                bg="rgba(96, 83, 67, 1)"
                color={"white"}
                borderRadius={2}
                border="1px solid"
                borderColor={"whiteAlpha.200"}
                zIndex={0}
                transition="all 0.3s ease"
              ></Box>
              <Button
                position="absolute"
                fontFamily={"encode-sans"}
                fontWeight="300"
                fontSize={{ base: "1.05rem", lg: "1.6rem" }}
                borderRadius={2}
                top="-7px"
                left="-7px"
                w="100%"
                h="100%"
                bg={"rgba(195, 158, 111, 1)"}
                zIndex={1}
                transition="all 0.3s ease"
                _groupHover={{ top: "0", left: "0" }}
                _hover={{ border: "2.5px solid white" }}
              >
                Soumission
              </Button>
            </Box>
          </NextLink>
        </Flex>
      </Flex>
      <Box
        position="absolute"
        width="100%"
        bottom="0"
        minH="100svh"
        background="linear-gradient(180deg, rgba(0, 6, 22, 0),rgba(0, 6, 22, 0.43), rgb(0, 5, 17))"
        zIndex={2}
      ></Box>
      {/* <Box
        position="absolute"
        bottom={{ base: "2.75%", lg: "0%" }}
        width={{ base: "92%", lg: "65%" }}
        m={{ base: "0 1.5%", lg: "0 0 0 4.25%" }}
        borderRadius={4}
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.1))"
        minH={{ base: "40vh", lg: "41vh" }}
        zIndex={1}
      ></Box> */}
    </Box>
  );
}
