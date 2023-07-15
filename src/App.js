import React from "react";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Profile from "./pages/Profile/Profile";
import ToasterWrapper from "./Components/ToastWrapper/ToastWrapper";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="align-center">
      <ToasterWrapper />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> 
        //a sidebar with all the filters to filter products based on the filters
        a card list to list products based on that filter
        add to wishlist, remove from wishlist, add to cart, remove from cart functionnon each card
        a header to go to cart, wishlist directly
        inside cart, see a summary page of all the products in the cart
        place an order and see the order page summary
        increment, drement, remove from cart in order page
        page details fro  every product
        profile page with profile, address, order tabs
        edit or add address feature
        checkout page
        */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
