import React from 'react'
import {Tr, Td} from "@chakra-ui/react"
import Image from 'next/image'

import Edit_Modal from './EditModal.jsx'
const ProductRow = ({title, price, img, L11_42}) => {
  console.log(title)
  return (
    <Tr>
      <Td>{title}</Td>
      <Td>
        <img src={img} style={{width:"20%"}}  alt="product image" />
      </Td>
      <Td>{price}</Td>
      <Td>
     
      </Td>
      <Td>
      
        <Edit_Modal />
      </Td>
      <Td>{L11_42}</Td>
    </Tr>
  )
}

export default ProductRow
