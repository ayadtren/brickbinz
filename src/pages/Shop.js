import React, { useEffect, useState } from "react";
import logo from "../images/brickbinbanner.png";
import axios from "axios";

// const items = [
//   {
//     name: "Item 1",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 2",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 3",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 4",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 5",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 6",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 7",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 8",
//     image: logo,
//     price: 49.99,
//   },
//   {
//     name: "Item 9",
//     image: logo,
//     price: 49.99,
//   },
// ];

//This fecthes the json information from index.js in the backend folder,
const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/products')
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllProducts();
  }, [])

  return (
    <section className="home">
      <div className="container">
        <ul className="inventory-list">
          {products.map((product) => {
            return (
              <li key={product.product_set_numb}>
                <div className="card">
                  <div className="image">
                    {/* {product.product_img && <img src={product.product_img} alt="" />} */}
                    <img src={logo} />
                  </div>
                  <div className="title">{product.product_set_name}</div>
                  <div className="price">{product.product_price}</div>
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