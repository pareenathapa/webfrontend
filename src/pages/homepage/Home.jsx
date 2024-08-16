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

  const khaltiData = {
    return_url: "http://localhost:3000",
    website_url: "http://localhost:3000",
    amount: 1300,
    purchase_order_id: "HT6o6PEZRWFJ5ygavzHWd5",
    purchase_order_name: "rupak",
    customer_info: {
      name: "Khalti Bahadur",
      email: "example@gmail.com",
      phone: "9800000123",
    },
    amount_breakdown: [
      {
        label: "Mark Price",
        amount: 1000,
      },
      {
        label: "VAT",
        amount: 300,
      },
    ],
    product_details: [
      {
        identity: "1234567890",
        name: "Khalti logo",
        total_price: 1300,
        quantity: 1,
        unit_price: 1300,
      },
    ],
    merchant_username: "omega inernational",
    merchant_extra: "merchant_extra",
  };

  const khaltiPayment = async () => {
    try {
      const response = await fetch(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        {
          headers: {
            Authorization:
              "key test_public_key_dc74e0fd57cb46cd93832aee0a507256",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(khaltiData),
        }
      );

      // Await the response.json() to get the actual data
      const data = await response.json();
      console.log("data", data);
      window.open("https://test-pay.khalti.com/?pidx=qjUob6V4ubSCWoG8woGy7m");
    } catch (error) {
      console.log("error", error);
      toast.error(error.detail);
      window.open("https://test-pay.khalti.com/?pidx=qjUob6V4ubSCWoG8woGy7m");
    }
  };

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
              {products?.map((product) => (
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

      <div>
        <button onClick={khaltiPayment}>Khalti payment</button>
      </div>
    </Layout>
  );
};

export default Home;
