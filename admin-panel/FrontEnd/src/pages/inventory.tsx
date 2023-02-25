import React from 'react'
import axios from 'axios'

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
const inventory = () => {
    const [products,setProducts]= React.useState([])
    const getProducts=async()=>{
let data= await axios.get("https://troubled-organized-denim.glitch.me/toys")
setProducts(data.data)
    }
console.log(products)
    React.useEffect(()=>{
getProducts()
    },[])
  return (
    <div>
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
            products?.map(el=><ProductRow {...el}/>)
        }
    </Tbody>
</Table>

    </div>
  )
}

export default inventory