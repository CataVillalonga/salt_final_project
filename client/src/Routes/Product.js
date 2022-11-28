import Nav from "../Components/Nav"
import React, { useState } from "react";
import { addToCart } from "../Modules/Cart"
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/product.css'
import blackBanner from '../imgs/blackBanner.jpg'
function Product({ item, setCart, data }) {
  const {user, isAuthenticated } = useAuth0();
  const [loginAlert , setLoginAlert] = useState(false)
  const quantity = [1,2,3,4,5,6,7,8,9]
  const cartHandler = () => {
    if (!isAuthenticated){
      console.log(user)
      return setLoginAlert(<p>Please login to add items to your cart</p>)
    }
    console.log(user)
  }
  return (
    <>
    <Nav data={data}/>
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