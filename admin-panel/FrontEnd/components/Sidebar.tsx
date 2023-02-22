import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import {AiTwotoneHome} from "react-icons/ai"
import {FiUsers} from "react-icons/fi"
import {SlHandbag} from "react-icons/sl"
import {MdInventory} from "react-icons/md"
const Sidebar = () => {
  return (
    <Box display={"grid"} w="20%" justifyContent={"left"}>
    <Box display={"flex"} bg="grey" _hover={{ bg: "blue.200" }}> <AiTwotoneHome style={{marginTop:"10px"}}/><Button bg="none" _hover="none"> Home</Button></Box>
    <Box display={"flex"} bg="grey" _hover={{ bg: "blue.200" }}> <FiUsers style={{marginTop:"10px"}}/><Button bg="none" _hover="none"> Users</Button></Box>
     <Box display={"flex"} bg="grey" _hover={{ bg: "blue.200" }}> <SlHandbag style={{marginTop:"10px"}}/><Button bg="none" _hover="none"> Orders</Button></Box> 
     <Box display={"flex"} bg="grey"   _hover={{ bg: "blue.200" }}> <MdInventory style={{marginTop:"10px"}}/><Button bg="none" _hover="none">Inventory</Button></Box>
     <Box display={"flex"} bg="grey"   _hover={{ bg: "blue.200" }}> <MdInventory style={{marginTop:"10px"}}/><Button bg="none" _hover="none">Profile</Button></Box>
     </Box>
  )
}

export default Sidebar