"use client";

import { Box, Flex, Text, Heading, Icon, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <Flex
      id="contact"
      fontFamily={"Cinzel"}
      direction={{ base: "column", lg: "row" }}
      backgroundColor={"#12131E"} // Dark background color from the image
      alignItems={"center"}
      justifyContent="center" // Center content vertically and horizontally
      w="full"
      minH="100vh"
      color="white"
      p={{ base: 4, lg: 8 }} // Add some padding around the entire container
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        backgroundColor="#12131E" // Inner container background (same as body for seamless look)
        borderRadius="xl" // Rounded corners for the entire contact box
        overflow="hidden" // Ensures content respects border radius
        boxShadow="lg" // Optional: Add a subtle shadow
        maxW="1200px" // Max width for the content
        width="full" // Take full width up to maxW
      >
        {/* LEFT PANEL */}
        <Box
          bg="#9C8265" // Darker brown/grey background from the image
          w={"100%"}
          p={{ base: 8, lg: 12 }}
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "center", lg: "flex-start" }} // Center content on small screens, align left on large
          alignItems={{ base: "left", lg: "flex-start" }} // Center content on small screens, align left on large
          textAlign={{ base: "center", lg: "left" }} // Center text on small screens, align left on large
          position="relative" // For the circle overlay
          overflow="hidden" // Ensure circle overlay doesn't spill
        >
          {/* Circular overlay on the left panel */}
          <Box
            position="absolute"
            bottom="-50px"
            right="-50px"
            width="180px"
            height="180px"
            borderRadius="full"
            bg="rgba(255, 255, 255, 1)" // Light white transparent circle
            opacity="0.2"
            zIndex="0"
          />
          <Box
            position="absolute"
            top="-30px"
            left="-30px"
            width="100px"
            height="100px"
            borderRadius="full"
            bg="rgba(255, 255, 255, 1)" // Smaller, more subtle circle
            opacity="0.1"
            zIndex="0"
          />

          <Heading size="lg" mb={4} zIndex="1">
            NOUS JOINDRE
          </Heading>
          <Text fontSize="md" mb={12} zIndex="1">
            Que ce soit pour une question, une idée ou une demande de
            soumission, notre équipe est là pour vous écouter. Écrivez-nous, et
            bâtissons ensemble.
          </Text>

          <VStack
            align={{ base: "flex-start", lg: "flex-start" }}
            spacing={7}
            zIndex="1"
          >
            <Flex align="center" gap={4} fontSize="md">
              <Icon as={FaPhone} boxSize={5} color="whiteAlpha.700" />{" "}
              <Text>450 822-8711</Text>
            </Flex>
            <Flex align="center" gap={4}>
              <Icon as={FaInstagram} boxSize={5} color="whiteAlpha.700" />{" "}
              <Text>ConceptRénovationPrestige</Text>
            </Flex>
            <Flex align="center" gap={4}>
              <Icon as={FaFacebook} boxSize={5} color="whiteAlpha.700" />{" "}
              <Text>ConceptRénovationPrestige</Text>
            </Flex>
            <Flex align="center" gap={4}>
              <Icon as={FaEnvelope} boxSize={5} color="whiteAlpha.700" />{" "}
              <Text maxW={{ base: "72.5%", md: "100%" }}>
                ConceptRenoprestige@icloud.com
              </Text>
            </Flex>
          </VStack>
        </Box>

        {/* RIGHT PANEL (Form placeholder) */}
        {/* <Box
          bg="#e8e8e8ff" // Slightly lighter dark background for the form side from the image
          w={{ base: "100%", lg: "60%" }}
          px={{ base: 0, lg: 12 }}
          minH={{ base: "auto", lg: "500px" }} // Ensure a minimum height for the form area
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={"center"} // Center the form vertically
        >
          <ContactUsForm />
        </Box> */}
      </Flex>
    </Flex>
  );
}
