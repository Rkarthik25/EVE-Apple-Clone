import React from 'react'
import {Tr,Td,Text} from "@chakra-ui/react"
const SingleRowUsers = ({Name,email,mobile,DOB,cart}) => {
    
  return (
 <>
 <Tr>
    <Td>
        {Name}
    </Td>
    <Td>
        {email}
    </Td>
    <Td>
        {mobile}
    </Td>
    <Td>
        {DOB}
    </Td>
    <Td>
   {cart}
    </Td>
 </Tr>
 </>
  )
}

export default SingleRowUsers