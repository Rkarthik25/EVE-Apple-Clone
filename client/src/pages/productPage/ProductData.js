import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductData = ({ el }) => {
  console.log(el);
  return (
    <>
      <Box mr="15%" ml="15%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Image ml="27%" width="50%" src={el.img1} alt="Apple Picture" />
        <Box width="40%" ml="30%" textAlign="center">
          <Text fontSize="xs" fontWeight="light" color="orange">
            New
          </Text>
          <Text
            fontFamily="SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
            fontSize="s"
            fontWeight="bold"
            color="#1d1d1f">
            {el.title}
          </Text>
          <Text
            fontFamily="SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
            fontSize="s"
            fontWeight="medium"
            color="#1d1d1f">
            ${el.PriceToAccess}
          </Text>
          <Text
            fontFamily="SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
            fontSize="s"
            fontWeight="medium"
            color="#1d1d1f">
            {el.price}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ProductData;
