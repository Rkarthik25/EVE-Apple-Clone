import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductData from "./ProductData";

const Product = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  function handleChange(e) {
    setCategory(e.target.value);
  }

  useEffect(() => {
    axios
      .get(`https://friendly-fawn-pocketbook.cyclic.app/products/${category}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  function Sorting(value) {
    setFlag((prev) => !prev);
    if (value == "asc") {
      let modifiedData = data.sort(function (a, b) {
        return a.PriceToAccess - b.PriceToAccess;
      });
      setData(modifiedData);
    } else {
      let modifiedData = data.sort(function (a, b) {
        return b.PriceToAccess - a.PriceToAccess;
      });
      setData(modifiedData);
    }
  }

  return (
    <div>
      <Box p="5%">
        <Heading ml="10%" fontSize="7xl" fontWeight="medium">
          Store. The best way to buy the products you love.
        </Heading>
        <Image
          mt="2%"
          w="100%"
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra-alpine-banner-202209?wid=2540&hei=472&fmt=jpeg&qlt=90&.v=1661879891004"
          alt="pic"
        />
      </Box>
      <Box>
        <Flex>
          <Select onChange={(e) => handleChange(e)} placeholder="Categories">
            <option value="Mac">MAC</option>
            <option value="Iphone">iPhone</option>
            <option value="Ipad">iPad</option>
            <option value="Iwatch">Apple Watch</option>
            <option value="AirPods">AirPod</option>
            <option value="AppleTv">Apple TV</option>
            <option value="HomePod">HomePod</option>
          </Select>

          <Select
            onChange={(e) => Sorting(e.target.value)}
            placeholder="Sort By">
            <option value="asc">Price Low to High</option>
            <option value="dec">Price High to Low</option>
          </Select>
        </Flex>
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))">
        {data.map((el) => {
          return (
            <Link key={el.id} to={`/product/${el._id}`}>
              <ProductData key={el.id} el={el} />
            </Link>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Product;
