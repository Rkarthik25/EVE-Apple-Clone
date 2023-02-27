import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Flex } from "@chakra-ui/layout";
import { Image, Toast, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const SingleProduct = () => {
  const params = useParams();
  const Toast = useToast();

  const [singledata, setSingledata] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://friendly-fawn-pocketbook.cyclic.app/product/id/${params.id}`
      )
      .then((res) => setSingledata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const AddtoCart = () => {
    Toast({
      position: "top",
      render: () => (
        <Box color="white" p={3} bg="#0071E3">
          Product Added Succesfully
        </Box>
      ),
      isClosable: true,
    });
    const id = localStorage.getItem("userID");
    console.log(id);
    axios
      .post(`https://friendly-fawn-pocketbook.cyclic.app/cart/${id}`, {
        _id: params.id,
        title: singledata?.[0]?.title,
        img1: singledata?.[0]?.img1,
        img2: singledata?.[0]?.img2,
        price: singledata?.[0]?.price,
        PriceToAccess: singledata?.[0]?.PriceToAccess,
        Stock: 5,
        ProductDescription: singledata?.[0]?.ProductDescription,
        ProductDetails: singledata?.[0]?.ProductDetails,
        Category: singledata?.[0]?.Category,
        __v: 0,
      })

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Box borderBottom="0.5px solid grey">
        <Heading ml="-60%" marginBottom="2%" fontSize="4xl" fontWeight="medium">
          {singledata?.[0]?.title}
        </Heading>
      </Box>

      <Flex ml="10%" mt="5%">
        <Box>
          <Image src={singledata?.[0]?.img1} alt="AppleImage" />
        </Box>

        <Box width="50%" ml="5%">
          <Text fontSize="xl" fontWeight="medium" color="orange">
            New
          </Text>{" "}
          <br />
          <Text
            fontFamily="SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
            fontSize="32px"
            fontWeight="bold"
            color="#1d1d1f">
            {singledata?.[0]?.title}
          </Text>
          <br />
          <Text
            fontFamily="SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
            fontSize="17px"
            color="#1d1d1f">
            {singledata?.[0]?.price}
          </Text>
          <br />
          <Text fontSize="2xl" fontWeight="medium" color="black">
            $ {singledata?.[0]?.PriceToAccess}
          </Text>
          <br />
          <Heading fontSize="xl">Product Description</Heading>
          <br />
          {singledata?.[0]?.ProductDetails.map((el) => (
            <div>
              <Text
                fontFamily="SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
                fontSize="18px"
                color="#1d1d1f">
                {el}
              </Text>
              <br />
            </div>
          ))}
          <Heading fontSize="xl">Product Details</Heading>
          <br />
          {singledata?.[0]?.ProductDescription.map((el) => (
            <div>
              <Text
                fontFamily="SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
                fontSize="22px"
                fontWeight="bold"
                color="#1d1d1f">
                {el}
              </Text>
              <br />
            </div>
          ))}
          <Button
            onClick={() => AddtoCart()}
            backgroundColor="blue.400"
            p="5% 15% 5% 15%">
            Add To Bag
          </Button>
          <br />
          <br />
        </Box>
      </Flex>
    </div>
  );
};

export default SingleProduct;
