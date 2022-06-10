import React, { useState } from "react";

import { Products } from "./Components/Layouts/Products/products.layout";
import { Header } from "./Components/Layouts/Header/header.layout";

import "bootstrap/dist/css/bootstrap.css";
import "./Assets/global/global.scss";

export const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      <Products
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </>
  );
};
