import React from 'react'
import picture from "../images/mainpagepic.jpg";
import Card from '../components/Card';
import './HomePageStyles.scss'

const RealHomePage = () => {
  return (
    <>
        <div className='main-image-container'>
            <div className='photo-container'>
                <img className='main-image' src={picture} alt="Main picture" />
            </div>
        </div>
        <h2>About us thingy majig</h2>
        <div className="grid-4-columns">
          <div className='box'>
            <Card title="About Us" body="hello"/>
          </div>
          <div className='box'>
          <Card title="Buisness Hours" body="hello"/>
          </div>
          <div className='box'>
          <Card title="Store Locations" body="hello"/>
          </div>
         
      </div>
      <h2></h2>
      
    </>
  )
}

export default RealHomePage
