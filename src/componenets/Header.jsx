import { Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Image
        cursor={"pointer"}
        alt="logo"
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
        w={6}
        alignItems={"center"}
      />
    </Flex>
  );
};

export default Header;
