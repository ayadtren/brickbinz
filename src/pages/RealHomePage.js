import React from 'react'
import picture from "../images/mainpagepic.jpg";
import sampleimage from '../images/sampleimage.jpg'
import Card from '../components/Card';
import './HomePageStyles.scss'

const RealHomePage = () => {
  return (
    <>
        <div className='main-image-container'>
          <img className='main-image' src={picture} alt="Main picture" /> 
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
