import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../global/CartContext.js'

const Navbar = () => {
  const {qty}=useContext(CartContext)
  return (
    <nav>
      <ul className='left'>
        <li><Link to='/'>KenaKata.com</Link></li>
      </ul>
      <ul className='right'>
        <li><Link to='React-ecommerce-site-with-payment-gateway/cart'><span className='shoppingCart'><i className="fas fa-cart-plus"></i><span className='cartCount'>{qty}</span></span></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar