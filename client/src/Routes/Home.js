import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from '../Components/Carousels'
import Category from '../Components/Category';
import SubCategory from '../Components/SubCategory';
import Nav from '../Components/Nav'
import '../styles/main.css'
function Home({ data }) {
  return (
    <>
      <Nav />
      <Carousels />
      <main className="main-container">
        <p className='main-title'> Shop by category </p>
        <section className='category-container'>
          {data?.map(obj => {
            return <Category obj={obj}/>
          })}
        </section>
        <p className='main-title'> Shop by item </p>
        <section className='subcategory-container'>
        {data?.map(obj => {
          const {subcategories} = obj
          return <SubCategory subcategory={subcategories}/>
        })}
        </section>
      </main>
    </>
  )
}
export default Home