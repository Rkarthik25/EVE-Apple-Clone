import React from 'react'
import axios from 'axios'
import ProductNav from 'components/ProductNav'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import ProductRow from 'components/ProductRow'
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import SignIn from 'components/SignIn'
const Inventory = () => {
    const [products,setProducts]= React.useState([])
    const {name}= useContext(AuthContext)
    const getProducts=async()=>{
let data= await axios.get("https://friendly-fawn-pocketbook.cyclic.app/product")
console.log(data)
setProducts(data.data)
    }
console.log(products)
    React.useEffect(()=>{
getProducts()
    },[])

    const handleData = (products) => {
        setProducts(products);
      };
  return !name?.length?  <SignIn/>: <div>
        <ProductNav onData={handleData} />
<Table  variant='striped' colorScheme='teal'>
    <Thead>
        <Tr>
        <Th>
      Title
        </Th>
        <Th>
            Image
        </Th>
        <Th>
            Category
        </Th>
        <Th> 
       Price
        </Th>
        <Th>
       Stock
        </Th>
        <Th>
            Edit
        </Th>
        <Th>
            Description
        </Th>
        </Tr>
    </Thead>
    <Tbody>
        {
            products?.map(el=><ProductRow el={el} key={el._id}/>)
        }
    </Tbody>
</Table>

    </div>
    
}
  


export default Inventory