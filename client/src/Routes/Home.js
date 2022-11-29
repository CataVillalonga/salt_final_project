import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from '../Components/Carousels'
import Category from '../Components/Category';
import Nav from '../Components/Nav'
import '../styles/main.css'
function Home({ data, cart, setCart }) {
  
  return (
    <>
      <Nav data={data} cart={cart} setCart={setCart}/>
      <Carousels />
      <main className="main-container">
        {data?.map(obj=> {
          return <Category  obj={obj}/>
        })}
      </main>
    </>
  )
}
export default Home