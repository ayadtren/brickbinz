import React from 'react'
import { Link } from "react-router-dom";
import './CardStyles.scss'

//Enter title, image url and body text. 
//import image in the homepage though...
const Card = ({title, imageUrl, body, body2}) => {
  return (
    <div className='card-container'>
       <div className='image-container'>
          <img id='card-img' src= {imageUrl} alt='samplepic'/>
       </div>
       <div className='card-content'>
          <div className='card-title'>
                <h3>{title}</h3>
          </div>
          <div className='card-body'>
              {body}
              <br/>
              {body2}
          </div>
          {/* <div className='card-btn'>
              <button>
                <a>
                  <Link to="/">See more</Link>
                </a>
              </button>
          </div> */}
        </div>
    </div>
  )
}

export default Card
