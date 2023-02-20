import React from 'react'
import picture from "../images/mainpagepic.jpg";
import sampleimage from '../images/sampleimage.jpg'
import Card from '../components/Card';
import './HomePageStyles.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Carousel} from 'react-bootstrap';
//<img className='main-image' src={picture} alt="Main picture" /> 
const RealHomePage = () => {
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
                <h3>First slide label</h3>
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
                <h3>Second slide label</h3>
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
      <h2></h2>
      
    </>
  )
}

export default RealHomePage
