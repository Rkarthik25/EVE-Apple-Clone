import React, { useState } from "react";
import {
  Box,
  Button,
  useToast,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [Fname, setFName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Lname, setLName] = useState("");
  const [Dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();

  const toast = useToast();
  // const handlePass = () => setShow(!show);

  // const { signupSuccess, signupFailure } = useSelector(
  //   (store) => store.authReducer
  // );

  const handleClick = () => {
    // const data = {
    //   Fname,
    //   phone,
    //   email,
    //   password,
    //   Lname,
    //   Dob,
    //   country
    // };
    //console.log(data)

    if (Fname && phone && email) {
      if (password.length > 8) {
        // register({ Fname, phone, email, password, Lname, Dob, country });
        // if (signupSuccess !== "") {
        toast({
          description: "Your EVE ID Create",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
        // }
      } else {
        toast({
          description: "password length should be greater than 8 characters",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        description: "Please fill all details",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  // if (signupSuccess !== "") {
  //   toast({
  //     description: signupSuccess,
  //     status: "success",
  //     duration: 3000,
  //     isClosable: true,
  //   });
  //   Navigate("/login");
  // }

  // if (signupFailure !== "") {
  //   toast({
  //     description: signupFailure,
  //     status: "error",
  //     duration: 4000,
  //     isClosable: true,
  //   });
  //}
  <Box ml={"35%"} mr={"35%"} w="30%" mt={5}>
    <Box m={3}>
      <Heading>Create Your EVE ID</Heading>
      <Text>
        One EVE ID is all you need to access all Apple services. Already have an
        EVE ID?{" "}
        <span>
          <Link color={"blue"}>Find it here</Link>
        </span>
      </Text>
    </Box>
    <FormControl>
      {/* <FormLabel>Email address</FormLabel> */}
      <Flex gap="8px" mb="6px">
        <Input
          type="text"
          placeholder="First name"
          value={Fname}
          onChange={(e) => setFName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last name"
          value={Lname}
          onChange={(e) => setLName(e.target.value)}
        />
      </Flex>
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      <FormLabel>COUNTRY / REGION</FormLabel>
      <Select
        placeholder="Select Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="USA">USA</option>
      </Select>
      <Box mt={3}>
        <Input
          type="date"
          placeholder="Birthday"
          name="Birthday"
          value={Dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </Box>
      <hr style={{ margin: "20px 0px 20px 0px", width: "100%" }} />

      {/* <Box> */}
      <Input
        type="text"
        placeholder="name@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormHelperText>This will be your new EVE ID.</FormHelperText>
      <Input
        mt={3}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Input mt={3} type="password" placeholder='Confirm password'  /> */}
      {/* </Box> */}
      <hr style={{ margin: "20px 0px 20px 0px", width: "100%" }} />
      <Input
        type={"number"}
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Box mt="20px">
        <Button
          backgroundColor={"#42a1ec"}
          onClick={handleClick}
          color="white"
          border={"1px solid black"}
          type="Submit">
          Continue
        </Button>
      </Box>
    </FormControl>
  </Box>;
};

export default Register;
