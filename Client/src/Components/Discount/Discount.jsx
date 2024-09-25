import React from 'react'
import "./discount.css"
function Discount() {
  return (
    <div className='discount__container'>
      <div className='discount'>
        <p className='discount__title'>Experience Flavor</p>
        <p className='discount_percent'> Get 25% off</p>
        <button className='discount__btn'>Add to cart</button>
      </div>
      <div className='discount__image'>
        <img src="https://img.freepik.com/premium-photo/doner-kebab-doner-kebap-fast-food-flatbread-wooden-board_770123-1281.jpg" alt="" />
      </div>
    </div>
  )
}

export default Discount
