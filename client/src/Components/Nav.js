import React from 'react'
// import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav>
      <section className='mobile'>
        <section className="section nav--menuLogoBag">
          <ul>
            <li className="li categories"><select name="categories">
              <option></option>
            </select></li>
            <li className="li">CIKC</li>
            <li className="li"><a id="linkOne" href="#thingOne"><HiOutlineShoppingBag /></a></li>
          </ul>
        </section>
        <section className="section nav--searchbar">
          <input type="text" placeholder="Search.."></input>
        </section>
      </section>
      
      <section className="desktop">
        <section >
          <h1>Bedroom up to 40%</h1>
          <ul>
            <li>CIKC</li>
            <li><input type="text" placeholder="Search.."></input></li>
            {/* <li><a id="linkOne" href="#thingOne"><AiOutlineHeart /></a></li> */}
            <li><a id="linkOne" href="#thingOne"><HiOutlineShoppingBag /></a></li>
            <button type="button">PAY</button>
          </ul>
        </section>
        <section>
          <ul>
            <li>Living Room</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Bathroom</li>
            <li>Common Areas</li>
            {/* <link rel="stylesheet" href="styles.css">Living Room</link> */}
            {/* <link rel="stylesheet" href="styles.css">Kitchen</link>
            <link rel="stylesheet" href="styles.css">Bedroom</link>
            <link rel="stylesheet" href="styles.css">Bathroom</link>
            <link rel="stylesheet" href="styles.css">Common Areas</link> */}
          </ul>
        </section>
      </section>
    </nav>
  )
}

export default Nav