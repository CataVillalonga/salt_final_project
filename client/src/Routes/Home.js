import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from '../Components/Carousels'
import Category from '../Components/Category';
import Nav from '../Components/Nav'
import '../styles/main.css'


function Home({ data }) {
  
  return (
    <>
      <Nav />
      <h2 className="h1">Black Friday Offers end in 9 days!</h2>
      <Carousels />
      <main className="main-container">
        {data?.map(obj => {
          return <Category obj={obj}/>
        })}
      </main>
    </>
  )
}

export default Home