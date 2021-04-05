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
    Link
    
  } from "@chakra-ui/react";

import Axios from 'axios';

import  { useState, useEffect } from "react";

import { EmailIcon } from "@chakra-ui/icons";

import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar';
import AdminHeader from '../../components/Admin/Dashboard/AdminHeader';
import MiniHeader from '../../components/Admin/Dashboard/MiniHeader';




const Subscriber = ({newstel}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <Tr>
            <Td ml='5' textAlign="left">{newstel.email}</Td> 
            <Td my='10'  textAlign="right"> <Link href={"mailto:" + newstel.email}> <EmailIcon /></Link> </Td>                                    
        </Tr>
    )
}



const Subscribers = ({newsteller}) => {
    return (
        <>
        {
            newsteller.map((newstel)=>(
                <Subscriber key={newstel.email} newstel={newstel}  />
            ))
        }
        </>
    )
}


const Newsteller = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const [newsteller,setNewsteller] = useState([])
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()


  useEffect(() => {
        Axios.get("http://localhost:5002/newsteller/getnewstellersubs")
        .then((Response)=>{
            console.log(Response.data)
            setNewsteller(Response.data.subs);
            
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
                                <MiniHeader title="Newsteller Subscribers"/>
                            </GridItem>

                            <GridItem p='5'>
                              <Grid templateColumns="repeat(5, 1fr)">
                                
                                <GridItem colSpan={5} py='7'>
                                    <Table variant="striped" colorScheme='cyan' border='1px solid teal' >
                                                                      
                                        <Tbody>
                                            <Subscribers newsteller={newsteller} />
                                           
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

export default Newsteller 
