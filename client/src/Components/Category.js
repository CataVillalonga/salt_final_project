import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/category.css'

function Category({ obj }) {
  const {subcategories} = obj
  const navigate = useNavigate();
  const xHandler = () => {
    navigate('/bedroom');
  }
  return (
    <section className='category'>
      <img alt='category ' src={obj.img}/>
      <p>{obj.category}</p>
    </section>
  )
}

export default Category