import React, { useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import '../styles/Nav.css';
import Login from '.././Auth/Login'
import Cart from './Cart'
function Nav({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState('closedsidepanel')
  const [searchKey, setSearchKey] = useState('')
  const navigate = useNavigate();

  function toggle () {
    isOpen === true ? setIsOpen(false) : setIsOpen(true)
  }

  const handleSearch = (e) => {
    setSearchKey(e.target.value)
    console.log('keyTerm', e.target.value);
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      const keyword = searchKey.toLowerCase().replace(' ', '-');
      const categoryFound = data.find(obj => obj.category.toLowerCase() === keyword.toLowerCase())
      const subCategoryFound = data.find(obj => obj.subcategories.find(obj => obj.name.toLowerCase() === searchKey.toLowerCase()))
      if (categoryFound) {
        window.location.pathname = `/${keyword}`
      }
      if (subCategoryFound) {
        const category = subCategoryFound.category.toLowerCase()
        window.location.pathname = `/${category}/${keyword}`
      }
    }
  }
  
  const handleCart = () => {
    setStyle('opensidepanel');
  }

  const logoHandler = () => {
    navigate('/');
  }

  return (
    <nav>
      <Cart style={style} setStyle={setStyle}/>
      <section className='mobile'>
        <section className="section row">
            <aside className="section column menu">
              <div id="mySidepanel" className="sidepanel" style={ {width: isOpen ? '300px' : '0px'} }>
                <a className="closebtn" onClick={toggle}>×</a>
                <a className="a column" href='http://localhost:3000/'>Home</a>
                <a className="a column" href='http://localhost:3000/living-room'>Living Room</a>
                <a className="a column" href='http://localhost:3000/kitchen'>Kitchen</a>
                <a className="a column" href='http://localhost:3000/bedroom'>Bedroom</a>
                <a className="a column" href='http://localhost:3000/bathroom'>Bathroom</a>
                <a className="a column" href='http://localhost:3000/common-areas'>Common Areas</a>
              </div>
              <button className="openbtn" onClick={toggle}>☰</button>
            </aside>
          
          
          <section className="section column logo">
            <img className="CIKC-Logo" src={require('../images/CIKC_logo.png')} onClick={logoHandler}></img>
          </section>
          <section className="section column iconAndButton">
            <a onClick={handleCart} className="a shoppingBagIcon" id="linkOne"><HiOutlineShoppingBag /></a>
            <Login/>
          </section>
        </section>
        <section className="section row">
          <section className="section column nav--searchbar">
            <input type="text" onKeyDown={(e) => handleEnter(e)} onChange={handleSearch} value={searchKey} placeholder="&#x1F50D; Search.." />
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
            <img className="CIKC-Logo" src={require('../images/CIKC_logo.png')} onClick={logoHandler}></img>
          </section>
          <section className="section column searchbox">
            <input type="text" onChange={handleSearch} value={searchKey} placeholder="&#x1F50D; Search.." />
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

        <p className="p">Black Friday Offers end in 9 days!</p>

      </section>
    </nav>
  )
}
export default Nav