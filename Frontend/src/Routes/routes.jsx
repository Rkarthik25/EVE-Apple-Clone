import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeBody from "../Pages/Homepage/HomeBody/homebody";
import Iphone14Pro from "../Pages/iPhone14/iPhone14Pro";

const AllRoutes = () => {
  <Routes>
    <Route path="/" element={<HomeBody />} />
    <Route path="/iphone14pro" element={<Iphone14Pro />} />
  </Routes>;
}

export default AllRoutes;
 
