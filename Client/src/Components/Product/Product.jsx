import React from 'react'
import './Product.css'
import {products} from './cardSample'
import ProductCard from './ProductCard'
function Product() {
  return (
    <div className='product__container'>
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
  )
}

export default Product
