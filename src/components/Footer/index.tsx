"use client";
import {
  Box,
  Stack,
  HStack,
  Link,
  Image,
  IconButton,
  LinkProps,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const links = [
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#apropos" },
  { label: "Financement", href: "#financement" },
  { label: "Contact", href: "#contact" },
];

const accounts = [
  {
    url: "https://www.facebook.com/profile.php?id=61575210156190&mibextid=wwXIfr",
    label: "Facebook Account",
    type: "Facebook",
    icon: <FaFacebook />,
  },
  {
    url: "https://www.instagram.com/concept_renovation_prestige/",
    label: "Instagram Account",
    type: "instagram",
    icon: <FaInstagram />,
  },
];

const CustomLink = (props: LinkProps) => (
  <Link
    fontSize="sm"
    fontWeight="medium"
    color="gray.300"
    _hover={{ color: "white", textDecoration: "none" }}
    transition="0.3s"
    {...props}
  />
);

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-r, gray.900, gray.800)"
      color="gray.300"
      pt={10}
      pb={6}
      px={6}
    >
      {/* Main content */}
      <Stack
        maxW="7xl"
        marginInline="auto"
        spacing={6}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        {/* Logo */}
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Image w="100px" src="/crp.png" alt="Concept Renovation Prestige" />
        </Link>

        {/* Links */}
        <Stack
          spacing={6}
          alignItems="center"
          mb={{ base: 2, md: 0 }}
          direction={{ base: "column", md: "row" }}
        >
          {links.map((link, index) => (
            <CustomLink key={index} href={link.href}>
              {link.label}
            </CustomLink>
          ))}
        </Stack>

        {/* Social Icons */}
        <HStack spacing={5}>
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme="gray"
              icon={sc.icon}
              rounded="md"
            />
          ))}
        </HStack>
      </Stack>

      {/* Separator */}
      <Divider borderColor="gray.700" my={6} />

      {/* Bottom note */}
      <Text fontSize="xs" textAlign="center" color="gray.500">
        © {new Date().getFullYear()} Concept Rénovation Prestige · Fait par{" "}
        <Text as="span" color="blue.400" fontWeight="semibold">
          Nicolas Paquette
        </Text>
      </Text>
    </Box>
  );
};

export default Footer;
