import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorMode
  } from '@chakra-ui/react';

 import { ArrowForwardIcon } from '@chakra-ui/icons'
  
  export default function OurStory() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <Container maxWidth='100%' pl='20' pr='20' bg={colorMode === "light" ? "cyan.50" : "cyan.800"}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '5xl' }}>
              
              <Text as={'span'} color={colorMode === "light" ? "cyan.800" : "cyan.100"}>
                Our Story
              </Text>
            </Heading>
            <Text color={colorMode === "light" ? "cyan.800" : "cyan.100"}>
            We are a group of students who are experts in Arduino and we are 
            volunteering to help to the beginners. We are very enthusiastic to 
            do new inventions and to solve problems coming when coding and hardware 
            Arduino or micro:bit. If you want to hear out latest projects subscribe to 
            out newsletter. 
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                rightIcon={<ArrowForwardIcon />}
                bg={colorMode === "light" ? "cyan.800" : "cyan.100"}
                _hover={{ bgGradient:"linear(to-r, cyan.800, cyan.500)" }}>
                Our Projects
              </Button>
              
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src="../our-story.jpg"
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  
 