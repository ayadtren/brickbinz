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
import mainImage1 from "../images/mainpic1.jpg";
import mainImage2 from "../images/mainpic2.jpg";
import mainImage3 from "../images/mainpic3.jpg";
import mainImage4 from "../images/mainpic4.jpg";
import mainImage5 from "../images/mainpic5.jpg";
import cardImage1 from "../images/card-image1.jpg";
import cardImage2 from "../images/card-image2.jpg";
import cardImage3 from "../images/card-image3.jpg";

const RealHomePage = () => {
<<<<<<< HEAD
  return (
    <div>
        <div className='main-image-container'>
            <div className='image-container'>
                <img className='main-image' src={picture} alt="Main picture" />
            </div>
        </div>
        <h1>some text </h1>
        <p>
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        </p>
    </div>
  )
}
=======
  const [products, setProducts] = useState([]);
>>>>>>> updatedbyayad

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

  //when user clicks on the item box, they will be directed to the product page.
  const newItems = products.map((products) => (
    <div className="slider-container">
      <Link to={`/product/${products.product_set_numb}`} className="link">
        <img
          src={require(`./../images/products/${products.product_img}`)}
          alt={products.product_img}
          width="200px" height="180px"
        />
      </Link>
      <h4>{products.product_set_name}</h4>
      <h5>${products.product_price}</h5>
      <p>set number:{products.product_set_numb}</p>
      <Link to={`/product/${products.product_set_numb}`} className="link">
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
          <Carousel.Item>
            <img className="main-image" src={mainImage4} alt="Third slide" />

          </Carousel.Item>
          <Carousel.Item>
            <img className="main-image" src={mainImage5} alt="Third slide" />

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
          <Card title="About Us" imageUrl={cardImage1} body="Locally owned small buisness that is passionate about Legos! No delivery, online purchase only. Pick up your order from one of two stores." />
        </div>
        <div className="box">
          <Card title="Buisness Hours" imageUrl={cardImage2} body="We are open 11:00AM - 7:00PM every week!" />
        </div>
        <div className="box">
          <Card title="Store Locations" imageUrl={cardImage3} body="NE Store Location: 2906 Centre St. NE." body2="SE Store Location: 7730 Macleod Trail SE." />
        </div>
      </div>
    </>
  );
};

export default RealHomePage;
