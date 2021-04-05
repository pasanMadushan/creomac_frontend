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

import CatItems from '../../components/Admin/Category/CatItems';

import AddNewCategory from '../../components/Admin/Category/AddNewCategory';

const Dashboard = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const [category,setCategory] = useState([])
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()


  useEffect(() => {
        Axios.get("http://localhost:5002/post/allcategories")
        .then((Response)=>{
            // console.log("cat",Response.data.cat);
            setCategory(Response.data.cat);
            
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


    //delete cateogry
    const deleteCategory  = (cat_id)=>{
        console.log('delete id', cat_id)
        Axios.post("http://localhost:5002/post/deletecategory",{cat_id:cat_id})
        .then((Response)=>{
            // console.log(Response);
            setCategory(category.filter(
                (cat)=>cat.cat_id!==cat_id
            ))
            toast({
                position: "bottom-right",    
                description: "Category deleted successfully",
                status: "error",
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


  //add new category
    const addNewCategory = (cat_name)=>{

        Axios.post("http://localhost:5002/post/addnewcategory",{cat_name:cat_name})
        .then((Response)=>{
            
            if (Response.data.success===true && Response.data.exist===false){
              //  console.log("insert id", Response.data.insertId)
                var cat_id = Response.data.insertId;
                var newCat = {cat_id,cat_name}
                // console.log('added id',newCat)
                setCategory([...category,newCat]);
           
                toast({
                    position: "bottom-right",    
                    description: "New category added successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
            }
            else if (Response.data.success===true && Response.data.exist===true){

                toast({
                    position: "bottom-right",    
                    description: "Category Already Exists",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })

            }
            
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


//     const editCategory = ({cat,new_name})=>{
//         Axios.post("http://localhost:5002/post/editcategory",{cat_id:cat.cat_id,new_name:new_name})
//         .then((Response)=>{
//             // console.log(Response);
//             setCategory(category.map(
//                 (cata)=>cata.cat_id===cat.cat_id?{...cata, cat_name:new_name}:cata
//             ))


// // setTasks(tasks.map(
// //         //     (task)=>task.id===id?{...task,reminder:data.reminder}:task
// //         //   ))
// //             var cat_id = Response.data.insertId;
// //                 var newCat = {cat_id,cat_name}
// //                 setCategory([...category,newCat]);


//             toast({
//                 position: "bottom-right",    
//                 description: "Category Edited successfully",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//               })
//         })
//         .catch((err) => {
//             toast({
//                 position: "bottom-right",    
//                 description: "Internal Server Error. Try again later",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//               })
//           }); 

//     }


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
                                <MiniHeader title="Categories"/>
                            </GridItem>

                            <GridItem p='5'>
                              <Grid templateColumns="repeat(5, 1fr)">
                                <GridItem colSpan={5}>
                                    <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
                                        Add Category
                                    </Button>

                                      <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                            <ModalOverlay />
                                                <ModalContent>
                                                    <ModalHeader>Add New Category</ModalHeader>
                                                    <ModalCloseButton />
                                                    <ModalBody pb='5'>
                                                    <AddNewCategory  addNewCategory={addNewCategory} trigger={onClose}/>
                                                     </ModalBody>
                                            </ModalContent>
                                      </Modal>


                                </GridItem>
                                <GridItem colSpan={5} py='7'>
                                    <Table variant="simple" border='1px solid teal' >
                                                                      
                                        <Tbody>
                                            <CatItems cat={category}  deleteCategory = {deleteCategory}/>
                                           
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
