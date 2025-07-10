import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Box minH={"100vh"} width={"100%"} backgroundColor="rgba(18, 19, 22, 1)">
      <Hero />
    </Box>
  );
}
