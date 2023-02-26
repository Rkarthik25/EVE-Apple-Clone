import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cartPage/Cart";
import Checkout from "../pages/checkoutPage/Checkout";
import HomeBody from "../pages/homePage/homepage"; 
import Iphone14Pro from "../pages/iPhone14/iphone14pro";  
import Login from "../pages/loginPage/Login";
import Payment from "../pages/paymentPage/Payment";
import Products from "../pages/productPage/Products";
import SingleProduct from "../pages/productPage/SingleProduct";
import Register from "../pages/registerPage/Register";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/iphone14pro" element={<Iphone14Pro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
