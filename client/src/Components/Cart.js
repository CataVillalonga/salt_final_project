import React, { useState } from 'react'
import '../styles/Cart.css'
const basket = [{
  id: "637cbf662ec379b12d08a57a!",
  username:"bobbybish81",
  products:[
    {
      productId: 10,
      name: "BERGMUND Table and 8 chairs",
      price: "1 000:-",
      img: "https://www.ikea.com/gb/en/images/products/strandtorp-bergmund-table-and-8-chairs-brown-gunnared-medium-grey__1057145_pe848773_s5.jpg?f=xl"
    },
    {
      productId: 4,
      name: "HAFA Go",
      price: "1 649:-",
      img: "https://cdn.hornbach.se/data/shop/D04/001/780/491/371/340/DV_8_6250199_01_4c_SE_20180530164641.jpg"
    },
    {
      productId: 1,
      name: "HAFA Sun Square",
      price: "14 496:-",
      img: "https://cdn.hornbach.se/data/shop/D04/001/780/491/263/714/DV_8_5940145_01_4c_SE_20171101092928.jpg"
    }
  ],
  total_items: 3,
  total_price: 17145
}]

function Cart({ style, setStyle }) {
  const products = basket?.map(obj => obj.products);
  const totalPrice = basket?.map(obj => obj.total_price);
  const [pressed, setPressed] = useState(false)
  return (
<section id="closedsidepanel" className={style}>
    <header className='cart-header'>
    <h4 className="cart-heading">Your CIKC Basket</h4>
        <button onClick={() => setStyle('closedsidepanel')} href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</button>
    </header>
    {!products ? <div className="cart-message"><h4>Your basket is empty</h4></div> : 
        <article className="cart-container">
        {products?.map((obj, index) => {
          return obj.map((obj, index) =>  {
            return (
                  <article className="cart-items" key={index}> 
                    <div className="cart-img-container">
                      <button className="deleteItemBtn">X</button>
                      <img className="cart-item-img" alt="item to appear" src={obj.img}/>
                    </div>
                    <div className="cart-item">
                      <p className="cart-item-text">{obj.name}</p>
                      <p className="cart-item-text">{obj.price}</p>
                    </div>  
                  </article>
                )
              })
            }
          )}
          <div className="checkout">
            <div className="total-price">
              <p className="price">Total Price:</p>
              <p className="price">{`${totalPrice}:-`}</p>
            </div>
            <button className="checkoutBtn">Go To Checkout</button>
          </div>

        </article>}
    </section>
  )
}

export default Cart