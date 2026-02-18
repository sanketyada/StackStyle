import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Orders from "../pages/Orders";
// import Layout from "../components/layout/Layout";
// // import Cart from "../pages/Cart";
// import Collection from "../pages/Collection";
// import Contact from "../pages/Contact";
// import Login from "../pages/Login";
// import PlaceOrder from "../pages/PlaceOrder";
// import Products from "../pages/Products";
import { Home,Orders,Layout,Cart,Collection,Contact,Login,PlaceOrder,Products} from '../pages'

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoute;
