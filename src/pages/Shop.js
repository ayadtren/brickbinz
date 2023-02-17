import React, { useEffect, useState } from "react";
import logo from "../images/brickbinbanner.png";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const getFilteredResults = products
    .filter((item) =>
      Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      switch (filter) {
        case "price-low-to-high":
          return a.product_price - b.product_price;
        case "price-high-to-low":
          return b.product_price - a.product_price;
        case "name-a-to-z":
          return a.product_set_name.localeCompare(b.product_set_name);
        case "name-z-to-a":
          return b.product_set_name.localeCompare(a.product_set_name);
        default:
          return 0;
      }
    });

  return (
    <section className="home">
      <div className="container">
        <div className="filter-bar">
          <input
            className="search-bar"
            placeholder="Search"
            value={search}
            onChange={handleInputChange}
          />
          <select className="filter-select" value={filter} onChange={handleFilterChange}>
            <option value="">Sort By</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="name-a-to-z">Name: A to Z</option>
            <option value="name-z-to-a">Name: Z to A</option>
          </select>
        </div>
        <ul className="inventory-list">
          {getFilteredResults.map((product) => {
            return (
              <li key={product.product_set_numb}>
                <div className="card">
                  <div className="image">
                    <img src={logo} alt="" />
                  </div>
                  <div className="title">{product.product_set_name}</div>
                  <div className="price">${product.product_price}</div>
                  <div className="button">
                    <button className="add-cart">Add Cart</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Shop;
