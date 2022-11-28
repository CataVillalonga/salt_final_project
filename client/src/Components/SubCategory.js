import '../styles/subcategory.css'
function SubCategory({ subcategory }) {
  return (
    <>
      {subcategory?.map(category => {
        return (
          <section className='subcategory'>
          <img alt='category ' src={category.img}/>
          <p>{category.name}</p>
          </section>
        )

      })}
    </>
  )
}

export default SubCategory