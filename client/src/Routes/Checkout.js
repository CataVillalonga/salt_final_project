import Nav from "../Components/Nav"
import { useState } from "react";
import { deleteAllCart } from '../Modules/Cart'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // code added
import "../styles/Checkout.css"

export default function Checkout({data, cart, setCart}) {

const { user } = useAuth0();

const navigate = useNavigate();

const [purchaseComplete, setpurchaseComplete] = useState(false);

const purchaseHandler = async (event) => {
  event.preventDefault();
  const name = user.name.replace(' ','-');
  await deleteAllCart(name);
  setpurchaseComplete(true);
  setCart();
  setTimeout(()=> {
    setpurchaseComplete(false);
    navigate('/');
  }, 3000)
}

return (
  <>
  <Nav data={data} cart={cart} setCart={setCart}/>
  <section className="checkout-container">
    {purchaseComplete ? <article className="purchase-message-container">
      <h3 className="purchase-message">Thank you for your purchase!</h3>
      <div className="purchase-img-container">
        <img className="purchase-img" src={require('../images/CIKC_round_logo.png')} alt="logo to appear"/>
      </div>
      </article> :
  <form autoComplete="off" onSubmit={event => purchaseHandler(event)}>
      <label className="checkout-label" for="name">Enter name and delivery address</label>
      <input className="checkout-input" type="text" name="name" placeholder="First Name" ></input>
      <input className="checkout-input" type="text" placeholder="Last Name" ></input>
      <input className="checkout-input" type="text" placeholder="Address" ></input>
      <div className="split-container">
        <input className="checkout-input" type="text" placeholder="City" ></input>
        <input className="checkout-input" type="text" placeholder="Post Code" ></input>
      </div>
      <div className="split-container">
        <input className="checkout-input" type="text" placeholder="Email Address" ></input>
        <input className="checkout-input" type="text" placeholder="Mobile No" ></input>
      </div>
      <div className="purchase-btn-container">
        <button type="submit">Confirm Purchase</button>
      </div>
    </form>}
  </section>
  </>
)
}
