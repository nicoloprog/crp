"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import HeaderBurgerMenu from "./HeaderBurgerMenu";

export const sectionLinks: {
  label: string;
  href: string;
}[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Projets",
    href: "/#projets",
  },
  {
    label: "À propos",
    href: "/#apropos",
  },
  {
    label: "Financements",
    href: "/financements",
  },
  {
    label: "Contactez-nous",
    href: "/#contact",
  },
];

const Header = () => {
  return (
    <Box
      position={{ base: "fixed", "2xl": "absolute" }}
      top={{ base: "-7%", md: "-4%" }}
      left={{ base: "0", md: "2.5%" }}
      w={{ base: "100%", md: "90%" }}
      mx={"auto"}
      isolation={"isolate"}
      zIndex={1100}
    >
      <Flex
        justifyContent="space-between"
        px={{ base: 4, md: 12 }}
        minW={"100%"}
      >
        <Flex w={"96%"} justifyContent="space-between" align={"center"}>
          <NextLink href={"/"}>
            <Box
              display={{ base: "inherit", lg: "" }}
              position={"relative"}
              w={{ base: "140px", md: "160px", lg: "220px" }}
              aspectRatio={1 / 2}
            >
              <NextImage
                src={`/crp.png`}
                alt={`Concept Renovation Prestige Logo`}
                fill
                style={{ objectFit: "contain" }}
                sizes="100%"
              />
            </Box>
          </NextLink>
          <HeaderBurgerMenu />
        </Flex>
        <Flex
          gap={{ base: 2, md: 4, lg: 6, xl: 8 }}
          align="center"
          borderRadius="full"
          py={2}
          px={6}
          display={{ base: "none", md: "flex" }}
        >
          {sectionLinks.map((link) => (
            <NextLink key={link.href} href={link.href} passHref>
              <Box
                as="a"
                px={4}
                py={2}
                borderRadius="full"
                color={link.label === "Accueil" ? "white" : "gray.200"}
                bg={
                  link.label === "Accueil"
                    ? "rgba(255,255,255,0.2)"
                    : "transparent"
                }
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
                fontWeight="medium"
                fontSize={{ base: "sm", md: "lg", lg: "xl", xl: "2xl" }}
                whiteSpace="nowrap"
              >
                {link.label === "Contactez-nous" ? "Contact" : link.label}
              </Box>
            </NextLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
