
import axios from 'axios';
import React from 'react';
import { Box,Input ,Button,useToast} from '@chakra-ui/react';


function Edit_Modal({data,closeModal}) {
const toast= useToast()
  

const [form,setForm]= React.useState({
img1:data.img1,
title:data.title,
PriceToAccess:data.PriceToAccess,
ProductDescription:data.ProductDescription,
Stock:data.Stock

})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}
console.log(form)
const handleUpdate=async()=>{
await axios.patch(`http://localhost:4500/product/update/${data._id}`,form).then(res=>{
  toast({
    title: "Product has been updated",
    status: 'success',
    duration: 4000,
    isClosable: true,
  })
}).catch(err=>{
  toast({
    title: "Product can not updated",
    status: 'error',
    duration: 4000,
    isClosable: true,
  })
})
}


  return (
    <>
        
 
      <Box  width={"100%"} position={"fixed"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} bg="blackAlpha.400" top="0" left="0" onClick={closeModal}> 
    
    <Box  w="40%" bg="teal.100" p="10" onClick={(e)=>e.stopPropagation()}>
     <Input placeholder='new image link' name="img1" value={form.img1} onChange={handleChange} />
     <Input  placeholder='new Title'  name="title" value={form.title} onChange={handleChange}/>
      <Input  placeholder="new price" name="PriceToAccess" value={form.PriceToAccess} onChange={handleChange} />
      <Input  placeholder='new Description' name="ProductDescription" value={form.ProductDescription} onChange={handleChange}/>
      <Input  placeholder='new Stock' name="Stock" value={form.Stock} onChange={handleChange}/>
      <Button bg='teal.200'  onClick={()=>handleUpdate()}>Submit</Button>
      </Box>
      </Box>
    </>
  )
}
export default Edit_Modal;