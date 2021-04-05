import {React, useState} from 'react'
import {
    Td,
    Tr,
    Button,
    useDisclosure,
    useColorMode,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody
  } from "@chakra-ui/react";

import { ImUser,ImPhone, ImLocation } from "react-icons/im";

import EditCategory from './EditCategory';

const CatItem = ({cat,deleteCategory,editCategory}) => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <Tr>
            <Td ml='5' textAlign="left">{cat.cat_name}</Td>
            <Td textAlign="right"> 
                <Button colorScheme="teal" onClick={onOpen}  size="xs" mr='3'>
                    Edit
                </Button> 
               
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit Category</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb='5'>
                        <EditCategory cat_id={cat.cat_id} editCategory={editCategory}  trigger={onClose} />
                    </ModalBody>
                </ModalContent>
                </Modal>
                
                 <Popover>
                        <PopoverTrigger>
                         <Button colorScheme="red" size="xs" mr='3'>
                            Delete
                            </Button> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader textAlign='left' fontWeight="semibold">Delete Category</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody textAlign='left'>
                            Are you sure you want to delete this category?
                            </PopoverBody>
                            <PopoverFooter  d="flex" justifyContent="flex-start" >
                                <ButtonGroup size="sm" >
                                    <Button colorScheme="red" onClick={()=>{deleteCategory(cat.cat_id)}}>Delete</Button>
                                </ButtonGroup>
                            </PopoverFooter>
                        </PopoverContent>
                </Popover>                   
            </Td>
                                               
        </Tr>
    )
}

export default CatItem



    