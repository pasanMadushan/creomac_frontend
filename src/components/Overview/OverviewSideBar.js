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



const OverviewSideBar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const sidebarButton = {
        width:'80%',   
        marginTop:'7px',
        marginBottom:'7px',
        marginLeft:'10%',
        marginRight:'10%',
        border:"2px solid",
        borderRadius:'5'
    }

    return (
        <Box
            width="auto"
            height={window.innerHeight-100}
            // height="100%"
            overflow="hidden"
            bg={colorMode === "light" ? "cyan.50" : "cyan.900"}
            pt='5'  
           
                    
        >                   
                <Link > <Button   size="md" style={sidebarButton}>Overview  </Button> </Link>     
          
               
           
        </Box>
    )
}

export default OverviewSideBar
