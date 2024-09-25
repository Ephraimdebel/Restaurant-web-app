import React from 'react'
import {products} from "../Product/cardSample"
import ProductCard from '../Product/ProductCard'
import "./Chef.css"
function Chef() {
  return (
    <>
    <p className='chef__title'>Chef recommendations</p>
    <div className='chef__container'>
        
      {
        products.map((data, i) => {
          return (
            <ProductCard
              key={i}
              image={data.image}
              title={data.title}
              price={data.price}
              desc={data.desc}
            />
          )
        })
      }
    </div>
    </>
  )
}

export default Chef
