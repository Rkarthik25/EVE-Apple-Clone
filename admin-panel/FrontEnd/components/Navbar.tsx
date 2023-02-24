import React from 'react';
import { Box,Text } from '@chakra-ui/react';
import Image from 'next/image';
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import logo from "../assets/logo.jpg"
const Navbar = () => {

  const {name,setName}= useContext(AuthContext)
    if (typeof window !== 'undefined') {
        // Perform localStorage action
         setName(localStorage.getItem("userName")) 
      }
   
  return (
    <Box display={"flex"} justifyContent={"space-between"}> 
<Box>
<Image src={logo} alt="..." borderRadius="100" width={150} height={150}/>
</Box>
<Box display={"flex"} justifyContent={"space-between"} w="10%">
<Box><Text as="b" fontSize={"20px"} color="green.300">Hi, {name}</Text></Box>

</Box>
    </Box>
  )
}

export default Navbar