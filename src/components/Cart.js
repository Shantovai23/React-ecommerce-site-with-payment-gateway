import React, { useContext } from "react";
import { CartContext } from "../global/CartContext";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  toast.configure()

const Cart = (props) => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);


  const handleToken = async (token) => {
    alert('Wait 5-10 seconds for confirmation message')

    const product = {name: 'All Products', price: totalPrice}
      const response = await axios.post('https://w7gqb.sse.codesandbox.io/checkout', {
          token,
          product
      });
      const {status} = response.data;
      console.log(status);
      if(status === 'success'){
        
         
          dispatch({type: 'EMPTY'});
          props.history.push(`/React-ecommerce-site-with-payment-gateway`)
          toast.success("You have Paid Successfully", {
            position: toast.POSITION.BOTTOM_RIGHT
          });

      } else {
        dispatch({type: 'EMPTY'});
        props.history.push(`/React-ecommerce-site-with-payment-gateway`)
        toast.error("Tomar Account e Taka Nai Bro!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }

}

  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  <img src={cart.image} alt="not found" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">${cart.price}.00</span>
                <span className="inc" onClick={()=>dispatch({type:'INC',id:cart.id,cart})}>
                  <i className="fas fa-plus"></i>
                </span>
                <span className="product-quantity">{cart.qty}</span>
                <span className="dec" onClick={()=>dispatch({type:'DEC',id:cart.id,cart})}>
                  <i className="fas fa-minus"></i>
                </span>
                <span className="product-total-price">${cart.price*cart.qty}.00</span>
                <span className="delete-product" onClick={()=>dispatch({type:'DELETE',id:cart.id,cart})}>
                  <i className="fas fa-trash-alt"></i>
                </span>
              </div>
            ))
          : "Sorry your cart is currently empty"}
      </div>
      {shoppingCart.length>0 && <div className='cart-summery'>
        <div className='summery'>
          <h3>Cart Summery</h3>
          <div className='total-items'>
            <div className='items'> Total Items</div>
            <div className='items-count'> {qty}</div>
          </div>
          <div className='total-price-section'>
            <div className='just-title'>Total Price</div>
            <div className='items-price'>${totalPrice}.00</div>
          </div>
          <div className='stripe-section'>
           <StripeCheckout 
          //  stripeKey='pk_test_51ITpDVLiXRZbyrOF45uQsF3D6BgBGYpKouv4c5vV3WPX42yhkHo8zYdO6FFPnVeyyRIOLmMOYpmvgSZ41Kno0WC000hzAtqX2Q'
           pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg
           stripeKey='pk_test_51ITpDVLiXRZbyrOF45uQsF3D6BgBGYpKouv4c5vV3WPX42yhkHo8zYdO6FFPnVeyyRIOLmMOYpmvgSZ41Kno0WC000hzAtqX2Q'
           token={handleToken}
           billingAddress
           shippingAddress
           amount={totalPrice*100}
           name='All Products'
           
           >

           </StripeCheckout>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Cart;
