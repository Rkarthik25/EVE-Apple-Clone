
import { Box,useToast, Button, Heading, Input, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/authReducer/action';
import axios from "axios";




export const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 // const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const token = useSelector(
    (state) => state.authReducer.isAuth
  );
  //console.log(token)

 // const handlePass = () => setShow(!show);

const getdata = ()=>{
  const data = {
    email,
    password,
  };

  return axios
  .post("http://localhost:4500/users/login", data)
  .then((res) => {
    console.log(res.data)
     console.log(res.data.usertoken)
      localStorage.setItem("userID", res.data?.data?.id)
  
      return res.data.usertoken;
  });

}

  const handleClick = async() => {
    // const data = {
    //   email,
    //   password,
    // };
     if (email && password) {

  //  const token = await getdata();
  const token = await getdata();
  console.log(token,"token")
  
  if(token){
    toast({
               description: "Login success",
               status: "success",
               duration: 3000,
              isClosable: true,
            });
  }else{
    toast({
    description: "Wrong Credentials !",
                    status: "warning",
                 duration: 3000,
                  isClosable: true,
                 });
                }


     // dispatch(login(data));
  //     if(token!==""){
  //      
  //  }else{
  //    
  //                 description: "Wrong Credentials !",
  //                 status: "warning",
  //              duration: 3000,
  //               isClosable: true,
  //               });
  // }
        // toast({
        //   description: "Login success",
        //   status: "success",
        //   duration: 3000,
        //   isClosable: true,
        // });
        // navigate("/Checkout");
        // if (loginSuccess === "Wrong Credentials !") {
        //          toast({
        //           description: "Wrong Credentials !",
        //           status: "warning",
        //         duration: 3000,
        //           isClosable: true,
        //         });
            //  }
    }
     else {
      toast({
        description: "Please fill the required details",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }
   
  };
  
  

//  // if (loginSuccess !== "") {
//     if (loginSuccess === "Wrong Credentials !") {
//       toast({
//         description: "Wrong Credentials !",
//         status: "warning",
//         duration: 3000,
//         isClosable: true,
//       });
//     } 
//     else if (loginSuccess === "Authentication Failed !") {
//       toast({
//         description: "Authentication Failed !",
//         status: "warning",
//         duration: 3000,
//         isClosable: true,
//       });
//     } 
    // else {
    //   toast({
    //     description: "login Successfully",
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   navigate("/");
    // }
 // }

  // if (loginFailure !== "") {
  //   toast({
  //     description: loginFailure,
  //     status: "error",
  //     duration: 4000,
  //     isClosable: true,
  //   });
  // }


export default Login