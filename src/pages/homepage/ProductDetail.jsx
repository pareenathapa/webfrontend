import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../../Components/Ratings/Ratings";
import "../CSS/ProductDetails.css";
import { AddToCartModal } from "../../Components/AddToCartModal";
import { useCart } from "../../Components/Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:1000/api/jewelery/get_single_jewelery/${id}`
        );
        const data = await response.json();
        if (data.success) {
          setProduct(data.jewelery);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error fetching product: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  console.log("product name", product);

  //   const handleAddToCart = () => {
  //     const updatedCart = [...cart, product];
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     setModal(!modal);
  //   };

  //   useEffect(() => {
  //     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //     setCart(savedCart);
  //   }, []);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex align-item-center justify-content-center">
        <div className="col-md-5">
          <img
            src={`http://localhost:1000/jewelerys/${product.jeweleryImage}`}
            alt={product.jeweleryName}
            className="img-fluid rounded product-img"
          />
        </div>
        <div className="col-md-5 p-5 ">
          <h1 className="product-title text-capitalize">
            {product.jeweleryName}
          </h1>
          <p className="muted">{product.jeweleryDescription}</p>
          <p className="">Price Nrs:{product.jeweleryPrice}</p>
          <p className="text-muted product-category">
            Category: {product.jeweleryCategory}
          </p>
          <Rating productRating={4} />
          <button
            className="btn btn-primary add-to-cart-btn mt-2 "
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* <AddToCartModal
        modal={modal}
        toggle={handleOpenToCartModal}
        handleAddToCart={() => }
      /> */}
    </div>
  );
};

export default ProductDetail;
