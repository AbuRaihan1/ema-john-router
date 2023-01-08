import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Order from "../Order_summery/Order";
import SingleOrder from "./SingleOrder";

const Orders = () => {
  const { products, prevCart } = useLoaderData();
  const [cart, setCart] = useState(prevCart);
  console.log(cart);
  return (
    <div>
      <div className="shop-container single-shop-container">
        <div className="product-container single-product-container">
          {cart.map((singleProduct) => (
            <SingleOrder
              singleProduct={singleProduct}
              key={singleProduct.id}
            ></SingleOrder>
          ))}
        </div>
        <div className="order-container">
          <Order order={cart}></Order>
        </div>
      </div>
    </div>
  );
};

export default Orders;
