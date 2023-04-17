import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { MdOutlineSearch } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

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

const filters = [
  {
    label: "Price: Low to High",
    value: "price-low-to-high",
  },
  {
    label: "Price: High to Low",
    value: "price-high-to-low",
  },
  {
    label: "Name: A to Z",
    value: "name-a-to-z",
  },
  {
    label: "Name: Z to A",
    value: "name-z-to-a",
  },
];

const Shop = () => {
  const [isShown, setIsShown] = useState({});
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [themeFilter, setThemeFilter] = useState("");
  const { addToCart } = useCart();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
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
    item.product_quantity = 1;

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
      addToCart();

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
      ))
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
  const handleMouseEnter = (index) => {
    setIsShown((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setIsShown((prevState) => ({ ...prevState, [index]: false }));
  };

  return (
    <section className="home">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="container">
        <div className="filter-bar">
          <div className="search-box">
            <MdOutlineSearch size={24} className="search-icon" />
            <div>
              <input
                className="search-bar"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="filter-select">
            <div>
              Filter by
              {/* <label htmlFor="filter-by-themes">Filter By:</label> */}
            </div>
            <div>
              <Form.Select
                id="filter-by-themes"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                {filters.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>

          <div className="filter-select">
            <div>
              Filter by themes
              {/* <label htmlFor="filter-by-themes">Filter by Theme:</label> */}
            </div>
            <div>
              <Form.Select
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
              </Form.Select>
            </div>
          </div>
        </div>

        <ul className="inventory-list">
          {getFilteredResults.map((product, index) => {
            return (
              <li key={product.product_set_numb}>
                <div className="card">
                  <Link
                    to={`/product/${product.product_set_numb}`}
                    className="link"
                  >
                    <div className="image-box">
                      <div
                        className="container"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        <img
                          className="image"
                          src={require(`./../images/products/${product.product_img}`)}
                          alt={product.product_img}
                        />
                        {isShown[index] && (
                          <button className="Show_Details">
                            {" "}
                            Show Details{" "}
                          </button>
                        )}
                      </div>
                    </div>
                  </Link>

                  <div className
                    ="setNumb" name="product_set_numb">
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

                  <div hidden="hidden" className="quantity" name="product_quantity">
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
                    <button
                      className="add-cart"
                      onClick={handleClick(product)}
                    >
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
