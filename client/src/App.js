import { Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Routes/Home'
import ProductCategory from './Routes/ProductCategory';
import './App.css';
const mockData = require('./mock')


function App() {

  const [data, setData] = useState()
  // const categories = data?.map( obj => {
  //   if(obj.category.includes(' ')){
  //     return obj.category.replace(' ', '-')
  //   }
  //   return obj.category
  // })

  useEffect(() => {
    setData(mockData)
  })

  return (
    <>
    <Routes>
        <Route path="/" element={<Home data={data}/>}></Route>
        {data?.map(categoryObj => {
          const {category} = categoryObj
        return <Route path={"/" + category} element ={<ProductCategory categoryObj={categoryObj}/>} /> 
      })}
    </Routes>
  </>
  );
}

export default App;
