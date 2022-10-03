import React from "react";
import { productsList } from "../products";
import ProductCard from "./ProductCard";

const Products = ({ addItemToCart, removeItem }) => {
  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addItemToCart}
            removeCartItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
