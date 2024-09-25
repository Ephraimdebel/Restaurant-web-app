import React from 'react'
import {foods} from "./Foods"
import CatagoryLink from './CatagoryLink'
import './Category.css'
function Category() {
  return (
    <section className='category__container'>
        
    <div className='category'>
        {
            foods.map((data,i)=>{
                return(
                    <CatagoryLink key={i} data={data}/>
                )
            })
        }
        </div>
    </section>
  )
}

export default Category
