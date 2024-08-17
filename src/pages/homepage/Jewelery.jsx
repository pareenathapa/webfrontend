import React, { useEffect, useState } from "react";
import "../../App.css";
import earring from "../../Components/Assets/Earring.png";
import ring from "../../Components/Assets/gold ring.png";
import nosering from "../../Components/Assets/Nose ring.png";
import necklace from "../../Components/Assets/gold necklace.png";
import bangle from "../../Components/Assets/gbangle.png";

import Silver_earring from "../../Components/Assets/silver earring.png";
import Silver_ring from "../../Components/Assets/Silver ring.png";
import Silver_nosering from "../../Components/Assets/Silver Nose Ring.png";
import Silver_necklace from "../../Components/Assets/silver necklace.png";
import Silver_bangles from "../../Components/Assets/Silver Bangles.png";
import { Layout } from "../../Components/Layout/Layout";

const jewelryData = [
  { id: 1, type: "Earrings", name: "Earrings", image: earring },
  { id: 2, type: "Rings", name: "Ring", image: ring },
  { id: 3, type: "Nose Rings", name: "Nose Pin", image: nosering },
  { id: 4, type: "Necklaces", name: "Necklace", image: necklace },
  { id: 5, type: "Bangles", name: "Bangle", image: bangle },

  { id: 6, type: "Earrings", name: "Elegant Earrings", image: Silver_earring },
  { id: 7, type: "Rings", name: "Engagement Ring", image: Silver_ring },
  {
    id: 8,
    type: "Nose Rings",
    name: "Stylish Nose Pin",
    image: Silver_nosering,
  },
  { id: 9, type: "Necklaces", name: "Silver Necklace", image: Silver_necklace },
  { id: 10, type: "Bangles", name: " bangles", image: Silver_bangles },
];

const Jewelry = () => {
  const [products, setProducts] = useState([]);

  const [filteredProduct, setFilteredProduct] = useState([]);
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

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredJewelry =
    filter === "All"
      ? products
      : products.filter((item) => item.jewelryCategory === filter);

  return (
    <Layout>
      <div className="jewelry-container">
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("All")}>All</button>
          <button onClick={() => handleFilterChange("Earrings")}>
            Earrings
          </button>
          <button onClick={() => handleFilterChange("Rings")}>Rings</button>
          <button onClick={() => handleFilterChange("Nose Rings")}>
            Nose Rings
          </button>
          <button onClick={() => handleFilterChange("Necklaces")}>
            Necklaces
          </button>
          <button onClick={() => handleFilterChange("Bangles")}>Bangles</button>
        </div>
        {filteredJewelry?.length ? (
          <div className="card-deck">
            {filteredJewelry.map((jewel) => (
              <div className="card" key={jewel._id}>
                <img
                  src={`http://localhost:1000/${jewel.jewelryImage}`}
                  alt={jewel.name}
                />
                <div className="card-content">
                  <h3>{jewel.jewelryName}</h3>
                  <p>{jewel.jewelryCategory}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center">
            This category has no data
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Jewelry;
