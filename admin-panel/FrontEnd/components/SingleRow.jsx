import React from 'react'
import {Tr,Td,Text} from "@chakra-ui/react"
const SingleRow = ({Name,email,mobile,GST_no,status}) => {
    
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
        {GST_no}
    </Td>
    <Td>
     {status? <Text color={"green.400"}>Online</Text>  : <Text color={"red.300"}>Offline</Text>}   
    </Td>
 </Tr>
 </>
  )
}

export default SingleRow