import React from "react";

const Order = (props) => {
  return (
    <div>
      <h3>oder summery </h3>
      <p>selected items : {props.order.length}</p>
    </div>
  );
};

export default Order;
