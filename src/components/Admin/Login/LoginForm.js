import React from 'react'

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
  FormHelperText,
  FormErrorMessage
} from '@chakra-ui/react';

import { Formik , Form , Field } from "formik";
import * as Yup from 'yup';



const LoginForm = () => {

     const LoginSchema = Yup.object().shape({

        email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is Required'),
        
        password: Yup.string()
            .required('Password is Required'),
        
 });

    return (
        <Box pb={18}>
        <Stack spacing={4}>


            <Formik
                initialValues={{ 
                    email: "" ,
                    password:"",
                    }}

                validationSchema={LoginSchema}

                onSubmit={(values, actions) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                    }, 1000)
                }}
            >
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Enter your email address" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="password" >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input {...field} type='password' id="password" placeholder="Enter your password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, cyan.800,cyan.500)"
              color={'white'}
              isLoading={props.isSubmitting}
              type="submit"
              _hover={{
                bgGradient: 'linear(to-r, cyan.500,cyan.800)',
                boxShadow: 'xl',
              }}>
              Login
            </Button>
            
        </Form>
      )}
    </Formik>

            </Stack>
           
            <Text pt='2' textAlign='center'>
            Don't have an account?   <Link color='cyan.500' href="/signup"> Sign up here </Link>
            </Text>
            
            </Box>
    )
}

export default LoginForm
