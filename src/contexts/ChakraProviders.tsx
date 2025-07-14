"use client";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,

  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#ADADC1", // Or any other color from the Chakra UI theme or custom palette
        color: "white", // This sets the default text color
      },
    },
  },
  colors: {
    brand: {
      // custom color palette
    },
  },
  components: {},
});

function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: "top-right" } }}
    >
      {children}
    </ChakraProvider>
  );
}

export default ChakraProviders;
