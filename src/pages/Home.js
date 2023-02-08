import "./HomeStyles.css";

import React from "react";
import logo from "../images/brickbinbanner.png";

const items = [
  {
    name: "Item 1",
    image: logo,
    price: 49.99,
  },
  {
    name: "Item 2",
    image: logo,
    price: 49.99,
  },
  {
    name: "Item 3",
    image: logo,
    price: 49.99,
  },
  {
    name: "Item 4",
    image: logo,
    price: 49.99,
  },
  {
    name: "Item 5",
    image: logo,
    price: 49.99,
  },
  {
    name: "Item 6",
    image: logo,
    price: 49.99,
  },
];

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <ul className="inventory-list">
          {items.map((item, index) => {
            return (
              <li key={item.name}>
                <div className="card">
                  <div className="image">
                    <img src={item.image} />
                  </div>
                  <div className="title">{item.name}</div>
                  <div className="price">{item.price}</div>
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

export default Home;
