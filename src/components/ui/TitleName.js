import React from 'react'
import "./TitleNameStyles.css"


function TitleName(props) {
  return (
    <div className='titleBox'>
      <h1>{props.name}</h1>
    </div>
  )
}

export default TitleName
