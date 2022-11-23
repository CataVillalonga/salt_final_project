import Nav from "../Components/Nav"
import '../styles/productCategory.css'

function ProductCategory({ categoryObj }) {
  const { subcategories } = categoryObj
  console.log(subcategories)
  return (
    <>
    <Nav />
    <section className="product-Category-container">
      <section className="banner-container">
        <img   alt='category'src={categoryObj.img}/>
        <p>{categoryObj.category}</p>
      </section >
      <h5>Shop by product:</h5>
      <section className="items-container">
        {subcategories.map( item => {
          return (
            <section className="items">
              <img alt='category' src={categoryObj.img}/>
              <p>{item.name}</p>
            </section>
          )
        })}
      </section>
    </section>
    </>
  )
}

export default ProductCategory