import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Orders,
  Layout,
  Cart,
  Collection,
  Contact,
  Login,
  PlaceOrder,
  Products,
  About
} from "../pages";
import Verify from "../pages/Verify";

function AppRoute() {
  return (
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productID" element={<Products />} />
           <Route path="/verify" element={<Verify/>} />
        </Route>
      </Routes>
    
  );
}

export default AppRoute;
