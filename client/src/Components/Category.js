import React from 'react'
import SubCategory from './SubCategory'

function Category({ obj }) {
  const {subcategories} = obj
  console.log(subcategories)
  return (
    <>
    <section className='category-container'>
      <h3 className='category-name'><a href=''>Everything for {obj.category}</a></h3>
      <img className='img-container' alt='category ' src={obj.img}/>
    </section>
    <section className='subcategory-container'>
      {
        
      }
    </section>
    </>
  )
}

export default Category