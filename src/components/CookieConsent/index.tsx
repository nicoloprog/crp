"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Collapse,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const GA_ID = "G-RKR1ZZ8PQ8";
const STORAGE_KEY = "crp-cookie-consent";

type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: ConsentPreferences = {
  analytics: false,
  marketing: false,
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(preferences: ConsentPreferences) {
  if (!window.gtag) return;

  window.gtag("consent", "update", {
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied",
  });
}

function getStoredPreferences() {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) return null;

    return JSON.parse(storedValue) as ConsentPreferences;
  } catch {
    return null;
  }
}

function storePreferences(preferences: ConsentPreferences) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

export default function CookieConsent() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(defaultPreferences);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const storedPreferences = getStoredPreferences();

    if (storedPreferences) {
      setPreferences(storedPreferences);
      updateGoogleConsent(storedPreferences);
    } else {
      setShowBanner(true);
    }

    setHasLoaded(true);
  }, []);

  const savePreferences = (nextPreferences: ConsentPreferences) => {
    setPreferences(nextPreferences);
    storePreferences(nextPreferences);
    updateGoogleConsent(nextPreferences);
    setShowBanner(false);
  };

  const analyticsAllowed = hasLoaded && preferences.analytics;

  return (
    <>
      <Script id="google-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied'
          });
        `}
      </Script>

      {analyticsAllowed && (
        <>
          <Script
            id="google-analytics-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics-config" strategy="afterInteractive">
            {`
              gtag('consent', 'update', {
                ad_storage: '${preferences.marketing ? "granted" : "denied"}',
                ad_user_data: '${preferences.marketing ? "granted" : "denied"}',
                ad_personalization: '${
                  preferences.marketing ? "granted" : "denied"
                }',
                analytics_storage: 'granted'
              });
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {hasLoaded && !showBanner && (
        <Button
          position="fixed"
          bottom={{ base: 3, md: 4 }}
          left={{ base: 3, md: 4 }}
          zIndex={1999}
          size="sm"
          variant="outline"
          color="white"
          bg="rgba(20, 20, 20, 0.86)"
          borderColor="whiteAlpha.400"
          _hover={{ bg: "rgba(20, 20, 20, 0.96)" }}
          onClick={() => setShowBanner(true)}
        >
          Cookies
        </Button>
      )}

      {showBanner && (
        <Box
          position="fixed"
          bottom={{ base: 3, md: 6 }}
          left={{ base: 3, md: 6 }}
          right={{ base: 3, md: "auto" }}
          zIndex={2000}
          w={{ base: "auto", md: "440px" }}
          rounded="lg"
          bg="rgba(20, 20, 20, 0.96)"
          border="1px solid"
          borderColor="whiteAlpha.300"
          boxShadow="0 18px 50px rgba(0, 0, 0, 0.35)"
          p={{ base: 4, md: 5 }}
        >
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Text fontSize="lg" fontWeight="semibold" color="white">
                Gestion des cookies
              </Text>
              <Text fontSize="sm" color="gray.200" lineHeight="1.6">
                Nous utilisons des cookies essentiels au fonctionnement du site.
                Avec votre accord, nous utilisons aussi Google Analytics pour
                mesurer les visites et améliorer l'expérience.
              </Text>
            </Stack>

            <Collapse in={isOpen} animateOpacity>
              <Stack spacing={3} rounded="md" bg="whiteAlpha.100" p={3}>
                <Checkbox isChecked isDisabled colorScheme="yellow">
                  <Text as="span" color="gray.100">
                    Cookies essentiels
                  </Text>
                </Checkbox>
                <Checkbox
                  colorScheme="yellow"
                  isChecked={preferences.analytics}
                  onChange={(event) =>
                    setPreferences((current) => ({
                      ...current,
                      analytics: event.target.checked,
                    }))
                  }
                >
                  <Text as="span" color="gray.100">
                    Mesure d'audience Google Analytics
                  </Text>
                </Checkbox>
                <Checkbox
                  colorScheme="yellow"
                  isChecked={preferences.marketing}
                  onChange={(event) =>
                    setPreferences((current) => ({
                      ...current,
                      marketing: event.target.checked,
                    }))
                  }
                >
                  <Text as="span" color="gray.100">
                    Marketing et publicite
                  </Text>
                </Checkbox>
              </Stack>
            </Collapse>

            <Stack spacing={3}>
              <ButtonGroup
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                gap={2}
                spacing={0}
                w="full"
              >
                <Button
                  bg="rgba(195, 158, 111, 1)"
                  onClick={() =>
                    savePreferences({ analytics: true, marketing: true })
                  }
                  w="full"
                >
                  Tout accepter
                </Button>
                <Button
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.200" }}
                  onClick={() => savePreferences(defaultPreferences)}
                  w="full"
                >
                  Refuser
                </Button>
              </ButtonGroup>

              <HStack justify="space-between">
                <Button
                  size="sm"
                  variant="link"
                  color="rgba(195, 158, 111, 1)"
                  onClick={onToggle}
                >
                  {isOpen ? "Masquer les choix" : "Personnaliser"}
                </Button>
                {isOpen && (
                  <Button
                    size="sm"
                    color="rgba(195, 158, 111, 1)"
                    variant="ghost"
                    onClick={() => savePreferences(preferences)}
                  >
                    Enregistrer
                  </Button>
                )}
              </HStack>
            </Stack>
          </Stack>
        </Box>
      )}
    </>
  );
}
