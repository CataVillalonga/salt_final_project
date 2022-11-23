import React from 'react'
// import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav>
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
            <a className="a shoppingBagIcon" id="linkOne" href="#thingOne"><HiOutlineShoppingBag /></a>
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
        
        <section className="section row">
          <section className="section column">
            <h1>Bedroom up to 40%</h1>
          </section>
        </section>

        <section className="section row">
          <section className="section column logo">
            <h1>CIKC</h1>
          </section>
          <section className="section column searchbox">
            <input type="text" placeholder="Search.."></input>
          </section>
          <section className="section column iconAndButton">
            <a className="a shoppingBagIcon" id="linkOne" href="#thingOne"><HiOutlineShoppingBag /></a>
            <button className="button" type="button">PAY</button>
          </section>
        </section>

        <section className="section row">
          <section className="section column">Living Room</section>
          <section className="section column">Kitchen</section>
          <section className="section column">Bedroom</section>
          <section className="section column">Bathroom</section>
          <section className="section column">Common Areas</section>
          {/* <section className="section column"><link rel="stylesheet" href="styles.css">Living Room</link></section>
          <section className="section column"><link rel="stylesheet" href="styles.css">Kitchen</link></section>
          <section className="section column"><link rel="stylesheet" href="styles.css">Bedroom</link></section>
          <section className="section column"><link rel="stylesheet" href="styles.css">Bathroom</link></section>
          <section className="section column"><link rel="stylesheet" href="styles.css">Common Areas</link></section> */}
        </section>

      </section>
    </nav>
  )
}

export default Nav