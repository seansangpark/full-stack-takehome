import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Central from "./Central";
import Footer from "./Footer";

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Central />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
