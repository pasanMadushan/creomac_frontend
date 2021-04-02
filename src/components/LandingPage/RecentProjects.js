import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorMode,
  Center,
  Image,
  Avatar,
  LinkOverlay,
  LinkBox,
  
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

 import { ArrowForwardIcon } from '@chakra-ui/icons'


const BlogCard = ()=>{
    return(
        <Center py={6}>
        <LinkBox>
        <LinkOverlay href="#">
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'220px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 </Text>
          </Stack>
        </Stack>
      </Box>
      </LinkOverlay>
      </LinkBox>
    </Center>
    )
}



export default function ThreeTierPricing() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box py={12} px={20} bg={colorMode === "light" ? "cyan.50" : "cyan.800"}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" color={colorMode === "light" ? "cyan.800" : "cyan.50"}>
          Our Recent Projects
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>

        <BlogCard />
        <BlogCard />
        <BlogCard />
     
      </Stack>

      <VStack spacing={2} textAlign="center">
        <Button rightIcon={<ArrowForwardIcon />} bg={colorMode === "light" ? "cyan.50" : "cyan.800"} color={colorMode === "light" ? "cyan.800" : "cyan.50"} borderColor={colorMode === "light" ? "cyan.800" : "cyan.50"}  variant="outline" >
            View More
        </Button> 
      </VStack>

    </Box>
  );
}