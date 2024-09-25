import React from 'react'
import ProductCard from '../Product/ProductCard'
import './Cake.css'
import {products} from "./CakeData"
function CakeCard({ title }) {
  return (
    <div >
      <h1 className='cake__title'>{title}</h1>
      <div className='cake_card'>

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
    </div>
  )
}

export default CakeCard
