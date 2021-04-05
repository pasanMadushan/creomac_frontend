import {React, useState} from 'react'
import {
    Td,
    Tr,
    Button,
    useDisclosure,
    useColorMode,
    Switch,
    Badge
  } from "@chakra-ui/react";

import { ImUser,ImPhone, ImLocation } from "react-icons/im";

const User = ({user,manageUser}) => {

    const { colorMode, toggleColorMode } = useColorMode();
   

    return(
        <Tr>
            <Td ml='5' textAlign="left">{user.user_id}</Td>
            <Td ml='5' textAlign="left">{user.email}</Td>
            <Td ml='5' textAlign="left">{user.first_name + " " + user.last_name}</Td>
            <Td ml='5' textAlign="left">{(user.state)?<Badge colorScheme="green">Active</Badge>:<Badge colorScheme="red">Inactive</Badge>}</Td>
            

            <Td textAlign="center"> 
                <Switch colorScheme="teal" defaultChecked={(user.state===1)?true:false } onChange={()=>manageUser(user.user_id , !user.state) } size="lg" /> 
              
            </Td>
                                               
        </Tr>
    )
}

export default User



    