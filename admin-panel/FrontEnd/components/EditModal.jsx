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

  ModalCloseButton,
  Box,Button,FormControl,FormLabel, AspectRatio
} from '@chakra-ui/react';
import {BiEdit} from "react-icons/bi"


import React from 'react';

function Edit_Modal() {

  const { isOpen, onOpen, onClose } = useDisclosure();


  
  

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  return (
    <>
        
   <BiEdit onClick={onOpen}/>
      <Modal  size={"2xl"} 
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent  border={"2px solid white"}>
        <div style={{border:"3px solid white"}}>
          <ModalHeader fontSize={"30px"} fontWeight="700" textAlign={"center"}>Enter the fields you want to edit</ModalHeader></div>
          <ModalCloseButton />
          <ModalBody display={"grid"} >
    
     <Input placeholder='new image link' />
     <Input  placeholder='new Title' />
      <Input  placeholder="new price" />
      <Input  placeholder='new Description' />
      <Input  placeholder='new Stock'/>
      <Button bg='teal.200' >Submit</Button>
</ModalBody>
        
        </ModalContent>
      </Modal>
    </>
  )
}
export default Edit_Modal;