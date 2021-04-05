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


const Password = () => {

    const PersonalInfoSchema = Yup.object().shape({

        firstName: Yup.string()
            .max(45, 'Too Long!')
            .required('First Name is Required'),
        
        lastName: Yup.string()
            .max(45, 'Too Long!')
            .required('Last Name is Required'),
        
        email: Yup.string().email('Invalid email address').required('Email Address is Required'),

        password: Yup.string()
            .min(6, 'Too short. Password should be between 6 -15 characters')
            .max(15,'Too long. Password should be between 6 -15 characters')
            .required('Password is Required'),
        
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'),null],'Password mismatch')
            .required('Confirm password is required')

 });


    return (
        <Box>
        <Stack spacing={4}>

            <Formik
                initialValues={{ 
                    firstName: "" ,
                    lastName:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                    }}

                validationSchema={PersonalInfoSchema}

                onSubmit={(values, actions) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                    }, 1000)
                }}
            >
      {(props) => (
        <Form>
       
        <Field name="password" >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel htmlFor="password">Current Password</FormLabel>
                <Input {...field} id="password" type="password" placeholder="Password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="confirmPassword" >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                <FormLabel htmlFor="confirmPassword">New Password</FormLabel>
                <Input {...field} id="confirmPassword" type="password" placeholder="Re-enter Password" />
                <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="confirmPassword" >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                <FormLabel htmlFor="confirmPassword">Confirm New Password</FormLabel>
                <Input {...field} id="confirmPassword" type="password" placeholder="Re-enter Password" />
                <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
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
              Update Password
            </Button>
            
        </Form>
      )}
    </Formik>
              
            </Stack>
        

            </Box>
    )
}

export default Password
