import React from 'react'
import { Box,useColorMode } from '@chakra-ui/react';

const CarouselSection = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <Box height='500px'>
dsdsdsd
            </Box>

            <Box
        w="100%"
        h="5px"
        b="0px"
        mt="10px"
        bg={colorMode === "light" ? "cyan.100" : "cyan.100"}
      />
            
        </Box>
    )
}

export default CarouselSection
