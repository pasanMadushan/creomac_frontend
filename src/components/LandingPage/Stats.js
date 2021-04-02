import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  useColorMode,
  Square
} from '@chakra-ui/react';



export default function WithSpeechBubbles() {
   const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "cyan.800" : "cyan.100"}>
      <Container  py={8}>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          
          <Box>
          
          <Stack
            bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
          >    
         
            <Heading as={'h3'} fontSize={'6xl'}  color= {colorMode === "light" ? "cyan.800" : "cyan.100"} >
                    5+
            </Heading>
            <Text
                textAlign={'center'}
                color= {colorMode === "light" ? "cyan.800" : "cyan.100"}
            fontSize={'sm'}>
                    Projects
            </Text>
            
        </Stack>
        
        </Box>

        <Box>
          <Stack
            bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
          >     
            <Heading as={'h3'} fontSize={'6xl'}  color= {colorMode === "light" ? "cyan.800" : "cyan.100"}>
                    5+
            </Heading>
            <Text
                textAlign={'center'}
                color= {colorMode === "light" ? "cyan.800" : "cyan.100"}
            fontSize={'sm'}>
                    Awards
            </Text>
        </Stack>
        </Box>

        <Box>
          <Stack
            bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
          >     
            <Heading as={'h3'} fontSize={'6xl'}  color= {colorMode === "light" ? "cyan.800" : "cyan.100"}>
                    5+
            </Heading>
            <Text
                textAlign={'center'}
                color= {colorMode === "light" ? "cyan.800" : "cyan.100"}
            fontSize={'sm'}>
                    Team
            </Text>
        </Stack>
        </Box>
         
        </Stack>
      </Container>
    </Box>
  );
}