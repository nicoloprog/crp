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
      top={{ base: "-7%", md: "0" }}
      w={{ base: "100%", md: "10%" }}
      mx={"auto"}
      isolation={"isolate"}
      display={{ base: "", md: "none" }}
      zIndex={1100}
    >
      <Flex
        justifyContent="space-between"
        px={{ base: 4, md: 12 }}
        maxW={"98%"}
        mx={"auto"}
        borderRadius={"50px"}
      >
        <Flex w={"96%"} justifyContent="space-between" align={"center"}>
          <NextLink href={"/"}>
            <Box
              display={{ base: "inherit", lg: "none" }}
              position={"relative"}
              w={"140px"}
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
      </Flex>
    </Box>
  );
};

export default Header;
