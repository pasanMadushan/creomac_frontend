import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
  FormHelperText
} from '@chakra-ui/react';

import SignUpForm from "../../components/Admin/SignUp/SignUpForm"

export default function SignUp() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgGradient="linear(to-r,cyan.900,cyan.500,cyan.900)" >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack
          bg={'cyan.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Join our team
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              We’re looking for techy fellows who are intersted in IOT. If you are an IOT enthusiast just join with us. 
            </Text>
          </Stack>
          <Box  mt={10}>
          
          <SignUpForm />
            
          </Box>
          
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
