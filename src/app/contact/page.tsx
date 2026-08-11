"use client";

import { Box, Flex, Text, Heading, Icon, Link, Badge } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaArrowRight, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <Flex
      id="contact"
      fontFamily={"Cinzel"}
      backgroundColor={"#1A1D2B"}
      alignItems={"center"}
      justifyContent="center"
      w="full"
      minH="100vh"
      color="white"
      p={{ base: 4, lg: 8 }}
      position="relative"
      overflow="hidden"
    >
      {/* Ambient background glow */}
      <Box
        position="absolute"
        top="20%"
        left="50%"
        transform="translateX(-50%)"
        width="700px"
        height="500px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(156,130,101,0.2) 0%, rgba(0,0,0,0) 70%)"
        filter="blur(50px)"
      />

      <Box
        backgroundColor="rgba(255,255,255,0.06)"
        backdropFilter="blur(24px)"
        border="1px solid rgba(255,255,255,0.12)"
        borderRadius="2xl"
        boxShadow="0 25px 70px rgba(0,0,0,0.35)"
        maxW="640px"
        width="full"
        p={{ base: 8, md: 12 }}
        marginTop={{ base: 0, md: 24 }}
        position="relative"
        zIndex={1}
      >
        <Text
          color="whiteAlpha.800"
          lineHeight="short"
          textAlign="center"
          mb={10}
          maxW="580px"
        >
          Contactez-nous pour discuter de vos besoins et obtenir une soumission
          personnalisée.
        </Text>

        <Flex direction="column" gap={4}>
          <Link
            href="tel:+14384551901"
            role="group"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={6}
            py={5}
            borderRadius="xl"
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.1)"
            transition="all 0.25s ease"
            _hover={{
              bg: "rgba(255,255,255,0.1)",
              borderColor: "#9C8265",
              transform: "translateX(4px)",
            }}
          >
            <Flex align="center" gap={4}>
              <Flex
                align="center"
                justify="center"
                boxSize="46px"
                borderRadius="full"
                bg="rgba(156,130,101,0.2)"
                transition="all 0.25s ease"
                _groupHover={{ bg: "#9C8265" }}
              >
                <Icon
                  as={FaPhone}
                  boxSize={4}
                  color="#D4B896"
                  _groupHover={{ color: "white" }}
                />
              </Flex>
              <Box>
                <Text fontSize="sm" color="whiteAlpha.600">
                  Appelez-nous
                </Text>
                <Text fontSize="md">438 455-1901</Text>
              </Box>
            </Flex>
          </Link>

          <Link
            href="mailto:contact@infocrp.com"
            role="group"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={6}
            py={5}
            borderRadius="xl"
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.1)"
            transition="all 0.25s ease"
            _hover={{
              bg: "rgba(255,255,255,0.1)",
              borderColor: "#9C8265",
              transform: "translateX(4px)",
            }}
          >
            <Flex align="center" gap={4}>
              <Flex
                align="center"
                justify="center"
                boxSize="46px"
                borderRadius="full"
                bg="rgba(156,130,101,0.2)"
                transition="all 0.25s ease"
                _groupHover={{ bg: "#9C8265" }}
              >
                <Icon
                  as={FaEnvelope}
                  boxSize={4}
                  color="#D4B896"
                  _groupHover={{ color: "white" }}
                />
              </Flex>
              <Box>
                <Text fontSize="sm" color="whiteAlpha.600">
                  Écrivez-nous
                </Text>
                <Text fontWeight="medium">contact@infocrp.com</Text>
              </Box>
            </Flex>
          </Link>
        </Flex>

        <Flex
          align="center"
          gap={2}
          mt={8}
          pt={6}
          borderTop="1px solid rgba(255,255,255,0.08)"
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            marginX="auto"
            textAlign="center"
            color="whiteAlpha.600"
          >
            lundi au vendredi
            <br /> 9:00 AM à 17:00 PM
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
