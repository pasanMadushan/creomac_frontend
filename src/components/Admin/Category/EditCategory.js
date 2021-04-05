import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";

const EditCategory = ({cat,editCategory,trigger}) => {
    const [new_name,setNewName] = useState('')
    const onSubmit = (e)=>{
        e.preventDefault()

        editCategory(cat,new_name)
        
    }

    return (
        <form  onSubmit={onSubmit} >
            <FormControl>
                <FormLabel>Category Name</FormLabel>
                <Input required type="text" placeholder='Enter New Category Name' value={new_name} onChange={(e)=>setNewName(e.target.value)} />
            </FormControl>
            
            <Input mt='5' mb='5'  type="submit" value='Save Name' className='btn btn-block' bg="cyan.800" color='white' onClick={trigger} />
            
        </form>
    )
}

export default EditCategory
