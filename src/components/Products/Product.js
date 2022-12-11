import React from "react";
import "./product.css";

const Product = (props) => {
  const { product } = props;
  const {
    name,
    id,
    category,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
    img,
  } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h3>Price : {price}</h3>
      </div>
      <div className="bottom-product">
        <p>Manufacturer : {seller}</p>
        <p>Ratings : {ratings}</p>
        <button onClick={() => props.handleAddToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
