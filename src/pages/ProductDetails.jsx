import React from "react";
import "../styles/Productviewpg.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export default function ProductDetails() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/products/' + path)
      .then(response => {
        setProductDetail(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const handleClick = (item) => async (e) => {
    e.preventDefault();
    window.location.reload();
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

      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 2000, // auto close after 2 seconds
      });
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <section>
     {productDetail.map((product, index) => (
     <div className="card-body">
        <img className="frame-child" alt="" src={require(`./../images/products/${product.product_img}`)} />
        <div className="info-container">
         <div className="product-title"> {product.product_set_name}</div>

          <div className="price"> {product.product_price.toFixed(2)} CAD</div>
          <span className="available" > Available now!</span>
            <div className="warning">
              <b>WARNING!</b> CHOKING HAZARD.
              Small parts. Not for children under 3 years.
            </div>
          </div>
          <div className="image-icons-container">
            <img className="image-1-icon " alt="" src={require(`./../images/products/${product.product_img}`)} />
            <img className="image-2-icon " alt="" src={require(`./../images/products/${product.product_img}`)} />
            <img className="image-3-icon " alt="" src={require(`./../images/products/${product.product_img}`)} />
            <img className="image-4-icon " alt="" src={require(`./../images/products/${product.product_img}`)} />
          </div>
          <div className="RemoveButton-div">
            <a href="/shop"> <button className="RemoveButton" >X</button> </a>
          </div>

          <div className="SubmitButton-div">
            <button type="submit" className="AddTocart" onClick={handleClick(product)} >Add to cart</button>
          </div>
        </div>
      ))}
    </section>
  );
}
