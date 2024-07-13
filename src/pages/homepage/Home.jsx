import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import banner from "../../Components/Assets/banner.png";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:1000/api/jewelery/get_all_jewelerys"
        );
        const data = await response.json();
        if (data.success) {
          setProducts(data.jewelerys);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log("products", products);

  return (
    <div className="home-container">
      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>
      <section className="gold-prices">
        <div className="date-info">
          <div>2081</div>
          <div>Baishak 17</div>
          <div>Monday</div>
        </div>
        <div className="prices-info">
          <div>Source: Negosida</div>
          <div>Hallmark Gold per tola: NRs 137200/-</div>
          <div>Tejabi Gold per tola: NRs 136550/-</div>
          <div>Silver per tola: NRs 1665/-</div>
        </div>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-item">
              <Link to={`/product/${product._id}`}>
                <img
                  src={`http://localhost:5000/jewelerys/${product.jeweleryImage}`}
                  alt={product.jeweleryName}
                />
                <div>{product.jeweleryName}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
