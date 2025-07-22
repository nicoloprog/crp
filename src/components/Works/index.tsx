"use client";

import React, { useState } from "react";
import { Box, Text, VStack, Image, Flex } from "@chakra-ui/react";

const App = () => {
  const [selected, setSelected] = useState<string>("Cuisine");
  const [hasMounted, setHasMounted] = useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // 👈 Prevent mismatch on initial SSR render

  const images = [
    { title: "Cuisine", imageUrl: "/cuisine.jpeg" },
    { title: "Salle de bain", imageUrl: "/salledebain.jpeg" },
    { title: "Projets intérieurs", imageUrl: "/exterieur.png" },
    { title: "Projets Extérieurs", imageUrl: "/interieur.png" },
  ];

  return (
    <Box
      minH="100svh"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      fontFamily="Cinzel"
      overflow="hidden"
    >
      {images.map((img) => (
        <ImageGalleryItem
          key={img.title}
          title={img.title}
          imageUrl={img.imageUrl}
          isSelected={selected === img.title}
          onClick={() => setSelected(img.title)}
        />
      ))}
    </Box>
  );
};

type ImageGalleryItemProps = {
  title: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
};

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  title,
  imageUrl,
  isSelected,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      w={{
        base: "100%",
        md: isSelected ? "50%" : "16.6%",
      }}
      h={{
        base: isSelected ? "55svh" : "15svh",
        md: "100svh",
      }}
      position="relative"
      overflow="hidden"
      transition="all 0.4s ease"
      flexShrink={0}
    >
      <Image
        src={imageUrl}
        alt={title}
        objectFit="cover"
        w="full"
        h="full"
        position="absolute"
        top="0"
        left="0"
        filter="brightness(0.55)"
        transition="transform 0.3s ease"
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        align="center"
        justify="center"
        zIndex="1"
      >
        <VStack align="center" spacing={1} p={4} borderRadius="md">
          <Text
            color="white"
            fontSize={{ base: "xl", md: "3xl" }}
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            textShadow="1px 1px 6px rgba(0, 0, 0, 0.8)"
          >
            {title}
          </Text>
          <Box
            w="40px"
            h="2px"
            bg="white"
            transition="width 0.3s"
            _hover={{ width: "80px" }}
          />
        </VStack>
      </Flex>
    </Box>
  );
};

export default App;
