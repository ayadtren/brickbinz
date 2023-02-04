import React, { Component } from 'react'


export class ShopLegos extends Component {
  render() {
    return (
      <div>
       
        <h1>inventory </h1>
        <ProductList/>
      </div>
    )
  }
}


const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ShopLegos
