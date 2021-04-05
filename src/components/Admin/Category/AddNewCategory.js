import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";

const AddNewCategory = ({addNewCategory,trigger}) => {
    const [cat_name,setCatName] = useState('')
    const onSubmit = (e)=>{
        e.preventDefault()

        addNewCategory(cat_name)
        setCatName('')  
    }

    return (
        <form  onSubmit={onSubmit} >
            <FormControl>
                <FormLabel>Category Name</FormLabel>
                <Input required type="text" placeholder='Enter Category Name' value={cat_name} onChange={(e)=>setCatName(e.target.value)} />
            </FormControl>
            
            <Input mt='5' mb='5'  type="submit" value='Save Category' className='btn btn-block' bg="cyan.800" color='white' onClick={trigger} />
            
        </form>
    )
}

export default AddNewCategory
