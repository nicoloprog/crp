"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  LinkProps,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const navigationLinks = [
  { label: "Projets", href: "/#projets" },
  { label: "À propos", href: "/#apropos" },
  { label: "Financement", href: "/#financement" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions", href: "/conditions-utilisation" },
  { label: "Cookies", href: "/politique-cookies" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

const accounts = [
  {
    url: "https://www.facebook.com/profile.php?id=61575210156190&mibextid=wwXIfr",
    label: "Facebook",
    icon: <FaFacebook />,
  },
  {
    url: "https://www.instagram.com/concept_renovation_prestige/",
    label: "Instagram",
    icon: <FaInstagram />,
  },
];

const FooterLink = (props: LinkProps) => (
  <Link
    color="gray.300"
    fontSize="sm"
    fontWeight="medium"
    lineHeight="1.5"
    _hover={{ color: "#D9B27C", textDecoration: "none" }}
    transition="color 0.2s ease"
    {...props}
  />
);

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <Text
    color="white"
    fontSize="sm"
    fontWeight="semibold"
    letterSpacing="0.08em"
    textTransform="uppercase"
  >
    {children}
  </Text>
);

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#0F1118"
      color="gray.300"
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Container maxW="7xl" py={{ base: 10, md: 20 }} px={{ base: 5, md: 8 }}>
        <Stack spacing={{ base: 10, md: 12 }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <Stack spacing={5}>
              <Link
                href="/"
                w="fit-content"
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  w="108px"
                  src="/crp.png"
                  alt="Concept Renovation Prestige"
                />
              </Link>
              <Text
                color="gray.300"
                fontSize="sm"
                lineHeight="1.8"
                maxW="320px"
              >
                Entrepreneur en rénovation sur la Rive-Sud de Montréal pour des
                projets intérieurs et extérieurs prestigieux.
              </Text>
              <Box
                display="inline-flex"
                w="fit-content"
                color="white"
                bg="rgba(195, 158, 111, 0.18)"
                border="1px solid"
                borderColor="rgba(195, 158, 111, 0.42)"
                rounded="full"
                px={4}
                py={2}
                fontSize="sm"
                fontWeight="semibold"
              >
                RBQ: 5867 - 4334 - 01
              </Box>
            </Stack>

            <Stack spacing={4}>
              <FooterHeading>Navigation</FooterHeading>
              <Stack spacing={3}>
                {navigationLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Stack>
            </Stack>

            <Stack spacing={4}>
              <FooterHeading>Termes et Conditions</FooterHeading>
              <Stack spacing={3}>
                {legalLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Stack>
            </Stack>

            <Stack spacing={4}>
              <FooterHeading>Contact</FooterHeading>
              <Stack spacing={3}>
                <HStack spacing={3} align="flex-start">
                  <Icon as={FaPhoneAlt} color="#D9B27C" mt={1} />
                  <FooterLink href="tel:14508228711">450 822-8711</FooterLink>
                </HStack>
                <HStack spacing={3} align="flex-start">
                  <Icon as={FaEnvelope} color="#D9B27C" mt={1} />
                  <FooterLink href="mailto:contact@infocrp.com">
                    contact@infocrp.com
                  </FooterLink>
                </HStack>
              </Stack>

              <HStack spacing={3} pt={2}>
                {accounts.map((account) => (
                  <IconButton
                    key={account.url}
                    as={Link}
                    isExternal
                    href={account.url}
                    aria-label={account.label}
                    icon={account.icon}
                    color="white"
                    bg="whiteAlpha.200"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    rounded="md"
                    _hover={{ bg: "#C39E6F", textDecoration: "none" }}
                  />
                ))}
              </HStack>
            </Stack>
          </SimpleGrid>

          <Divider borderColor="whiteAlpha.200" />

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={3}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            color="gray.500"
            fontSize="xs"
          >
            <Text>
              &copy; 2025 - {new Date().getFullYear()} Concept Renovation
              Prestige. All rights reserved.
            </Text>
            <Text>
              Fait par{" "}
              <Link
                href="https://portfolio-seven-lac-89.vercel.app/"
                color="#D9B27C"
                fontWeight="semibold"
                isExternal
                _hover={{ color: "white" }}
              >
                Nicolas Paquette
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
