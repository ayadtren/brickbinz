import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../components/Card";
import picture from "../images/mainpagepic.jpg";
import sampleimage from "../images/sampleimage.jpg";
import "../styles/HomePageStyles.scss";
//for the sliders and carousels.
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Modal } from "react-bootstrap";
import Productviewpg from "../pages/Productviewpg"
//<img className='main-image' src={picture} alt="Main picture" />
const RealHomePage = () => {
  const [products, setProducts] = useState([]);

  const [showProductPage, setShowProductPage] = useState(false);
  const handleProductPageClose = () => {
    setShowProductPage(false);
  };
  const handleProductPageOpen = () => {
    setShowProductPage(true);
  };

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
      <img
        src={require(`./../images/products/${products.product_img}`)}
        alt={products.product_img}
        width="200px" height="180px"
      />
      <h4>{products.product_set_name}</h4>
      <h5>${products.product_price}</h5>
      <p>set number:{products.product_set_numb}</p>
      <button className="add-cart" onClick={handleProductPageOpen}>View Details</button>
    </div>
  ));

  return (
    <>
      <div className="main-image-container">
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item">
            <img className="main-image" src={picture} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h3>Follow us on Instagram</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="main-image" src={sampleimage} alt="Second slide" />

            <Carousel.Caption>
              <h3>Visit our Facebook Page!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="main-image" src={picture} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
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
          <Card title="About Us" imageUrl={sampleimage} body="hello" />
        </div>
        <div className="box">
          <Card title="Buisness Hours" imageUrl={sampleimage} body="hello" />
        </div>
        <div className="box">
          <Card title="Store Locations" imageUrl={sampleimage} body="hello" />
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