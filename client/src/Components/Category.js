import React from 'react'
import { useNavigate } from "react-router-dom";
import SubCategory from './SubCategory'

function Category({ obj }) {
  const {subcategories} = obj
  const navigate = useNavigate();
  const xHandler = () => {
    navigate('/bedroom');
  }
  return (
    <section className='section categories-subcategories'>
    <h3 className='category-name' onClick={xHandler}>Everything for {obj.category}</h3>
    <section className='category-container'>
      <img className='img-container' alt='category ' src={obj.img}/>
    </section>
    <section className='subcategory-container'>
      {obj.subcategories?.map(item => {
        return <SubCategory item={item}/>
      })}  
    </section>
    </section>
  )
}

export default Category