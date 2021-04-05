import React from 'react'

import {
  Box,
  Stack,
  Avatar,
  Button,
  Textarea
} from '@chakra-ui/react';


const Tagline = () => {

    return (
        <Box >
        <Stack spacing={4}alignItems="center">

            <Textarea placeholder="" />
            
            <Button fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, cyan.800,cyan.500)"
              color={'white'}
            //   isLoading={props.isSubmitting}
              type="submit"
              _hover={{
                bgGradient: 'linear(to-r, cyan.500,cyan.800)',
                boxShadow: 'xl',
              }}>
                Update Tagline
            </Button>

        </Stack>
        </Box>
    )
}

export default Tagline
