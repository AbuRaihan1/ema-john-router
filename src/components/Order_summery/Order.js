import React from "react";
import "./Order.css";
const Order = (props) => {
  const { order } = props;

  // total price calculation
  let totalPrice = 0;
  let totalShipping = 0;
  let tax = 0;
  let quantity = 0;

  for (const product of order) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    tax = parseFloat(totalPrice * 0.1);
  }
  let grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="order">
      <h3>oder summery </h3>
      <hr />
      <p>selected items : {quantity}</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total Shipping Charge : ${totalShipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};
export default Order;
