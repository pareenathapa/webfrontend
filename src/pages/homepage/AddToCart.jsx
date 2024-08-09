import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/jewelry/${id}`);
        const data = await response.json();
        if (data.success) {
          setProduct(data.jewelry);
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

  const handleAddToCart = () => {
    // Logic for adding the product to the cart
    alert("Product added to cart!");
  };

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
      <div className="row">
        <div className="col-md-6">
          <img
            src={`http://localhost:5000/${product.jewelryImage}`}
            alt={product.jewelryName}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{product.jewelryName}</h1>
          <p className="lead">{product.jewelryDescription}</p>
          <h3 className="text-success mb-4">
            Price: NRs {product.jewelryPrice}
          </h3>
          <p className="text-muted">Category: {product.jewelryCategory}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
