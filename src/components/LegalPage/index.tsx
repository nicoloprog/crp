"use client";

import {
  Box,
  Container,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Footer from "@/components/Footer";

type LegalSection = {
  title: string;
  body?: string[];
  items?: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  intro,
  updatedAt,
  sections,
}: LegalPageProps) {
  return (
    <Box bg="#818181" color="white" minH="100vh">
      <Container
        maxW="4xl"
        pt={{ base: "45%", md: "15%" }}
        pb={{ base: 16, md: 24 }}
      >
        <Stack spacing={8}>
          <Stack spacing={4}>
            <Text
              color="#C39E6F"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              Concept Renovation Prestige
            </Text>
            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>
              {title}
            </Heading>
            <Text color="gray.300" fontSize={{ base: "md", md: "lg" }}>
              {intro}
            </Text>
            <Text color="gray.400" fontSize="sm">
              Dernière mise à jour : {updatedAt}
            </Text>
          </Stack>

          <Stack spacing={8}>
            {sections.map((section) => (
              <Stack
                key={section.title}
                as="section"
                spacing={3}
                borderTop="1px solid"
                borderColor="whiteAlpha.200"
                pt={6}
              >
                <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }}>
                  {section.title}
                </Heading>

                {section.body?.map((paragraph) => (
                  <Text key={paragraph} color="gray.300" lineHeight="1.8">
                    {paragraph}
                  </Text>
                ))}

                {section.items && (
                  <UnorderedList color="gray.300" spacing={2} pl={4}>
                    {section.items.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </UnorderedList>
                )}
              </Stack>
            ))}
          </Stack>

          <Box
            borderTop="1px solid"
            borderColor="whiteAlpha.200"
            pt={6}
            color="gray.300"
          >
            <Text>
              Pour toute question, contactez-nous a{" "}
              <Link
                href="mailto:ConceptRenoprestige@icloud.com"
                color="#C39E6F"
              >
                contact@infocrp.com
              </Link>{" "}
              ou consultez la page{" "}
              <Link as={NextLink} href="/contact" color="#C39E6F">
                Contact
              </Link>
              .
            </Text>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
