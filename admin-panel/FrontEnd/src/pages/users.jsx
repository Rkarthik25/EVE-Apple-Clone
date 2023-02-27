import React from 'react'
import axios from 'axios'
import SingleRowUsers from "../../components/SingleRowUsers"
import SignIn from 'components/SignIn'
import Sidebar from 'components/Sidebar'
import {
    Table,
    Thead,
    Tbody,
   
    Tr,
    Th,
    Box
  
  } from '@chakra-ui/react'
  import { AuthContext } from 'context/authContext';
import { useContext } from 'react';

const Users = () => {
    const [users,setUsers]= React.useState([])
     const {name}= useContext(AuthContext)
    const getUsers=async ()=>{
      let users=await  axios.get("https://friendly-fawn-pocketbook.cyclic.app/users")
     setUsers(users.data)

    }
  
    React.useEffect(()=>{
getUsers()
    },[])
  return (
    <Box display={"flex"}>
<Sidebar />
{!name?.length ? <SignIn/> :
  <Box>
<Table>
    <Thead>
        <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Mobile </Th>
            <Th>DOB</Th>
            <Th>Item in the Cart</Th>
        </Tr>
    </Thead>
    <Tbody>
        {
             users.map((el)=><SingleRowUsers key={el._id} Name={el.Fname} email={el.email}  mobile={el.phone} DOB={el.DOB} cart={el.cart.length}/>)
        }
    </Tbody>
</Table>
</Box>
}
</Box>
  )
}

export default Users