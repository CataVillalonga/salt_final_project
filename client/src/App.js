import { Routes, Route, json} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Routes/Home'
import ProductCategory from './Routes/ProductCategory';
import ProductSubcategory from './Routes/ProductSubcategory';
import Product from './Routes/Product';
import './App.css';

// const mockData = require('./mock')

function App() {

  const [data, setData] = useState()
  const [cart, setCart] = useState()

  const getProducts = async url => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getProducts('/api/products')
  },[])

//   useEffect(() => {
//     setData(mockData)
//  })
  
  const getCart = async url => {
    const response = await fetch(url);
    const data = await response.json();
    setCart(data);
  };

  useEffect(() => {
    getCart('/api/carts')
  },[])
  console.log(cart)

  return (
    <>
    <Routes>
        <Route path="/" element={<Home data={data}/>}></Route>
        {data?.map(categoryObj => {
          const {category} = categoryObj
        return <Route path={`/${category}`} element ={<ProductCategory categoryObj={categoryObj} category={category} data={data}/>} /> 
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map(itemsObj => {
            const {name} = itemsObj
            return <Route path={`/${category}/${itemsObj.name}`} element ={<ProductSubcategory itemsObj={itemsObj} category={category} name={name} data={data}/>} /> 
          })
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map(itemsObj => {
            const {products} = itemsObj
            return products.map( item =>{
              return <Route path={`/${category}/${itemsObj.name}/${item.id}`} element ={<Product item={item} setCart={setCart} data={data}/>} /> 
            })
          })
      })}
    </Routes>
  </>
  );
}

export default App;
