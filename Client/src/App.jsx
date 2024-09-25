
import './App.css'
import Banner from './Components/Banner/Banner'
import Cake from './Components/Cake/Cake'
import Category from './Components/Category/Category'
import Chef from './Components/chefRecommend/Chef'
import Discount from './Components/Discount/Discount'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Layout from './Components/Layout/Layout'
import Product from './Components/Product/Product'

function App() {

  return (
    <>
      <Banner />
      <Category />
      <Product />
      <Chef />
      <Discount />
      <Cake />
      <Footer />
    </>
  )
}

export default App
