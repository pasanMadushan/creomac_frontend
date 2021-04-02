import {
    Box,
    Grid,
    GridItem, 
    Heading,
    Text,
    Divider,
    Link,
    Button,
    useColorMode
  } from "@chakra-ui/react";

import { EmailIcon,PlusSquareIcon } from "@chakra-ui/icons";

import { FaRegUser,FaRegSun, FaRegNewspaper , FaRegEdit, FaBuffer} from 'react-icons/fa';

const DashboardSidebar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const sidebarButton = {
        width:'80%',   
        marginTop:'7px',
        marginBottom:'7px',
        marginLeft:'10%',
        marginRight:'10%'
    }

    return (
        <Box
            width="auto"
            height={window.innerHeight-100}
            overflow="hidden"
            bg={colorMode === "light" ? "cyan.50" : "cyan.900"}
            pt='5'  
           
                    
        >                   
                <Link > <Button leftIcon={<FaRegNewspaper />}  colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}>Projects </Button> </Link>     
          
                <Link > <Button  leftIcon={<FaRegEdit />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Post a Project  </Button> </Link>     
         
                <Link > <Button leftIcon={<FaBuffer />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Cetegories  </Button></Link>     
            
                <Link ><Button leftIcon={<FaRegUser />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Manage Users </Button></Link>     
         
                <Link ><Button leftIcon={<FaRegSun />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}>Edit Profile </Button></Link>   

                <Link ><Button leftIcon={<EmailIcon />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}>Newsteller Subscribers </Button></Link>   
           
        </Box>
    )
}

export default DashboardSidebar;
