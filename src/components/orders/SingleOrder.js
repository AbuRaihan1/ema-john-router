import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./singleOrder.css";
const SingleOrder = ({ singleProduct }) => {
  console.log(singleProduct);
  const { img, name, price, shipping } = singleProduct;
  return (
    <div>
      <div className="singleProduct">
        <div>
          <div className="productDesc">
            <img src={img} alt="" />
            <div>
              <h3>{name}</h3>
              <p>Price : {price}</p>
              <p>Shipping Charge : {shipping}</p>
            </div>
          </div>
        </div>
        
        <TrashIcon className="deleteIcon" />
      </div>
    </div>
  );
};

export default SingleOrder;
