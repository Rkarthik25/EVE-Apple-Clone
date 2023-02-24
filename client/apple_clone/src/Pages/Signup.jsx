import React from 'react'
import {Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Link, Select, Text} from "@chakra-ui/react";

export const Signup = () => {





  return (
    <Box position={'absolute'} ml={"35%"} mr={"35%"} w="30%" mt={5}  > 
       <Box m={3}>
       <Heading>Create Your Apple ID</Heading>
           <Text>One Apple ID is all you need to access all Apple services.
Already have an Apple ID? <span><Link color={"blue"} >Find it here</Link></span></Text>
   
    </Box>
    <FormControl onSubmit={""} >
  {/* <FormLabel>Email address</FormLabel> */}
  <Flex gap="8px" mb="6px" >
  <Input type='text' placeholder="First name" />
  <Input type='text' placeholder="Last name" />
  </Flex>
  {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
  <FormLabel>COUNTRY / REGION</FormLabel>
  <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  <Box mt={3}>
    <Input type ="date" placeholder="Birthday" name='Birthday' ></Input>
  </Box>

<hr style={{margin: "20px 0px 20px 0px", width:"100%" }} />

    {/* <Box> */}
    <Input type="text" placeholder='name@example.com' ></Input>
  <FormHelperText >This will be your new Apple ID.</FormHelperText>
  <Input mt={3} type="password" placeholder='Password' ></Input>
  <Input mt={3} type="password" placeholder='Confirm password' ></Input>
    {/* </Box> */}
    <hr style={{margin: "20px 0px 20px 0px", width:"100%" }} />
   <Input type={"number"} placeholder="Phone number"></Input>
   <Box mt="20px">
    <Button backgroundColor={"#42a1ec"} color="white" border={"1px solid black"} type="Submit" >Continue</Button>
   </Box>
</FormControl>
    

           </Box>
  )
}
