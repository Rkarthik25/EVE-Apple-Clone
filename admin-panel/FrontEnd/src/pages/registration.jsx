import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from "axios"
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Link from 'next/link';
export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName:"",
    GST_no:"",
    email: '',
    password: '',
    mobile:""
  });
  const toast = useToast()
  const handleInputChange = (event) => {
    const { name,value } = event.target
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)
  }
  const handleSubmit=async()=>{
 try{
 let res= await axios.post("https://friendly-fawn-pocketbook.cyclic.app/admin/register",formValues)
 if(res.data=="This email is already registered with an account"){
 toast({
  title: res.data,
  status: 'error',
  duration: 4000,
  isClosable: true,
})
 }
 else{
  toast({
    title: res.data,
    status: 'success',
    duration: 4000,
    isClosable: true,
  })
 }
 }
 catch(err){
console.log(err)
 }

  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up to become a Seller
          </Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="firstName" value={formValues.firstName} onChange={handleInputChange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" name="mobile" value={formValues.mobile} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="GST" isRequired>
              <FormLabel>GST Number</FormLabel>
              <Input type="text"name="GST_no" value={formValues.GST_no} onChange={handleInputChange}/>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={formValues.email} onChange={handleInputChange}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Text fontSize={10} color={"red"}>Password must be of atleast 8 characters and must contain atleast one alphabet, one number and one symbol</Text>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  name="password" value={formValues.password} onChange={handleInputChange}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button  isDisabled={formValues.password?.length<8||formValues.mobile?.length!==10||!/@/.test(formValues.email)||!/[!@#$%^&*(),.?":{}|<>]/.test(formValues.password)||!/[a-zA-Z]/.test(formValues.password)||!/\d/.test(formValues.password)}
           
              onClick={()=>handleSubmit()}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href={"/"} color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}