import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../components/Card";
import "../styles/HomePageStyles.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Modal } from "react-bootstrap";
import Productviewpg from "../pages/Productviewpg";
import mainImage1 from "../images/mainpic1.jpg";
import mainImage2 from "../images/mainpic2.jpg";
import mainImage3 from "../images/mainpic3.jpg";
import cardImage1 from "../images/card-image1.jpg";
import cardImage2 from "../images/card-image2.jpg";
import cardImage3 from "../images/card-image3.jpg";
//<img className='main-image' src={picture} alt="Main picture" />
const RealHomePage = () => {
  const [products, setProducts] = useState([]);

  const [showProductPage, setShowProductPage] = useState(false);
  const handleProductPageClose = () => {
    setShowProductPage(false);
  };
  // const handleProductPageOpen = () => {
  //   setShowProductPage(true);
  // };

  //slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

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

  //array with all the div tags n shit
  const newItems = products.map((products) => (
    <div className="slider-container">
        <Link   to={`/product/${products.product_set_numb}`} className="link">
      <img
        src={require(`./../images/products/${products.product_img}`)}
        alt={products.product_img}
        width="200px" height="180px"
      />
  </Link>
      <h4>{products.product_set_name}</h4>
      <h5>${products.product_price}</h5>
      <p>set number:{products.product_set_numb}</p>
      <Link   to={`/product/${products.product_set_numb}`} className="link">
      <button className="add-cart">View Details</button>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="main-image-container">
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item">
            <img className="main-image" src={mainImage1} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h3>Follow us on Instagram</h3>
              <p>@brickbin_yyc</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="main-image" src={mainImage2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Visit our Facebook Page!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="main-image" src={mainImage3} alt="Third slide" />

          </Carousel.Item>
        </Carousel>
      </div>

      <h2 id="margin-element">New Arrivals</h2>

      <div>
        <Slider {...settings}>{newItems}</Slider>
      </div>

      <h2 id="margin-element">About Us</h2>
      <div className="grid-4-columns">
        <div className="box">
          <Card title="About Us" imageUrl={cardImage1} body="hello" />
        </div>
        <div className="box">
          <Card title="Buisness Hours" imageUrl={cardImage2} body="We are open 11:00AM - 7:00PM every week!" />
        </div>
        <div className="box">
          <Card title="Store Locations" imageUrl={cardImage3} body="2906 centre st ne and 7730 Macleod Trail SE" />
        </div>
      </div>

      <Modal show={showProductPage} onHide={handleProductPageClose}>
        <div
          style={{
            boxShadow: "0 0 50px 15px #fdd201",
            backgroundColor: "transparent",
            borderRadius: 8,
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Product Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Productviewpg></Productviewpg>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default RealHomePage;
