import React from 'react'
import { Box, Button} from '@chakra-ui/react'
import {AiTwotoneHome} from "react-icons/ai"
import {FiUsers} from "react-icons/fi"
import {SlHandbag} from "react-icons/sl"
import {MdInventory} from "react-icons/md"
import {MdAdminPanelSettings} from "react-icons/md"
import Link from 'next/link'
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import axios from 'axios'
const Sidebar = () => {
  const [showLogout, setLogout]= React.useState(false)
  const {name,setName}= useContext(AuthContext)

  const handleLogout=async()=>{
    let id= localStorage.getItem("id")

    let res= await axios.patch(`http://localhost:4500/admin/update/${id}`,{
      status:false
    })
    console.log(res)
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    setName(localStorage.getItem("userName"))
  }
  return (
    <Box display={"grid"} w="20%" justifyContent={"left"}>
    <Box display={"flex"} bg="grey" _hover={{ bg: "blue.200" }}> <AiTwotoneHome style={{marginTop:"10px"}}/><Button bg="none" _hover="none"> Home</Button></Box>
    <Box display={"flex"} bg="grey" _hover={{ bg: "blue.200" }}> <FiUsers style={{marginTop:"10px"}}/><Button bg="none" _hover="none"> Users</Button></Box>
    <Box display={"flex"} bg="grey" _hover={{ bg: "blue.200" }}> <MdAdminPanelSettings style={{marginTop:"10px"}}/><Link href="/admins"><Button bg="none" _hover="none"> Admins</Button></Link></Box>
     <Box display={"flex"} bg="grey" _hover={{ bg: "blue.200" }}> <SlHandbag style={{marginTop:"10px"}}/><Button bg="none" _hover="none"> Orders</Button></Box> 
     <Box display={"flex"} bg="grey"   _hover={{ bg: "blue.200" }}> <MdInventory style={{marginTop:"10px"}}/><Link href="/inventory"><Button bg="none" _hover="none">Inventory</Button></Link></Box>
     <Box display={"flex"} bg="grey"   _hover={{ bg: "blue.200" }}> <MdInventory style={{marginTop:"10px"}}/><Button onClick={()=>setLogout(!showLogout)} bg="none" _hover="none">Profile</Button>
     
     </Box>
     {
     showLogout ? <Button onClick={()=>handleLogout()}>Logout</Button> :""
     }
     </Box>
  )
}

export default Sidebar