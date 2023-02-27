import {
  Box,
  useToast,
  Button,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const getdata = () => {
    const data = {
      email,
      password,
    };

    return axios
      .post(
        "https://friendly-fawn-pocketbook.cyclic.app/users/user/login",
        data
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.usertoken);
        localStorage.setItem("userID", res.data?.id);

        return res.data.usertoken;
      });
  };

  const handleClick = async () => {
    if (email && password) {
      const token = await getdata();
      console.log(token, "token");

      if (token) {
        toast({
          description: "Login success",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else {
        toast({
          description: "Wrong Credentials !",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        description: "Please fill the required details",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box mt="15px" ml="35%" mr="35%" w="30%">
      <Box>
        <Heading>Sign in for faster checkout.</Heading>
      </Box>
      <Box mt={"60px"} w="80%">
        <Text mt="4px" mb="8px">
          Sign in to EVE Store
        </Text>
        <Input
          type="text"
          mt="4px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="EVE ID"
        />
        <Input
          type="password"
          mt="8px"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick={handleClick} mt="14px" mb="4px">
          Signin
        </Button>
        <hr style={{ margin: "20px 0px 20px 0px", width: "100%" }} />

        <Text>
          Don't have an EVE ID?{" "}
          <span>
            <Link color={"blue.500"}>Create yours now</Link>
          </span>
        </Text>
      </Box>
    </Box>
  );
};
