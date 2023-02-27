import React from 'react'
import {Tr, Td, Button,useDisclosure} from "@chakra-ui/react"
import Image from 'next/image'
import {BiEdit} from "react-icons/bi"
import Edit_Modal from './EditModal.jsx'

const ProductRow = (props) => {
  const [data,setData]= React.useState({})
  const [modal,setModal]= React.useState(false)
 const {el}= props
  const handleEdit=(el)=>{
setData(el)
setModal(true)
  }

  const closeModal=()=>{
    setModal(false)
  }
  return (
    <>
    <Tr>
      <Td>{el.title}</Td>
      <Td>
        <Image src={el.img1} width={"50"} height={"50"} alt="product image" />
      </Td>
      <Td>
        {el.Category}
      </Td>
      <Td>₹{el.PriceToAccess}</Td>
    
      <Td>
     {el.Stock}
      </Td>
      <Td>
      
       
        <BiEdit onClick={()=>handleEdit(el)}/>

      </Td>
      {
        el.ProductDescription&&
  <Td>{`${el?.ProductDescription[0]},${el?.ProductDescription[1]}, ${el?.ProductDescription[2]}`}</Td>
}

    </Tr>
    { modal&&<Edit_Modal data={data} closeModal={closeModal} /> 
  }
</>
  )
}

export default ProductRow
