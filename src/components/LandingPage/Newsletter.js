import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  useColorMode
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Newsletter() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [email, setEmail] = useState('');
  const [state, setState] = useState(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      minH={'30vh'}
      align={'center'}
      justify={'center'}
      bg={colorMode === "light" ? "cyan.800" : "cyan.800"}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('white', 'white')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
          color={colorMode === "light" ? "cyan.800" : "cyan.800"}
          >
          Subscribe to our Newsletter
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={colorMode === "light" ? "cyan.800" : "cyan.800"}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'cyan'}
              bg={"cyan.800"}
              color={"cyan.50"}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}>
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "Subscribe to our newsletter & stay up to date! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}
