import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useCart } from "../Context/CartContext";

export const CartProductList = () => {
  const { cartProduct, removeFromCart } = useCart();

  const renderLabelValue = (label, value) => {
    return (
      <div className="d-flex">
        <div className="text-muted">{label}:</div>
        <div>&nbsp; {value}</div>
      </div>
    );
  };

  const productMapping = cartProduct.map(
    ({
      createdAt,
      jeweleryCategory,
      jeweleryImage,
      jeweleryName,
      _id,
      jeweleryPrice,
    }) => {
      return (
        <div className="bg-white p-4 w-50 rounded mt-2 d-flex gap-3 align-items-center shadow">
          <div className="w-25 h-25">
            <img
              src={`http://localhost:1000/jewelerys/${jeweleryImage}`}
              alt={jeweleryName}
              className="img-fluid rounded product-img"
            />
          </div>
          <div>
            {renderLabelValue("Name", jeweleryName)}
            {renderLabelValue("Category", jeweleryCategory)}
            {renderLabelValue("Price", `Rs. ${jeweleryPrice}`)}
            {renderLabelValue("CreatedAt", createdAt)}
            <Button
              color="danger"
              className="mt-2"
              onClick={() => removeFromCart(_id)}
            >
              Remove
            </Button>
          </div>
        </div>
      );
    }
  );
  if (!cartProduct.length) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <h2>You do not have any product.</h2>
      </div>
    );
  }

  return (
    <div className="container d-flex align-items-center justify-content-center p-2 bg-light h-100">
      <div className="w-100">
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <h2 className="text-end">Your Product list</h2>
          {productMapping}
        </div>
      </div>
    </div>
  );
};
