import Nav from "../Components/Nav"
import React, { useState } from "react";
import { addToCart } from "../Modules/Cart"
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/product.css'
import blackBanner from '../imgs/blackBanner.jpg'
function Product({ item, setCart, cart }) {
  const {user, isAuthenticated } = useAuth0();
  const [loginAlert , setLoginAlert] = useState(false)
  const quantity = [1,2,3,4,5,6,7,8,9]
  console.log(item)
  const cartHandler = async(e) => {
    e.preventDefault()
    if (!isAuthenticated){
      return setLoginAlert(<p>Please login to add items to your cart</p>)
    }
    const name = user.name.replace(' ','-')
    const updatedCart = await addToCart(name, item)
    console.log(updatedCart,'updateed')
    setCart(updatedCart)
  }
  return (
    <>
    <Nav cart={cart} />
    {/* <section>
      <img className='black-banner'src={blackBanner}/>
    </section> */}
    <section className="product-container">
      <section className="product-visuals">
        <h3>{item.name}</h3>
        <img src={item.img}/>
      </section>
      <section className="product-details">
        <h4>{item.price}</h4>
        <p>{item.description}</p>
        <div className="product-actions">
          <select >
            {quantity.map(num => <option key= {num} value={num}>{num}</option>)}
          </select>
          <button onClick={cartHandler}>Add to cart</button>
          {loginAlert}
      </div>
      </section>
    </section>
    </>
  )
}

export default Product