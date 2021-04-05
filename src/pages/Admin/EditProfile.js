import React from "react";

import {
    Box,
    Grid,
    GridItem, 
    Avatar,
    Divider,
    Heading,
    SimpleGrid,
    Text,
    useColorMode,
    Flex,
    Button,
    Table,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Thead,
    useDisclosure,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useColorModeValue,
    Stack,
    Link,
    Input
  } from "@chakra-ui/react";

import Axios from 'axios';

import  { useState, useEffect } from "react";

import { AddIcon } from "@chakra-ui/icons";

import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar';
import AdminHeader from '../../components/Admin/Dashboard/AdminHeader';
import MiniHeader from '../../components/Admin/Dashboard/MiniHeader';

import Users from '../../components/Admin/ManageUsers/Users.js';
import PersonalInfo from '../../components/Admin/EditProfile/PersonalInfo.js';
import Password from '../../components/Admin/EditProfile/Password.js';
import ProfilePicture from '../../components/Admin/EditProfile/ProfilePicture.js';
import Tagline from '../../components/Admin/EditProfile/Tagline.js';



const EditProfile = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const [userDetails,setUserDetails] = useState([])
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()


  useEffect(() => {
        Axios.get("http://localhost:5002/user/getusers")
        .then((Response)=>{
            console.log("users",Response.data);
            // setUsers(Response.data.user);
            
        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Error loading data",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
          }); 
    }, [])



    // //delete cateogry
    // const deleteCategory  = (cat_id)=>{
        
    //     Axios.post("http://localhost:5002/post/deletecategory",{cat_id:cat_id})
    //     .then((Response)=>{
    //         // console.log(Response);
    //         setCategory(category.filter(
    //             (cat)=>cat.cat_id!==cat_id
    //         ))
    //         toast({
    //             position: "bottom-right",    
    //             description: "Category deleted successfully",
    //             status: "error",
    //             duration: 5000,
    //             isClosable: true,
    //           })
    //     })
    //     .catch((err) => {
    //         toast({
    //             position: "bottom-right",    
    //             description: "Internal Server Error. Try again later",
    //             status: "error",
    //             duration: 5000,
    //             isClosable: true,
    //           })
    //       }); 
    // }


  return (
    <Box
      pt="100px"
      // pl={{ base: "10px", sm: "100px" }}
      // pr={{ base: "10px", sm: "100px" }}
    >
       <AdminHeader />
      <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)">
        <GridItem colSpan={1} rowSpan={2}>
          <DashboardSidebar />
        </GridItem>

       <GridItem colSpan={4} >
                    <Box 
                        width="auto"
                        h="auto"                   
                        overflow="hidden"                    
                        pb="5px"                      
                        >
                        
                      </Box>

                        <Grid 
                            templateColumns="repeat(3, 1fr)"
                        >

                            <GridItem  colSpan="3">
                                <MiniHeader title="Edit Profile"/>
                            </GridItem>

                            <GridItem p='3' colSpan="2">
                              {/* change personal information */}
                                <Box
                                    bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
                                    boxShadow={'lg'}
                                    p={8}
                                    mb={4}
                                >
                                <Text color={colorMode === "light" ? "cyan.800" : "cyan.50"}>
                                Change Personal Information
                                </Text>
                                <Divider mb='5'/>
                                <Stack spacing={4}>
                                
                                <PersonalInfo />
                               
                                </Stack>
                                </Box>
                                {/* change password */}
                                <Box
          
                                    bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
                                    boxShadow={'lg'}
                                    p={8}>

                                    <Text color={colorMode === "light" ? "cyan.800" : "cyan.50"}>
                                    Change Password
                                    </Text>
                                <Divider mb='5'/>
                                    <Stack spacing={4}>
           
                                   <Password />
                                    </Stack>
                                </Box>
      
                          
                            </GridItem>

                            <GridItem p="5">
                          
                            {/* change profile picture */}
                                <Box
          
                                    bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
                                    boxShadow={'lg'}
                                    p={8}
                                    mb={4}
                                    >

                                    <Stack spacing={4}>
                                    
                                    <ProfilePicture />
                                   
                                    </Stack>
                                </Box>

                                {/* update tagline */}

                                 <Box
          
                                    bg={colorMode === "light" ? "cyan.50" : "cyan.800"}
                                    boxShadow={'lg'}
                                    p={8}
                                    >
                                         <Text color={colorMode === "light" ? "cyan.800" : "cyan.50"}>
                                            Change Tagline
                                        </Text>
                                        <Divider mb='5'/>
                                    <Stack spacing={4}>
                                    
                                    <Tagline />
                                   
                                    </Stack>
                                </Box>



                            </GridItem>
                       
                             
                        </Grid>
                        

                </GridItem>

      </Grid>
    </Box>
  )
}

export default EditProfile
