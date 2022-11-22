import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from '../Components/Carousels'
import Category from '../Components/Category';

import React from 'react'
import Nav from '../Components/Nav'


function Home() {
  return (
    <>
      <p>Black Friday Offers end in 9 days!</p>
      <Nav />
      <Carousels />
      <Category />
    </>
  )
}

export default Home