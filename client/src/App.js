import { Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Routes/Home'
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
    </Routes>
  </>
  );
}

export default App;
