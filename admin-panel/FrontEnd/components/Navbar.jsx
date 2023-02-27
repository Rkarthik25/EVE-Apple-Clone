import React from 'react';
import { Box,Text } from '@chakra-ui/react';
import Image from 'next/image';
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import logo from "../assets/logo.jpg"
const Navbar = () => {

  const {name,setName}= useContext(AuthContext)
    if (typeof window !== 'undefined') {
        // Perform localStorage action
         setName(localStorage.getItem("userName")) 
      }
      const router=useRouter()
   
  return (
    <Box display={"flex"} justifyContent={"space-between"}> 
<Box cursor={"pointer"} onClick={()=>router.push("/")}>
 <Image  src={logo} alt="..." width={150} height={150}/>
</Box>
<Box display={"flex"} justifyContent={"space-between"} w="10%">
<Box>

  {
    name ? <Text as="b" fontSize={"20px"} color="green.300">Hi,{name}</Text>
    : <Text as="b" fontSize={"20px"} color="red.300">Please Login </Text>
  }
</Box>

</Box>
    </Box>
  )
}

export default Navbar