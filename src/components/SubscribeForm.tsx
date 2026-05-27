"use client";

import {
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Text,
  useToast,
  Alert,
  AlertIcon,
  useDisclosure,
  FormErrorMessage,
} from "@chakra-ui/react";
import { subscribeUser } from "../app/actions/subscribe";
import { useState, useEffect, useRef } from "react";

// Constants
const MAX_NAME_LENGTH = 50;
const MAX_EMAIL_LENGTH = 254;
const MIN_NAME_LENGTH = 2;
const POPUP_TRIGGER_SECTION_ID = "works";
const BRAND_GOLD = "rgba(195, 158, 111, 1)";
const RATE_LIMIT_DELAY_MS = 1000;
const MIN_FILL_TIME_MS = 3000; // Humans take at least 3 seconds to type

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export default function SubscribePopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStartTime, setFormStartTime] = useState<number>(0); // Time-based check

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    hp_email_verification: "", // Honeypot remains
  });

  const toast = useToast();
  const lastSubmitTimeRef = useRef<number>(0);
  const isSubmittingRef = useRef<boolean>(false);
  const hasOpenedRef = useRef<boolean>(false);

  useEffect(() => {
    let animationFrameId = 0;
    let observer: IntersectionObserver | null = null;
    let attempts = 0;
    const maxAttempts = 120;

    const openPopup = () => {
      if (hasOpenedRef.current) return;

      hasOpenedRef.current = true;
      onOpen();
      setFormStartTime(Date.now()); // Mark when the form actually appears
    };

    const attachObserver = () => {
      const triggerElement = document.getElementById(POPUP_TRIGGER_SECTION_ID);

      if (!triggerElement) {
        attempts += 1;

        if (attempts < maxAttempts) {
          animationFrameId = window.requestAnimationFrame(attachObserver);
        }

        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          openPopup();
          observer?.disconnect();
        },
        {
          root: null,
          rootMargin: "0px 0px -20% 0px",
          threshold: 0.35,
        },
      );

      observer.observe(triggerElement);
    };

    attachObserver();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      observer?.disconnect();
    };
  }, [onOpen]);

  const validateEmail = (email: string): boolean => {
    if (!email) return false;
    if (email.length > MAX_EMAIL_LENGTH) return false;
    return EMAIL_REGEX.test(email);
  };

  const validateName = (
    name: string,
    fieldName: string,
  ): string | undefined => {
    if (!name || name.trim().length === 0) return `${fieldName} est requis`;
    if (name.length < MIN_NAME_LENGTH)
      return `${fieldName} doit avoir au moins ${MIN_NAME_LENGTH} caractères`;
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const firstNameError = validateName(formData.firstName, "Le prénom");
    if (firstNameError) newErrors.firstName = firstNameError;

    const lastNameError = validateName(formData.lastName, "Le nom");
    if (lastNameError) newErrors.lastName = lastNameError;

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email invalide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputStyles = {
    bg: "gray.100",
    color: "gray.800",
    focusBorderColor: BRAND_GOLD,
    sx: { caretColor: BRAND_GOLD },
    _placeholder: { color: "gray.500", opacity: 1 },
    _focusVisible: {
      borderColor: BRAND_GOLD,
      boxShadow: `0 0 0 1px ${BRAND_GOLD}`,
    },
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const now = Date.now();
    let isSuccessfulSubmit = false;

    // 1. RATE LIMIT CHECK
    if (now - lastSubmitTimeRef.current < RATE_LIMIT_DELAY_MS) return;

    // 2. TIME-BASED BOT CHECK (Invisible)
    // If the user "filled" the form in less than 3 seconds, it's likely a bot.
    if (now - formStartTime < MIN_FILL_TIME_MS) {
      console.warn("Submit ignored: Too fast (bot suspected)");
      return;
    }

    if (isSubmittingRef.current) return;
    if (!validateForm()) return;

    isSubmittingRef.current = true;
    setStatus("loading");
    lastSubmitTimeRef.current = now;

    try {
      const submitFormData = new FormData();
      submitFormData.append("firstName", formData.firstName.trim());
      submitFormData.append("lastName", formData.lastName.trim());
      submitFormData.append("email", formData.email.trim().toLowerCase());
      submitFormData.append(
        "hp_email_verification",
        formData.hp_email_verification,
      );

      const result = await subscribeUser(submitFormData);

      if (result.success) {
        isSuccessfulSubmit = true;
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          hp_email_verification: "",
        });
        setTimeout(onClose, 2000);
      } else {
        setStatus("error");
        toast({
          title: "Erreur",
          description: result.error || result.message,
          status: "error",
        });
      }
    } catch (error) {
      setStatus("error");
    } finally {
      isSubmittingRef.current = false;
      if (!isSuccessfulSubmit) setStatus("idle");
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent
        maxW={{ base: "90%", md: "900px" }}
        borderRadius="lg"
        bg="gray.700"
        bgGradient="linear(to-br, rgba(97, 97, 97, 0), rgba(0, 0, 0, 0.37))"
        backdropFilter="blur(16px) saturate(120%)"
        border="1px solid"
        borderColor="whiteAlpha.400"
        boxShadow="0 8px 32px 0 rgb(0, 0, 0)"
      >
        <ModalHeader>
          <VStack align="center">
            <Heading
              fontFamily={"Cinzel"}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="800"
              bgGradient="linear(to-br, gray.100, gray.200)"
              bgClip="text"
              textAlign="center"
              lineHeight="1.05"
              pt={2}
              mb={-2}
            >
              Inscription à l'infolettre
            </Heading>
          </VStack>
        </ModalHeader>
        <ModalCloseButton
          borderRadius="lg"
          border="1px solid"
          borderColor="rgba(195, 158, 111, 1)"
          color="gray.200"
          _hover={{ bg: "rgba(195, 158, 111, 0.14)" }}
          _focusVisible={{
            borderColor: "rgba(195, 158, 111, 1)",
            boxShadow: "0 0 0 3px rgba(195, 158, 111, 0.45)",
          }}
        />

        <ModalBody pb={8}>
          {status === "success" ? (
            <Alert status="success" borderRadius="md">
              <AlertIcon />
              Inscription réussie !
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <VStack spacing={6}>
                <Text
                  fontSize={{ base: "sm", md: "lg" }}
                  color="gray.200"
                  textAlign="center"
                  lineHeight="1.05"
                >
                  Restez à l'affût de nos dernières tendances en vous abonnant
                </Text>

                {/* HONEYPOT */}
                <Input
                  name="hp_email_verification"
                  value={formData.hp_email_verification}
                  onChange={(e) =>
                    handleInputChange(e, "hp_email_verification")
                  }
                  display="none"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <HStack
                  width="full"
                  spacing={4}
                  flexDir={{ base: "column", md: "row" }}
                  align="flex-start"
                >
                  <FormControl isInvalid={!!errors.firstName} isRequired>
                    <FormLabel fontFamily={"Cinzel"}>Prénom</FormLabel>
                    <Input
                      placeholder="Votre prénom"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange(e, "firstName")}
                      {...inputStyles}
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.lastName} isRequired>
                    <FormLabel fontFamily={"Cinzel"}>Nom</FormLabel>
                    <Input
                      placeholder="Votre nom"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange(e, "lastName")}
                      {...inputStyles}
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                </HStack>

                <FormControl isInvalid={!!errors.email} isRequired width="full">
                  <FormLabel fontFamily={"Cinzel"}>Courriel</FormLabel>
                  <Input
                    type="email"
                    placeholder="@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    {...inputStyles}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  bg="rgba(195, 158, 111, 1)"
                  color="white"
                  width="full"
                  size="lg"
                  isLoading={status === "loading"}
                  borderRadius="lg"
                  _hover={{ bg: "gray.700" }}
                >
                  S'abonner
                </Button>
              </VStack>
            </form>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
