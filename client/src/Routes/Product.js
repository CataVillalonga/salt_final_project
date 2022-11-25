import Nav from "../Components/Nav"
import '../styles/product.css'
import blackBanner from '../imgs/blackBanner.jpg'
function Product({ item }) {
  const quantity = [1,2,3,4,5,6,7,8,9]
  console.log(item)
  return (
    <>
    <Nav />
    {/* <section>
      <img className='black-banner'src={blackBanner}/>
    </section> */}
    <section className="product-container">
      <section className="product-visuals">
        <h3>{item.name}</h3>
        <img src={item.img}/>
      </section>
      <section className="product-details">
        <h4>{item.price}</h4>
        <p>{item.description}</p>
        <div className="product-actions">
          <select >
            {quantity.map(num => <option key= {num} value={num}>{num}</option>)}
          </select>
          <button>Add to cart</button>
      </div>
      </section>
    </section>
    </>
  )
}

export default Product