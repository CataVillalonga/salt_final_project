import React from 'react'
import { useState } from 'react';
// import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import '../styles/Nav.css';

function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  
  function toggle () {
    isOpen === true ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <nav>
      <section className='mobile'>

        <section className="section row">
          <aside className="section column menu">
            <div id="mySidepanel" className="sidepanel" style={ {width: isOpen ? '300px' : '0px'} }>
              <a href="javascript:void(0)" className="closebtn" onClick={toggle}>×</a>
              <a className="a column" href='http://localhost:3000/living-room'>Living Room</a>
              <a className="a column" href='http://localhost:3000/kitchen'>Kitchen</a>
              <a className="a column" href='http://localhost:3000/bedroom'>Bedroom</a>
              <a className="a column" href='http://localhost:3000/bathroom'>Bathroom</a>
              <a className="a column" href='http://localhost:3000/common-areas'>Common Areas</a>
            </div>
            <button className="openbtn" onClick={toggle}>☰</button>
          </aside>
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
        
        {/* <section className="section row">
          <section className="section column">
            <h1>Bedroom up to 40%</h1>
          </section>
        </section> */}

        <section className="section row">

          <section className="section column logo">
            <h1>CIKC</h1>
          </section>

          <section className="section column searchbox">
            <input type="text" placeholder="Search.."></input>
          </section>
          <section className="section column iconAndButton">
            <a className="a shoppingBagIcon" id="linkOne" href="#thingOne"><HiOutlineShoppingBag /></a>
            <button className="button"><i className="fa fa-sign-in"></i></button>
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

      <h2 className="h1">Black Friday Offers end in 9 days!</h2>
    </nav>
  )
}

export default Nav