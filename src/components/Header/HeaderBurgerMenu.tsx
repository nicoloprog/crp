"use client";

import React from "react";
import NextLink from "next/link";
import {
  Box,
  BoxProps,
  IconButton,
  useDisclosure,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import { sectionLinks } from "./index";
import BurgerMenuIcon from "./BurgerMenuIcon";
import XIcon from "./XIcon";

const HeaderBurgerMenu = ({ ...rest }: BoxProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  return (
    <Box {...rest} color="#C39E6F" align={"center"}>
      {/* Burger Button (hidden when menu is open) */}
      {!isOpen && (
        <IconButton
          aria-label="Open menu"
          icon={<BurgerMenuIcon />}
          onClick={onOpen}
          variant="ghost"
          display={{ base: "inline-flex", md: "none" }}
          sx={{
            "& rect, & path": { transition: "0.3s" },
            _hover: {
              bg: "transparent",
              "& rect, & path": { fill: "brand.orange" },
            },
          }}
        />
      )}

      {/* Mobile Menu */}
      <Box
        position="fixed"
        inset={0}
        bg="linear-gradient(to bottom, #0b101e26, #0b101eb7, #0b101ef9, #0b101eff, #0b101eff)"
        zIndex={20}
        px={10}
        py={6}
        display={{ base: "block", md: "none" }}
        transition="all 0.4s ease"
        transform={isOpen ? "translateY(0)" : "translateY(-100%)"}
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? "auto" : "none"}
      >
        {/* Close Button */}
        <IconButton
          aria-label="Close menu"
          icon={<XIcon height="55px" width="45px" />}
          onClick={onClose}
          variant="solid"
          position="absolute"
          top={"5%"}
          right={"10%"}
          zIndex={21}
          sx={{
            "& path": { fill: "rgba(255, 255, 255, 1)", transition: "0.2s" },
            _hover: {
              bg: "transparent",
              "& path": { fill: "whitesmoke" },
            },
          }}
        />

        {/* Navigation Links */}
        <Flex
          direction="column"
          pt={52}
          gap={14}
          align="flex-start"
          justify="flex-start"
        >
          {sectionLinks.map((section) => {
            const isActive = pathname === section.href;
            return (
              <Link
                as={NextLink}
                href={section.href}
                key={section.label}
                onClick={onClose}
                _hover={{ textDecoration: "none" }}
                w="fit-content"
              >
                <Text
                  px={3}
                  py={1}
                  fontSize="1.6rem"
                  fontWeight="medium"
                  borderRadius="md"
                  textTransform="none"
                  color="white"
                  bg={isActive ? "rgba(255, 255, 255, 0.2)" : "transparent"}
                  transition="background 0.2s ease"
                >
                  {section.label}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default HeaderBurgerMenu;
