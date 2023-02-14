import React from 'react'
import './CardStyles.scss'
const Card = (props) => {
  return (
    <div className='card-container'>
       <div className='image-container'>
        <p>image will go in here in the future</p>
       </div>
       <div className='card-title'>
            <h3>{props.title}</h3>
       </div>
       <div className='card-body'>
            <p>{props.body}</p>
       </div>
       
    </div>
  )
}

export default Card
