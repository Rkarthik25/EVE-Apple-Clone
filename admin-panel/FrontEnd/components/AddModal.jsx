import {
    useDisclosure,
    Modal,
   Input,
   Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Image,
  useToast,
    ModalCloseButton,
    Box,Button,FormControl,FormLabel, AspectRatio
  } from '@chakra-ui/react';
  import {BiEdit} from "react-icons/bi"
  import axios from 'axios';
  import {MdAdd} from "react-icons/md"
  import React from 'react';
  
  function Add_Modal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [ProductDescription,setDescription]= React.useState([])
  const [formValues, setFormValues] = React.useState({
    img1: '',
    title:"",
    PriceToAccess:"",
    Stock: '',
    Category:""
  });
const toast= useToast()
  const handleInputChange = (event) => {
    const { name,value } = event.target;
     setFormValues({ ...formValues, [name]: value });

  };
  const handleAddProduct=()=>{
    const payload={...formValues,ProductDescription:[ProductDescription] }
   console.log(payload)
       axios.post("https://friendly-fawn-pocketbook.cyclic.app/product/create",payload).then(res=>{
        toast({
            title: "Product has been added",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
       }).catch(err=>{
        toast({
            title: "Product can not be added",
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
       })
  }

    return (
      <>
          
          <Box display={"flex"} as="b" cursor={"pointer"} onClick={onOpen}>
<MdAdd style={{marginTop:"4px"}} />
    Add a new Product
</Box>
        <Modal  size={"2xl"} 
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent  border={"2px solid white"}>
          <div style={{border:"3px solid white"}}>
            <ModalHeader fontSize={"30px"} fontWeight="700" textAlign={"center"}>Enter the fields of the product</ModalHeader></div>
            <ModalCloseButton />
            <ModalBody display={"grid"} >
      
       <Input placeholder='Image link' name="img1" value={formValues.img1} onChange={handleInputChange}/>
       <Input  placeholder='Title' name="title" value={formValues.title} onChange={handleInputChange} />
        <Input  placeholder="Price" name="PriceToAccess" value={formValues.PriceToAccess} onChange={handleInputChange} />
        <Input placeholder='Description'  onChange={(e)=>{
        
           setDescription(e.target.value)
           
        }}/>
        <Input  placeholder='Category' name="Category" value={formValues.Category} onChange={handleInputChange}/>
        <Input  placeholder='Stock' name="Stock" value={formValues.Stock} onChange={handleInputChange}/>
        <Button bg='teal.200' onClick={()=>handleAddProduct()}>Submit</Button>
  </ModalBody>
          
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Add_Modal;