import React, { useState } from "react";

import { productData } from "../../../data/product";
import { ProductCard } from "../../Product-Card/product-card.component";

export const Products = ({
  cartItems,
  setCartItems,
  cartCount,
  setCartCount,
}) => {
  const [products, setProducts] = useState(productData);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            cartItems={cartItems}
            setCartItems={setCartItems}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  );
};
