import React from 'react'
import axios from 'axios';
import { Select,Box, Button } from "@chakra-ui/react";
import Add_Modal from "./AddModal"
const ProductNav = (props) => {
const [order,setOrder]= React.useState(1)
const [Category,setCategory]= React.useState(null)

const FilterByCategory=async(Category)=>{
  
  let data=  await axios.get(`https://friendly-fawn-pocketbook.cyclic.app/product?Category=${Category}`)
props.onData(data.data)
  console.log(data)
}


const SortByPrice=async(order)=>{
    if(Category){
    let data= await axios.get(`https://friendly-fawn-pocketbook.cyclic.app/product?Category=${Category}&PriceToAccess=${+order}`)
    props.onData(data.data)
    }
    else{
        let data= await axios.get(`https://friendly-fawn-pocketbook.cyclic.app/product?PriceToAccess=${+order}`)
        props.onData(data.data)
    }

}

    const  DropdownForCategory=() =>{
        return (
          <Select onChange={(e)=>{
         
            FilterByCategory(e.target.value)
            setCategory(e.target.value)
       
        }} placeholder="Select a Category">
            <option value="Mac">Mac</option>
            <option value="Iphone">iPhone</option>
            <option value="Ipad">iPad</option>
            <option value="Iwatch">iWatch</option>
            <option value="HomePod">HomePod</option>
            <option value="AppleTv">Apple TV</option>
            <option value="AirPods">Air Pods</option>
          </Select>
        );
    }
        const  DropdownForPrice=() =>{
            return (
              <Select onChange={(e)=>SortByPrice(e.target.value)} placeholder="Sort by Price">
                <option value="1">low to high</option>
                <option value="-1">high to low</option>
              </Select>
            );
      }
  return (
  <Box display={"flex"} justifyContent={"space-around"}>
<Box display={"flex"} w="40%">
{DropdownForCategory()}
{DropdownForPrice()}
</Box>

<Add_Modal/>

  </Box>
  )
}

export default ProductNav