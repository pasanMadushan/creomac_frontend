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
  } from "@chakra-ui/react";

import Axios from 'axios';

import  { useState, useEffect } from "react";

import { AddIcon } from "@chakra-ui/icons";

import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar';
import AdminHeader from '../../components/Admin/Dashboard/AdminHeader';
import MiniHeader from '../../components/Admin/Dashboard/MiniHeader';

import Users from '../../components/Admin/ManageUsers/Users.js'


const Dashboard = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const [users,setUsers] = useState([])
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()


  useEffect(() => {
        Axios.get("http://localhost:5002/user/getusers")
        .then((Response)=>{
            console.log("users",Response.data);
            setUsers(Response.data.user);
            
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


    const manageUser = (user_id, new_state) =>{
        console.log("function triggered with user id state : ",user_id,new_state)
        Axios.post("http://localhost:5002/user/updateuserstate",{state:new_state, user_id:user_id})
        .then((Response)=>{
            // console.log(Response);
            setUsers(users.map(
                (user)=> user.user_id===user_id ? {...user, state:new_state}:user
            ))
            toast({
                position: "bottom-right",    
                description: "User action successful",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Internal Server Error. Try again later",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
          }); 
    }


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

                        <Grid>

                            <GridItem  >
                                <MiniHeader title="Manage Users"/>
                            </GridItem>

                            <GridItem p='5'>
                              <Grid templateColumns="repeat(5, 1fr)">
                        
                                <GridItem colSpan={5} py='7'>
                                    <Table p='5'  variant="simple" border='1px solid teal' >
                                        <Thead >
                                            <Tr>
                                                <Th></Th>
                                                <Th >Email</Th>
                                                <Th >User Name</Th>
                                                <Th >Status</Th>
                                                <Th textAlign='center'>Action</Th>
                                            </Tr>
                                        </Thead>                              
                                        <Tbody>
                                            <Users users={users} manageUser={manageUser}/>
                                           
                                        </Tbody>
                                    </Table>                                    
                                </GridItem>
                                
                              </Grid>
                            </GridItem>
                       
                             
                        </Grid>
                        

                </GridItem>

      </Grid>
    </Box>
  )
}

export default Dashboard
