import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from '../Components/Carousels'
import Category from '../Components/Category';


function Home() {
  return (
    <>
      <p>Black Friday Offers end in 9 days!</p>
      <Carousels />
      <Category />
    </>
  )
}

export default Home