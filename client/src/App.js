import { Routes, Route, json} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCart } from "./Modules/Cart"
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Routes/Home'
import Profile from './Auth/Profile'
import ProductCategory from './Routes/ProductCategory';
import ProductSubcategory from './Routes/ProductSubcategory';
import Product from './Routes/Product';
import './App.css';

// const mockData = require('./mock')

function App() {

  const [data, setData] = useState()
  const [cart, setCart] = useState()
  const {user, isAuthenticated } = useAuth0();

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
  

  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      const name = user.name.replace(' ','-')
      console.log(name)
      getCart(name).then((res) => setCart(res))
    }
  },[isAuthenticated])

  return (
    <>
    <Routes>
        <Route path="/Profile" element={<Profile data={data} cart={cart}/>}></Route>
        <Route path="/" element={<Home data={data} cart={cart} setCart={setCart}/>}></Route>
        {data?.map((categoryObj, i )=> {
          const {category} = categoryObj
        return <Route path={`/${category}`} element ={<ProductCategory  key={i} cart={cart} setCart={setCart} categoryObj={categoryObj} category={category} data={data}/>} /> 
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map((itemsObj, i) => {
            const {name} = itemsObj
            return <Route path={`/${category}/${itemsObj.name}`} element ={<ProductSubcategory   key={i} cart={cart} setCart={setCart} itemsObj={itemsObj} category={category} name={name} data={data}/>} /> 
          })
      })}
      {data?.map(categoryObj => {
          const {category} = categoryObj
          const {subcategories} = categoryObj
          return subcategories.map(itemsObj => {
            const {products} = itemsObj
            return products.map( (item, i) =>{
              return <Route path={`/${category}/${itemsObj.name}/${item.id}`} element ={<Product key={i} cart={cart} item={item} setCart={setCart} data={data}/>} /> 
            })
          })
      })}
    </Routes>
  </>
  );
}

export default App;
