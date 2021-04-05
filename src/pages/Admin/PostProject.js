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
    Flex
    
  } from "@chakra-ui/react";
  

import DashboardSidebar from '../../components/Admin/Dashboard/DashboardSidebar';
import AdminHeader from '../../components/Admin/Dashboard/AdminHeader';
import MiniHeader from '../../components/Admin/Dashboard/MiniHeader';

import PostEditor from '../../components/Admin/PostProject/PostEditor';

const PostProject = () => {

  const { colorMode, toggleColorMode } = useColorMode();

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
                                <MiniHeader title="Post A Project"/>
                            </GridItem>

                            <GridItem p='5'  >
                             
                                    <PostEditor />
                              
                               
                            </GridItem>
                       
                             
                        </Grid>
                        

                </GridItem>

      </Grid>
    </Box>
  )
}

export default PostProject
