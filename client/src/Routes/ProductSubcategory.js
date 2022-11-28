import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav"
import "../styles/productSubcategory.css"

function ProductSubcategory({ itemsObj, category, name, cart, setCart }) {
  const {products} = itemsObj
  const navigate = useNavigate();
  const subCategoryHandler = (e) => {
    const id = e.target.id
    navigate(`/${category}/${name}/${id}`)
  }
  return (
    <>
      <Nav cart={cart} setCart={setCart} />
      <section className="product-subcategory-container">
        <section className="offers-container">
          <h4>Design & Comfort</h4>
          <img src={itemsObj.img}/>
        </section >
        <section className="subcategory-filter-container">
          <label>Sort by:</label>
          <select >
            <option value="lowest">lowest to highest price</option>
            <option value="highest">highest to lowest price</option>
          </select>
        </section>
        <main className="subcategory-items-container">
          {products.map( product => {
            console.log()
            return (
              <section className="subcategory-items">
                <img id={product.id} src={product.img} onClick={subCategoryHandler}/>
                <div className="subcategory-items-detail-container">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                </div>
              </section>
            )
          })}
        </main>
      </section>
    </>
  )
}

export default ProductSubcategory