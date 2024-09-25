import React from 'react'
import {Link} from 'react-router-dom'
import "./Category.css"
function CatagoryLink({data}) {
    console.log(data)
  return (
    <div className='category__link'>
      <li> <a href="">{data.name}</a> </li>
    </div>
  )
}

export default CatagoryLink
