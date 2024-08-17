import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import banner from "../../Components/Assets/banner.png";
import { Layout } from "../../Components/Layout/Layout";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:1000/api/jewelry/");
        const data = await response.json();
        console.log(`apple`, JSON.stringify(data));
        if (data) {
          setProducts(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
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
        {products?.length > 0 && (
          <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-list">
              {products?.slice(0, 18).map((product) => (
                <div key={product._id} className="product-item">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={`http://localhost:1000/${product.jewelryImage}`}
                      alt={product.jewelryName}
                    />
                    <div>{product.jewelryName}</div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Home;
