import React, { useState } from 'react'
import '../styles/Cart.css'
import { deleteItem,  deleteAllCart } from '../Modules/Cart'
import { useAuth0 } from "@auth0/auth0-react";


function Cart({ style, setStyle, cart, setCart }) {
  const {user, isAuthenticated } = useAuth0();
  const productList = cart?.products;
  const totalPrice = cart?.total_price;
  // const totalPriceArr = total.toString().split('');
  // totalPriceArr.splice(-3, 0, ' ');
  // const totalPrice = totalPriceArr.join('') + ':-';
  const [pressed, setPressed] = useState(false)

  const deleteFromCart = async(obj) => {
    if(!isAuthenticated) {
      return
    }
    const name = user.name.replace(' ','-')
    const updatedCart = await deleteItem(name, obj)
    setCart(updatedCart)
  }
  const deleteCart = async() => {
    if(!isAuthenticated) {
      return
    }
    const name = user.name.replace(' ','-')
    await deleteAllCart(name)
    setCart('')
  }
  return (
<section id="closedsidepanel" className={style}>
    <header className='cart-header'>
      <h4 className="cart-heading"><img className="cartLogo" src={require('../images/CIKC_round_logo.png')}></img>Your Basket</h4>
      <button onClick={() => setStyle('closedsidepanel')} className="closebtn">×</button>
    </header>
    {productList?.length<1 || !productList  ? <div className="cart-message"><h4>Your basket is empty</h4></div> : 
        <article className="cart-container">
        {productList?.map((obj, index) => {
          const priceArray = obj.price.toString().split('');
          priceArray.splice(-3, 0, ' ');
          const price = priceArray.join('') + ':-'
            return (
                  <article className="cart-items" key={index}> 
                    <div className="cart-img-container">
                      <button onClick={()=> deleteFromCart(obj)} className="deleteItemBtn">X</button>
                      <img className="cart-item-img" alt="item to appear" src={obj.img}/>
                    </div>
                    <div className="cart-item">
                      <p className="cart-item-text">{obj.name}</p>
                      <p className="cart-item-text">{`${price}`}</p>
                    </div>  
                  </article>
                )
            }
          )}
        </article>}
        {productList?.length <1 || !productList ? null : 
        <div className="checkout">
            <div className="total-price">
              <p className="price">Total Price (Incl. VAT):</p>
              <p className="price">{`${totalPrice}`}</p>
            </div>
            <button onClick={deleteCart} className="checkoutBtn">Go To Checkout</button>
          </div>}
    </section>
  )
}
export default Cart