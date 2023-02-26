import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Heading, Text, Button } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";

const OrderSuccessfull = () => {
  const [id, setId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const idval = Date.now();
    setId(idval);
  }, []);

  const styles = {
    width: "50%",
    height: "400px",
    margin: "auto",
    marginBottom: "70px",
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <BsPatchCheckFill fontSize={58} color="green" />
      <Heading>Your order has been received</Heading>
      <Heading size="md">Thank you for your purchase !</Heading>
      <Heading size="md">Your order id is : {id}</Heading>
      <Button
        width="50%"
        colorScheme="yellow"
        onClick={() => {
          navigate("/");
        }}>
        Continue Shoping
      </Button>
    </div>
  );
};

export default OrderSuccessfull;
