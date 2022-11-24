import React from 'react'
import SubCategory from './SubCategory'

function Category({ obj }) {
  const {subcategories} = obj
  console.log(subcategories)
  return (
    <>
    <h3 className='category-name'><a href=''>Everything for {obj.category}</a></h3>
    <section className='category-container'>
      <img className='img-container' alt='category ' src={obj.img}/>
    </section>
    <section className='subcategory-container'>
      
      {/* <img className='img-container' alt='category ' src={obj.img}/>
      <img className='img-container' alt='category ' src={obj.img}/>
      <img className='img-container' alt='category ' src={obj.img}/>
      <img className='img-container' alt='category ' src={obj.img}/> */}
      
    </section>
    </>
  )
}

export default Category