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

export default function SoumissionBanner() {
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
          src="/finance.png" // replace with your image path
          alt="Renovation rive sud"
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
        {/* Single Button */}
        <Link
          href="https://link.billdr.co/concept-renovation-prestige-inc"
          isExternal
        >
          <Button
            bg="#cda675"
            _hover={{ bg: "#b48b59" }}
            color="white"
            size={isMobile ? "md" : "lg"}
          >
            Soumission en ligne
          </Button>
        </Link>
        {/* Text */}
        <Flex
          direction="column"
          align={isMobile ? "center" : "flex-end"}
          textAlign={isMobile ? "center" : "left"}
          gap={2}
        >
          <Text fontSize={isMobile ? "sm" : "md"} color="white">
            Obtenez une soumission détaillée et transparente pour vos travaux de
            construction.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
