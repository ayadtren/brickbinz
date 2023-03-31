import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [themeFilter, setThemeFilter] = useState("");

  const themes = {
    1: "LEGO Architecture",
    2: "LEGO BrickHeadz",
    3: "LEGO City",
    4: "LEGO Classic",
    5: "LEGO Creator-3-in-1",
    6: "LEGO DC",
    7: "LEGO Disney",
    8: "LEGO Friends",
    9: "LEGO Harry Potter",
    10: "LEGO Ideas",
    11: "LEGO Jurassic World",
    12: "LEGO Avatar",
    13: "LEGO Super Mario",
    14: "LEGO Lord of the Rings",
    15: "LEGO Marvel",
    16: "LEGO CMF Series",
    17: "LEGO Speed Champions",
    18: "LEGO Star Wars",
    19: "LEGO Technic",
    20: "LEGO Creator Expert/Icons",
    21: "LEGO Retired",
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleThemeFilterChange = (event) => {
    setThemeFilter(event.target.value);
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

  const handleClick = (item) => async (e) => {
    e.preventDefault();

    const newCartItem = {
      product_set_name: item.product_set_name,
      product_set_numb: item.product_set_numb,
      product_price: item.product_price,
      product_location: item.product_location,
      product_quantity: item.product_quantity,
      product_img: item.product_img,
      theme: item.theme,
    };
    try {
      await axios.post("http://localhost:8000/cart", newCartItem);

      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 2000, // auto close after 2 seconds
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getFilteredResults = products
    .filter((item) =>
      Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(search.toLowerCase())
      )
    )
    .filter((item) => {
      if (!themeFilter) return true;
      return item.theme === parseInt(themeFilter, 10);
    })
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
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="container">
        <input
          className="search-bar"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
        />

        <div className="filter-bar">
          <div className="filter-select">
            <label htmlFor="sort-by-none">Sort By:</label>
          </div>

          <div>
            Price: Low to High{" "}
            <input
              type="radio"
              id="sort-by-price-low-to-high"
              name="sort-by"
              value="price-low-to-high"
              checked={filter === "price-low-to-high"}
              onChange={handleFilterChange}
            />
          </div>

          <div>
            Price: High to Low{" "}
            <input
              type="radio"
              id="sort-by-price-high-to-low"
              name="sort-by"
              value="price-high-to-low"
              checked={filter === "price-high-to-low"}
              onChange={handleFilterChange}
            />
          </div>

          <div>
            Name: A to Z{" "}
            <input
              type="radio"
              id="sort-by-name-a-to-z"
              name="sort-by"
              value="name-a-to-z"
              checked={filter === "name-a-to-z"}
              onChange={handleFilterChange}
            />
          </div>

          <div>
            Name: Z to A{" "}
            <input
              type="radio"
              id="sort-by-name-z-to-a"
              name="sort-by"
              value="name-z-to-a"
              checked={filter === "name-z-to-a"}
              onChange={handleFilterChange}
            />
          </div>

          <div className="filter-select">
            <div>
              <label htmlFor="filter-by-themes">Filter by Theme:</label>
            </div>
            <div>
              <select
                id="filter-by-themes"
                value={themeFilter}
                onChange={handleThemeFilterChange}
              >
                <option value="">All</option>
                {Object.entries(themes).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <ul className="inventory-list">
          {getFilteredResults.map((product) => {
            return (
              <li key={product.product_set_numb}>
                <div className="card">
                  <div className="image">
                    <img
                      src={require(`./../images/products/${product.product_img}`)}
                      alt={product.product_img}
                      width="70%"
                    />
                  </div>
                  <div className="setNumb" name="product_set_numb">
                    #{product.product_set_numb}
                  </div>
                  <div className="title" name="product_set_name">
                    {product.product_set_name}
                  </div>
                  <br />
                  <div name="product_price">${product.product_price}</div>
                  <div hidden="hidden" name="product_location">
                    {product.product_location}
                  </div>
                  <div
                    hidden="hidden"
                    className="quantity"
                    name="product_quantity"
                  >
                    {product.product_quantity}
                  </div>
                  <div hidden="hidden" name="product_img">
                    {product.product_img}
                  </div>
                  <div hidden="hidden" name="theme">
                    {product.theme}
                  </div>
                  <br />
                  <div className="button">
                    <button className="add-cart" onClick={handleClick(product)}>
                      Add Cart
                    </button>
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
