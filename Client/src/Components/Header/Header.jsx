import React, { useEffect, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import './Header.css'
function Header() {
    const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`header__container ${show && "header__black"}}`}>

    <div className='header'>
      <div className='logo'>
        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/logo-dark.png" alt="" />
      </div>
      <div className='menus'>
        <p> Menus</p>
      </div>
      <div>
      <IoMdCart size={30}/>
      </div>
    </div>
    </div>
  )
}

export default Header
