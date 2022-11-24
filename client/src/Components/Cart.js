import React from 'react'
import '../styles/Cart.css'

function Cart() {
  return (
<aside id="mySidepanel" className="sidepanel">
    <div className='cart-header'>
        <h3>Your Basket</h3>
        <button href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</button>
    </div>

</aside>
  )
}

export default Cart