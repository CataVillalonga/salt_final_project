import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav"
import '../styles/productCategory.css'

function ProductCategory({ categoryObj, category, data }) {
  const { subcategories } = categoryObj
  const navigate = useNavigate();

  const categoryHandler = (e) => {
    const subCat = e.target
    navigate(`/${category}/${subCat.innerText}`)
    console.log(`/${category}/${subCat.innerText}`)
  }

  return (
    <>
    <Nav data={data}/>
    <section className="product-Category-container">
      <section className="banner-container">
        <img   alt='category'src={categoryObj.img}/>
        <p>{categoryObj.category}</p>
      </section >
      <h5 className="product-title">Shop by product:</h5>
      <section className="products-container">
        {subcategories.map( item => {
          console.log(item.img)
          return (
            <section className="category-items" >
              <img  alt='category' src={item.img}/>
              <p onClick={categoryHandler}>{item.name}</p>
            </section>
          )
        })}
      </section>
    </section>
    </>
  )
}

export default ProductCategory