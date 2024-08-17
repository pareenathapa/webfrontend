import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useCart } from "../Context/CartContext";
import { Layout } from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

export const CartProductList = () => {
  const { cartProduct, removeFromCart } = useCart();
  const [selectedId, setSelectedId] = useState([]);

  const navigate = useNavigate();

  const selectedItem = cartProduct.filter((item) =>
    selectedId.includes(item._id)
  );
  const sheppinpPrice = 50;

  const totalPriceItem = selectedItem.reduce((accumulator, item) => {
    return accumulator + item.jewelryPrice;
  }, 0);

  const totalPrice =
    totalPriceItem > 0 ? totalPriceItem + sheppinpPrice : totalPriceItem;

  const renderLabelValue = (label, value) => {
    return (
      <div className="d-flex">
        <div className="text-muted">{label}:</div>
        <div>&nbsp; {value}</div>
      </div>
    );
  };

  const handleCheckout = () => {
    localStorage.setItem("userTotalPrice", JSON.stringify(totalPrice));
    navigate("/checkout");
  };

  const productMapping = cartProduct.map(
    ({
      createdAt,
      jeweleryCategory,
      jewelryImage,
      jewelryName,
      _id,
      jewelryPrice,
    }) => {
      const handleChange = (event) => {
        const selected = event.target.value;
        setSelectedId((prevSelectedIds) => {
          if (event.target.checked) {
            return [...prevSelectedIds, selected];
          } else {
            return prevSelectedIds.filter((id) => id !== selected);
          }
        });
      };

      return (
        <div className="bg-white p-4 w-100 rounded mt-3 d-flex gap-3 align-items-center shadow">
          <div className="w-25 h-25">
            <img
              src={`http://localhost:1000/${jewelryImage}`}
              alt={jewelryName}
              className="img-fluid rounded product-img"
            />
          </div>
          <div className="w-100">
            <div className="d-flex justify-content-between">
              <div>{renderLabelValue("Name", jewelryName)}</div>
              <div>
                <input
                  type="checkbox"
                  style={{ height: "25px", width: "20px" }}
                  value={_id}
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
            {renderLabelValue("Category", jeweleryCategory)}
            {renderLabelValue("Price", `Rs. ${jewelryPrice}`)}
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
    <Layout>
      <div className="w-60">
        <h2 className="text-center mt-1">Your Product list</h2>
        <div className="container d-flex  justify-content-between p-4 bg-light h-100 gap-10 ">
          <div className="w-100">{productMapping}</div>
          <div
            className=" p-4 w-50 ms-5 mt-3 h-80 bg-white shadow rounded"
            style={{
              maxHeight: "320px",
            }}
          >
            <div>
              <div>Order Summary</div>
              <div className="d-flex justify-content-between mt-3">
                <div>Items Total ({selectedItem.length})</div>
                <div>Rs {totalPriceItem}</div>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <div>Shipping Fee </div>
                <div>Rs 50</div>
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginTop: "100px" }}
            >
              <div>Total </div>
              <div style={{ color: "#fd5c63" }}>Rs {totalPrice}</div>
            </div>
            <div className=" mt-3">
              <Button
                style={{ width: "100%", background: "#297fad" }}
                onClick={handleCheckout}
                disabled={!selectedItem.length}
              >
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
