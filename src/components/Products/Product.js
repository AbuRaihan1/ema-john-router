import React, { useState } from "react";
import "./product.css";

const Product = (props) => {
  const [sameProductSelect, setsameProductSelect] = useState(0);
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

  const thisItemSelct = () => {
    props.handleAddToCart(product);
    setsameProductSelect(sameProductSelect + 1);
    let cartSelectQuantity = document.querySelectorAll(".select-cart");
    for (let singleAddBtn of cartSelectQuantity) {
      singleAddBtn.classList.add("select-cart-visible");
    }
  };
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
        {/* <p>this select : {sameProductSelect}</p>  */}
        <button onClick={thisItemSelct}>
          <span className="select-cart">{sameProductSelect}</span>
          {/* () => props.handleAddToCart(product) */}
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
