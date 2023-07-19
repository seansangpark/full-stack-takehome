import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="teal"
      color="white"
      py={4}
      px={8}
      mt={8}
    >
      <Text>
        &copy; {new Date().getFullYear()} Simple News Subscription. All rights
        reserved.
      </Text>
    </Box>
  );
};

export default Footer;
