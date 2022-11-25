import React,{ useState } from 'react'
// import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import '../styles/Nav.css';
import Login from '.././Auth/Login'
import Cart from './Cart'

function Nav() {
   const [style, setStyle] = useState('closedsidepanel')
  const handleCart = () => {
    setStyle('opensidepanel');
  }
  return (
    <nav>
      < Cart style={style} setStyle={setStyle}/>
      <section className='mobile'>
        <section className="section row">
          <section className="section column menu">
            <select name="categories">
              <option></option>
            </select>
          </section>
          <section className="section column logo">
            <h1>CIKC</h1>
          </section>
          <section className="section column iconAndButton">
            <a onClick={handleCart} className="a shoppingBagIcon" id="linkOne" href="#thingOne"><HiOutlineShoppingBag /></a>
            <button className="button" type="button">PAY</button>
          </section>
        </section>

        <section className="section row">
          <section className="section column nav--searchbar">
            <input type="text" placeholder="Search.."></input>
          </section>
        </section>
      </section>
      
      <section className="desktop">
        
        {/* <section className="section row">
          <section className="section column">
            <h1>Bedroom up to 40%</h1>
          </section>
          <button className="button"><i className="fa fa-sign-in"></i></button>
        </section> */}

        <section className="section row">
          <section className="section column logo">
            <h1>CIKC</h1>
          </section>
          <section className="section column searchbox">
            <input type="text" placeholder="Search.."></input>
          </section>
          <section className="section column iconAndButton">
            <a onClick={handleCart} className="a shoppingBagIcon" id="linkOne"><HiOutlineShoppingBag /></a>
            <Login/>
          </section>
        </section>

        <section className="section row categories">
          <a className="a column" href='http://localhost:3000/living-room'>Living Room</a>
          <a className="a column" href='http://localhost:3000/kitchen'>Kitchen</a>
          <a className="a column" href='http://localhost:3000/bedroom'>Bedroom</a>
          <a className="a column" href='http://localhost:3000/bathroom'>Bathroom</a>
          <a className="a column" href='http://localhost:3000/common-areas'>Common Areas</a>
        </section>

      </section>
    </nav>
  )
}

export default Nav