"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

export default function FinancingBanner() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      fontFamily={"Cinzel"}
      align="center"
      justify={isMobile ? "center" : "space-between"}
      px={isMobile ? 4 : 12}
      py={isMobile ? 8 : 10}
      position="relative"
      overflow="hidden"
      minH={isMobile ? "350px" : "250px"}
    >
      {/* Background image */}
      <Box position="absolute" inset="0" zIndex={0}>
        <Image
          src="/cuisine.png" // replace with your image path
          alt="Construction"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Blurry container */}
      <Flex
        id="financement"
        direction={isMobile ? "column" : "row"}
        align={isMobile ? "center" : "center"}
        justify="space-between"
        gap={isMobile ? 4 : 8}
        p={10}
        borderRadius="md"
        bg="#1b1b1b63"
        backdropFilter="blur(8px)"
        zIndex={2}
        maxW={"100%"}
        w="full"
      >
        {/* Text */}
        <Flex
          direction="column"
          align={isMobile ? "center" : "flex-start"}
          textAlign={isMobile ? "center" : "left"}
          gap={2}
        >
          <Heading
            fontSize={isMobile ? "xl" : "2xl"}
            fontWeight="bold"
            color="white"
          >
            Calculateur 3D
          </Heading>
          <Text fontSize={isMobile ? "sm" : "md"} color="white">
            Estimez le coût de votre projet de cuisine en quelques étapes
            simples.
          </Text>
        </Flex>

        {/* Single Button */}
        <Link href="https://qualiprix.ca/calculateur" isExternal>
          <Button
            bg="#cda675"
            _hover={{ bg: "#b48b59" }}
            color="white"
            size={isMobile ? "md" : "lg"}
          >
            Calculateur
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
