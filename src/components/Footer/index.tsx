"use client";
import {
  Stack,
  HStack,
  Link,
  Image,
  IconButton,
  LinkProps,
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
    url: "https://www.facebook.com/profile.php?id=61575210156190&mibextid=wwXIfr&rdid=BqUi1G3Lr9NTQLMy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GVHhW8DPQ%2F%3Fmibextid%3DwwXIfr", // your original link
    label: "Facebook Account",
    type: "Facebook",
    icon: <FaFacebook />,
  },
  {
    url: "https://www.instagram.com/concept_renovation_prestige/", // your original link
    label: "Instagram Account",
    type: "instagram",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 4, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      {/* Logo */}
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <Image w="100px" src="/crp.png" alt="TemplatesKart" />
      </Link>

      {/* Same links for desktop & mobile */}
      <Stack
        spacing={4}
        paddingBottom={{ base: 8, md: 0 }}
        alignItems="center"
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
  );
};

const CustomLink = ({ children, href, ...props }: LinkProps) => {
  return (
    <Link
      href={href}
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
