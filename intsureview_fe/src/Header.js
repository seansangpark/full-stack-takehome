import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      bg="teal"
      color="white"
      py={4}
      px={8}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading
          as="h1"
          size="lg"
        >
          Simple News Subscription
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
