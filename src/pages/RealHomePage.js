import React, { useState, useEffect } from "react";
import picture from "../images/mainpagepic.jpg";
import sampleimage from '../images/sampleimage.jpg'
import Card from '../components/Card';
import './HomePageStyles.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
//for the sliders and carousels.
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//<img className='main-image' src={picture} alt="Main picture" /> 
const RealHomePage = () => {
  const [products, setProducts] = useState([]);
  
  //slider settings 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
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
    const newItems = products.map((products) =>
      <div>
        <h4>name: {products.product_set_name}</h4>
        <h5>${products.product_price}</h5>
        <p>set number:{products.product_set_numb}</p>
        <button>View Details</button>
      </div>
    );
    
  return ( 
    <>
        <div className='main-image-container'>
          
          <Carousel>
            <Carousel.Item>
              <img
                className='main-image'
                src={picture}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Follow us on Instagram</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='main-image'
                src={sampleimage}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Visit our Facebook Page!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='main-image'
                src={picture}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div> 

        <h2>New Arrivals</h2>
        <div>
        <Slider {...settings}>
          {newItems}
          <div>
            <h3>Product4</h3>
          </div>
          <div>
            <h3>Product5</h3>
          </div>
          <div>
            <h3>Product6</h3>
          </div>
          <div>
            <h3>Product7</h3>
          </div>
          <div>
            <h3>Product8</h3>
          </div>
          <div>
            <h3>Product9</h3>
          </div>
        </Slider>
      </div>
        <h2>About us thingy majig</h2>
        <div className="grid-4-columns">
          <div className='box'>
            <Card title="About Us" imageUrl={sampleimage} body="hello"/>
          </div>
          <div className='box'>
          <Card title="Buisness Hours" imageUrl={sampleimage} body="hello"/>
       
          </div>
          <div className='box'>
          <Card title="Store Locations" imageUrl={sampleimage} body="hello"/>
          </div>
         
      </div>
    
      
    </>
  
  )
}

export default RealHomePage
