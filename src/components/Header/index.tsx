"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";

import HeaderBurgerMenu from "./HeaderBurgerMenu";

export const sectionLinks: {
  label: string;
  href: string;
}[] = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/#projets" },
  { label: "À propos", href: "/#apropos" },
  { label: "Financement", href: "/#financement" },
  { label: "Contactez-nous", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/contact") return pathname === "/contact";
    return false; // hash links not treated as separate pages
  };

  return (
    <Box
      position="absolute"
      top={{ base: "0%", lg: "-1%", xl: "-1.5%" }}
      left={{ base: "0", md: "-2%", lg: "4%", xl: "3%" }}
      w={{ base: "100%", md: "90%" }}
      mx="auto"
      isolation="isolate"
      zIndex={1100}
    >
      <Flex justifyContent="space-between" px={{ base: 4, md: 12 }}>
        <Flex w="96%" justifyContent="space-between" align="center">
          <NextLink href="/" passHref>
            <Box
              position="relative"
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
                src="/crpnoir.png"
                alt="renovation rive sud"
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
          display={{ base: "none", md: "flex" }}
        >
          {sectionLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <NextLink key={link.href} href={link.href} passHref>
                <Box
                  px={4}
                  py={2}
                  borderRadius="full"
                  color={active ? "white" : "gray.200"}
                  bg={active ? "rgba(255,255,255,0.2)" : "transparent"}
                  _hover={{
                    bg: active
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(255,255,255,0.1)",
                  }}
                  fontWeight={active ? "sm" : "medium"}
                  fontSize={{ base: "sm", md: "lg", lg: "xl", xl: "2xl" }}
                  whiteSpace="nowrap"
                  transition="all 0.2s ease"
                >
                  {link.label === "Contactez-nous" ? "Contact" : link.label}
                </Box>
              </NextLink>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
