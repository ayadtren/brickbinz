import {React, useState, useEffect} from 'react'
import axios from "axios";

function Stuff() {
    const [products, setProducts] = useState([]);
  

    //get data
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
  
    return (
    <ul>
        {
            products.map(products => <li>{products.product_set_numb}  {products.product_set_name} {products.product_price} {products.product_location} {products.product_quantity} {products.product_img} {products.theme}</li>)
        }
    </ul>
  )
}

export default Stuff