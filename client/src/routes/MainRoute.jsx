import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cartPage/Cart";
import Checkout from "../pages/checkoutPage/Checkout";
import Home from "../pages/homePage/Home";
import {Login} from "../pages/loginPage/Login";
import OrderSuccessfull from "../pages/orderSuccessfull/OrderSuccessfull";
import Payment from "../pages/paymentPage/Payment";
import Products from "../pages/productPage/Products";
import SingleProduct from "../pages/productPage/SingleProduct";
import {Signup} from "../pages/registerPage/Register";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orderSuccess" element={<OrderSuccessfull />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
