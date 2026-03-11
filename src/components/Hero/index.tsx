"use client";

import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import AnimatedHeading from "../AnimatedHeading";
import { Image } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

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
    <Box position="relative" w="full" minH="100svh">
      {!isLoaded && (
        <Image
          src={"/poster.png"}
          alt="renovation montreal"
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex={1}
        />
      )}

      {/* Background video */}
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
        zIndex={0}
      />
      <Flex>
        <Flex
          position="absolute"
          top={{
            base: "57.5%",
            sm: "57%", // ~480px
            md: "58%",
            lg: "53%",
            xl: "55%",
            "2xl": "60%",
          }}
          // Adjust `left` if needed, or consider `inset` for cleaner code
          left={{ base: "2.25%", lg: "5%" }}
          direction="column"
          // Adjust width to prevent overflow on the right, accounting for `left`
          width={{ base: "95%", sm: "90%", lg: "85%" }} // Example: Reduced width
          // maxH="100svh" // Keep this, but also ensure content inside fits
          m={{ base: "0 0.5%", lg: "0%" }}
          gap={{ base: 3, lg: 3 }}
          zIndex={1000}
          textAlign="left"
        >
          <Box maxW={{ base: "100%", lg: "100%" }}>
            <AnimatedHeading
              id="heroTitle"
              fontFamily={"Cinzel"}
              fontSize={{
                base: "clamp(1.75rem, 6vw, 2.25rem)", // Using clamp for fluid font size
                sm: "clamp(1.75rem, 5.5vw, 2.25rem)",
                md: "clamp(2rem, 5vw, 2.5rem)",
                lg: "clamp(2.5rem, 4vw, 3.5rem)",
                xl: "clamp(2.75rem, 3.75vw, 3.75rem)",
                "2xl": "clamp(3rem, 3.5vw, 4rem)",
              }}
              // Adjust maxW to ensure it doesn't push beyond the parent's width
              maxW={{ base: "90%", md: "80%", lg: "75%" }} // Slightly reduced from 70/75%
              fontWeight={"600"}
              lineHeight="95%"
              opacity={0}
            >
              construisons vos projets de demain
            </AnimatedHeading>
          </Box>
          <Box>
            <AnimatedHeading
              id="textHero"
              fontFamily={"Cinzel"}
              fontSize={{
                base: "clamp(0.8rem, 2.5vw, 1rem)", // Using clamp
                sm: "clamp(0.8rem, 2.2vw, 1rem)",
                md: "clamp(0.9rem, 2vw, 1.1rem)",
                lg: "clamp(1rem, 1.5vw, 1.35rem)",
                xl: "clamp(1.1rem, 1.4vw, 1.45rem)",
                "2xl": "clamp(1.2rem, 1.3vw, 1.5rem)",
              }}
              // Adjust maxW to ensure it doesn't push beyond the parent's width
              maxW={{
                base: "90%", // Slightly reduced
                sm: "85%",
                md: "60%", // Adjusted for md to give more room
                lg: "65%",
                xl: "68%",
                "2xl": "70%",
              }}
              fontWeight="400"
              lineHeight="115%"
              opacity={0}
            >
              de la conception à la réalisation, nous bâtissons des espaces
              avant-gardiste et sur mesure
            </AnimatedHeading>
          </Box>

          <NextLink
            href={"https://link.billdr.co/concept-renovation-prestige-inc"}
          >
            <Box
              m={{
                base: "5% 1.5%",
                md: "3% 0.5%",
                lg: "1.5% 0.25%",
              }}
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
                color={"white"}
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
        background="linear-gradient(180deg, rgba(0, 5, 17, 0.32), rgba(44, 44, 44, 0),rgba(0, 0, 0, 0),rgba(0, 6, 22, 0.6), rgb(0, 5, 17))"
        zIndex={2}
      ></Box>
      <Box
        position="absolute"
        width="100%"
        bottom="0"
        minH="100svh"
        background="linear-gradient(230deg, rgb(0, 5, 17), rgba(0, 6, 22, 0.26),rgba(0, 0, 0, 0),rgba(0, 6, 22, 0.35), rgb(0, 5, 17))"
        zIndex={2}
      ></Box>
      <Box
        position="absolute"
        bottom={{
          base: "0%",
          lg: "7%",
          xl: "5%",
          "2xl": "0%",
        }}
        width={{ base: "92%", lg: "77%", xl: "76%", "2xl": "75%" }}
        m={{ base: "0 1.5%", lg: "0 0 0 4.25%" }}
        borderRadius={4}
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.1))"
        minH={{ base: "43svh", lg: "41svh" }}
        zIndex={1}
      ></Box>
    </Box>
  );
}
