import { Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Home from './Routes/Home'
import './App.css';
const mockData = require('./mock')


function App() {
  
  const [data, setData] = useState(mockData)

  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
  </>
  );
}

export default App;
