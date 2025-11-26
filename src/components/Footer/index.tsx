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
  Flex,
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
      px={4}
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

      <Box position="relative" mt={6}>
        {/* Centered bottom note */}
        <Text
          fontSize="xs"
          textAlign={{ base: "left", md: "center" }}
          color="gray.500"
        >
          © {new Date().getFullYear()} Développé par{" "}
          <Link
            href="https://www.grandiflores.com/naturopathe"
            color="blue.400"
            fontWeight="semibold"
            isExternal
            _hover={{ textDecoration: "underline" }}
          >
            Nicolas Paquette
          </Link>
        </Text>

        {/* Number badge aligned to the right */}
        <Box
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          bg="rgba(195, 159, 111, 0.93)"
          color="white"
          px={{ base: 2, md: 4 }}
          py={{ base: 0, md: 1 }}
          rounded="full"
          fontWeight={{ base: "semibold", md: "semibold" }}
          fontSize={{ base: "sm", md: "xl" }}
          boxShadow="md"
          border="1px solid #ddd"
        >
          RBQ: 5867 - 4334 - 01
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
