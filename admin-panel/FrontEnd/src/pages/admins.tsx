import React from 'react'
import axios from 'axios'
import SingleRow from "../../components/SingleRow"
import Sidebar from 'components/Sidebar'
import SignIn from 'components/SignIn'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Box,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { AuthContext } from 'context/authContext';
  import { useContext } from 'react';
const Admins = () => {
    const [admins,setAdmins]= React.useState<obj[]>([]);
    const {name}= useContext(AuthContext)
    const getAdmins=async ()=>{
      let admins=await  axios.get("http://localhost:4500/admin")
     setAdmins(admins.data)

    }
    console.log(admins)
    React.useEffect(()=>{
getAdmins()
    },[])
  return (
    <Box display={"flex"}>
<Sidebar />
{
!name?.length? <SignIn/>:
  <Box>
<Table>
    <Thead>
        <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Mobile </Th>
            <Th>GST no</Th>
            <Th>Status</Th>
        </Tr>
    </Thead>
    <Tbody>
        {
             admins.map((el)=><SingleRow Name={el.firstName} email={el.email}  mobile={el.mobile} GST_no={el.GST_no} status={el.status}/>)
        }
    </Tbody>
</Table>
</Box>
}
</Box>
  )
}

export default Admins