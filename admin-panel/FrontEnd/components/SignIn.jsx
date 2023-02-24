import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    useToast,
    Checkbox,
    Stack,

    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import Link from 'next/link';
  import axios from "axios"
  import React from 'react';
  export default function SignIn() {
    const [email,setEmail]= React.useState("")
    const [password,setPassword]= React.useState("")
    const {setName}= useContext(AuthContext)
    const toast= useToast()

    const handleSubmit=async()=>{
      let result=await axios.post("http://localhost:4500/admin/login",{
        email,password
      })
      console.log(result);
     let id= result?.data?.admin[0]._id
    if(result.data.msg=="login successfull"){
      await axios.patch(`http://localhost:4500/admin/update/${id}`,{
        status:true
      })
      toast({
        title: result.data.msg,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
  
      
      localStorage.setItem("userName",result.data.admin[0].firstName)
      localStorage.setItem("id",id)
      setName(localStorage.getItem("userName"))
     
     
    }
    else if(result.data=="please enter correct password"){
      toast({
        title: result.data,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    else {
      toast({
        title:"please enter correct email",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    }
    return (
      <Flex
     
       
     mt="-100"
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in as Admin</Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link href="#" color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={()=>handleSubmit()}
                isDisabled={email==""||password==""}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Text  as="b"><Link href="/registration"> <span style={{color:"blue",cursor:"pointer"}}>Click here</span></Link> to be a Seller and get admin access</Text>
        </Stack>
      
      </Flex>
    );
  }