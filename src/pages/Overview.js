import React from 'react'
import {
  Flex,
  Box,
  Button,
  useColorMode,
  IconButton,
  ReactRouterLink,
  Img,
  Grid,
  GridItem,
  Heading,
  Container,
  Stack,
  Text,

} from "@chakra-ui/react";

import OverviewSideBar from "../components/Overview/OverviewSideBar.js";

const Overview = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Grid>
        <Container bg="cyan">
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          lineHeight={'110%'}>
          Introduction to {' '}
          <Text as={'span'} color={'cyan'}>
            ARDUINO
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}>
          
        </Flex>
      </Stack>
    </Container>

    <Container>sdsds
    </Container>

    </Grid>
    )
}

export default Overview



