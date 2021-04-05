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


const PersonalInfo = () => {

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
          <Field name="firstName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <Input {...field} id="firstName" placeholder="Firstname" />
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="lastName" >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <Input {...field} id="lastName" placeholder="Lastname" />
                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

         <Field name="email" >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" type="email" placeholder="Email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
              Update Personal Information
            </Button>
            
        </Form>
      )}
    </Formik>
              
            </Stack>
        

            </Box>
    )
}

export default PersonalInfo
