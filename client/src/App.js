import { Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Routes/Home'
import ProductCategory from './Routes/ProductCategory';
import ProductSubcategory from './Routes/ProductSubcategory';
import Product from './Routes/Product';
import './App.css';
const mockData = require('./mock')


function App() {

  const [data, setData] = useState()

  useEffect(() => {
    setData(mockData)
  })

  return (
    <>
    <Routes>
        <Route path="/" element={<Home data={data}/>}></Route>
        {data?.map(categoryObj => {
          const {category} = categoryObj
        return <Route path={`/${category}`} element ={<ProductCategory categoryObj={categoryObj} category={category}/>} /> 
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map(itemsObj => {
            const {name} = itemsObj
            return <Route path={`/${category}/${itemsObj.name}`} element ={<ProductSubcategory itemsObj={itemsObj} category={category} name={name}/>} /> 
          })
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map(itemsObj => {
            const {products} = itemsObj
            return products.map( item =>{
              return <Route path={`/${category}/${itemsObj.name}/${item.id}`} element ={<Product item={item}/>} /> 
            })
          })
      })}
    </Routes>
  </>
  );
}

export default App;
