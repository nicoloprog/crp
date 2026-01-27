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
    label: "Financement",
    href: "/#financement",
  },
  {
    label: "Contactez-nous",
    href: "/#contact",
  },
];

const Header = () => {
  return (
    <Box
      position={"absolute"}
      top={{ base: "0%", lg: "-1%", xl: "-1.5%" }}
      left={{ base: "0", md: "-2%", lg: "4%", xl: "3%" }}
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
          <NextLink href={"/"} passHref>
            <Box
              display={{ base: "inherit", lg: "" }}
              position={"relative"}
              w={{
                base: "100px",
                md: "130px",
                lg: "160px",
                xl: "190px",
                "2xl": "220px",
              }}
              aspectRatio={1 / 2}
            >
              <NextImage
                src={`/crpnoir.png`}
                alt={`renovation rive sud`}
                fill
                style={{ objectFit: "contain" }}
                sizes="100%"
              />
            </Box>
          </NextLink>
          <HeaderBurgerMenu />
        </Flex>
        <Flex
          gap={{ base: 2, lg: 1, xl: 4, "2xl": 6 }}
          align="center"
          borderRadius="full"
          py={2}
          paddingLeft={{ base: 0, lg: -2, xl: 4, "2xl": 5 }}
          display={{ base: "none", md: "flex" }}
        >
          {sectionLinks.map((link) => (
            <NextLink key={link.href} href={link.href} passHref>
              <Box
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
