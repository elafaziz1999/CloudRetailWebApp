import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import avatar from '../Assets/avatar-1.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navigationbar'>
      <div className="navigationbar-logo">
        <img src={logo} alt="CloudRetail-logo" />
        <p>CloudRetail</p>
      </div>
      <ul className="navigationbar-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to="/women">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("phones")}}><Link style={{ textDecoration: 'none' }} to= "/phones">Phones</Link>{menu==="phones"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("faqs")}}><Link style={{ textDecoration: 'none' }} to='/faq-page'>FAQs</Link>{menu==="faqs"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about-us")}}><Link style={{ textDecoration: 'none' }} to='/about-us'>About Us</Link>{menu==="about-us"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact-us")}}><Link style={{ textDecoration: 'none'}} to ='/contact-us'>Contact Us</Link>{menu==="contact-us"?<hr/>:<></>}</li>
      </ul>
      <div className='navigationbar-account'>
        <Link to="/my-account"><img src={avatar} alt=''/></Link>
      </div>
      <div className="navigationbar-login-cart">
        <Link to='/login'><button>Login/Register</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="navigationbar-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
