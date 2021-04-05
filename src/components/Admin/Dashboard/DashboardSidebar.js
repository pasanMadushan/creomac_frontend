import {
    Box,
    Grid,
    GridItem, 
    Heading,
    Text,
    Divider,
    Link,
    Button,
    useColorMode,
    ReactRouterLink
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
                <Link as={ReactRouterLink} href='/dashboard'> <Button leftIcon={<FaRegNewspaper />}  colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}>Projects </Button> </Link>     
          
                <Link as={ReactRouterLink} href='/postproject'> <Button  leftIcon={<FaRegEdit />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Post a Project  </Button> </Link>     
         
                <Link as={ReactRouterLink} href='/category'>  <Button leftIcon={<FaBuffer />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Categories  </Button></Link>     
            
                <Link as={ReactRouterLink} href='/manageusers'><Button leftIcon={<FaRegUser />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Manage Users </Button></Link>     
         
                <Link as={ReactRouterLink} href='/editprofile'><Button leftIcon={<FaRegSun />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}>Edit Profile </Button></Link>   

                <Link as={ReactRouterLink} href='/newsteller'><Button leftIcon={<EmailIcon />} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Subscribers </Button></Link>   
           
        </Box>
    )
}

export default DashboardSidebar;
