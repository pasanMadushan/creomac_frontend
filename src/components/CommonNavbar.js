import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Button,
  useColorMode,
  IconButton,
  ReactRouterLink,
  Img,


} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon, EmailIcon } from "@chakra-ui/icons";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';


function Navbar(props) {
  var his=useHistory();
  const MenuItems = ({ children }) => (
    <Button
      mt={{ base: 4, md: 0 }}
      mr={6}
      display="block"
      colorScheme="teal.500"
      variant="link"
      color={colorMode === "light" ? "cyan.900" : "cyan.100"}
    >
      {children}
    </Button>
  );

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      pt="1.0rem"
      bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="10000"
    > 
      
      <Flex align="center" mr={5}>
        <Img ml="1.5rem" src="../logo.png" alt="logo" h="70px" w="70px" />
      </Flex>

      <IconButton
      display={{base:'block', md:'none'}}
        variant="outline"
        colorScheme="cyan"
        icon={<HamburgerIcon />}
        onClick={handleToggle}
        mr='20px'
      />

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        pl="20px"
      >
        <MenuItems>
          <Link as={ReactRouterLink} to="/">
            Home
          </Link>
        </MenuItems>

        <MenuItems>
          <Link as={ReactRouterLink} to="/overview">
            Overview
          </Link>
        </MenuItems>

        <MenuItems>
          <Link as={ReactRouterLink} to="/projects">
            Projects
          </Link>
        </MenuItems>

      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
    
        <IconButton
          aria-label="Call Segun"
          border = "2px solid"
          size="md"
          icon= { <EmailIcon />}
          mr={{ base: "5px", md: "20px" }}
          variant="ghost"
          color={colorMode === "light" ? "cyan.800" : "cyan.100"}
          
        />


        <IconButton
          aria-label="Call Segun"
          border = "2px solid"
          size="md"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          mr={{ base: "5px", md: "20px" }}
          variant="ghost"
          color={colorMode === "light" ? "cyan.800" : "cyan.100"}
          onClick={toggleColorMode}
        />
      
      </Box>

      <Box
        w="100%"
        h="5px"
        b="0px"
        mt="10px"
        bg={colorMode === "light" ? "cyan.800" : "cyan.100"}
      />
    </Flex>
  );
}

export default Navbar;
