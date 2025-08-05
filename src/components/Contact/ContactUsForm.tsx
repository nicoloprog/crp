"use client";

import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  useToast,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const ContactUsForm = ({ ...rest }: BoxProps) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/insertGsheet", {
        name,
        info,
        message,
      });
      toast({
        title: `Success`,
        description: `Message envoyer avec succes ! Nous vous contacterons dans les plus brefs délais`,
        status: "success",
        isClosable: true,
      });
      setName("");
      setInfo("");
      setMessage("");
    } catch (e) {
      toast({
        title: `Error`,
        description: `Erreur lors de l'envoi d'information. Eassayez de nouveau`,
        status: "error",
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} {...rest} width={"85%"}>
      <Flex
        direction={"column"}
        py={{ base: 8, lg: 16 }}
        gap={{ base: 5, lg: 8 }}
      >
        <FormControl borderBottomColor={"rgba(0, 0, 0, 0.6)"}>
          <Input
            isRequired
            placeholder="Entrer votre nom"
            backgroundColor={"rgba(35, 52, 67, 0.02)"}
            color={"black"}
            _placeholder={{ color: "black" }}
            height={{ base: "40px", lg: "55px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl
          borderBottomColor={"rgba(0, 0, 0, 0.6)"}
          color={"rgba(35, 52, 67, 0.36)"}
        >
          <Input
            isRequired
            placeholder="Email ou numéro de téléphone"
            backgroundColor={"rgba(35, 52, 67, 0.02)"}
            color={"black"}
            _placeholder={{ color: "black" }}
            height={{ base: "40px", lg: "55px" }}
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </FormControl>

        <FormControl borderBottomColor={"rgba(0, 0, 0, 0.6)"}>
          <Textarea
            isRequired
            placeholder="Détails sur votre projet "
            backgroundColor={"rgba(35, 52, 67, 0.02)"}
            color={"black"}
            _placeholder={{ color: "black" }}
            height={{ base: "90px", lg: "150px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          justifyContent={"center"}
          fontFamily={"encode-sans"}
          fontWeight="100"
          fontSize={{ base: "1.05rem", lg: "1.6rem" }}
          borderRadius={2}
          bg="#C39E6F"
          minW={{ base: "90%", lg: "100%" }}
          _hover={{
            bg: "whitesmoke",
            color: "#000000ff",
            transform: "perspective(10000px) translateY(-1px) scale(1.01)",
            boxShadow:
              "0 16px 28px rgba(0, 0, 0, 0.3), 0 0 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
          transition="all 0.4s ease"
          cursor="pointer"
        >
          <Text fontSize={{ base: "0.7rem", lg: "1rem" }} fontWeight="400">
            Soumettre
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default ContactUsForm;
