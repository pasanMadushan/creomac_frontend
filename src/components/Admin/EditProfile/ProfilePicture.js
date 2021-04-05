import React from 'react'

import {
  Box,
  Stack,
  Avatar,
  Button
} from '@chakra-ui/react';


const ProfilePicture = () => {

    return (
        <Box >
        <Stack spacing={4}alignItems="center">

            <Avatar size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            
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
                Update Profile Picture
            </Button>

        </Stack>
        </Box>
    )
}

export default ProfilePicture
