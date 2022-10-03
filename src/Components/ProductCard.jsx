import React, { useState } from "react";

const ProductCard = ({ product, addToCart, removeCartItem }) => {
  const [toggle, setToggle] = useState(false);
  const addToCartHandler = () => {
    setToggle(true);
    addToCart();
  };
  const removeToCartHandler = () => {
    setToggle(false);
    removeCartItem();
  };
  return (
    <div className="col mb-5" key={product.id}>
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={product.img} alt={product.name} />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{product.name}</h5>
            {/* <!-- Product price--> */}${product.price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {!toggle ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => addToCartHandler()}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="btn btn-outline-danger mt-auto"
                onClick={() => removeToCartHandler()}
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
