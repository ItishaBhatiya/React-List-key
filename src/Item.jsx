import React from 'react'
import './List.css'

const Item = ({title,thumbnail,category,price}) => {
  return (
    <div id='box2'>
        <h2>{title}</h2>
        <img src={thumbnail} />
        <h3>{category}</h3>
        <h4>{price}</h4>
        <button>BUY</button>          
    </div>
  )
}

export default Item