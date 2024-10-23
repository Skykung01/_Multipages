import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Layout from './layout/Layout/Layout'
import Home from './Pages/Home/Home'
import Todo from './Pages/Todo/Todo'
import Calculator from './Pages/Calculator/Calculator'
import Companent from './Pages/Companent/Companent'
import Products from './Pages/Products/Products'
import Carts from './Pages/Carts/Carts'
import Animation from './Pages/Animation/Animation'
import Login from './Pages/Login/Login'



import { fetchProducts } from './data/products'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'



function App() {
  const [token, setToken] = useState('')
  const [role , setRole] = useState('')
  const [products, setproducts] = useState([])
  const [carts, setcarts] = useState([])

  useState(() => {
    setproducts(fetchProducts())
  }, [])

  if (token === '') {
    return <Login setToken={setToken}/>
  } else {
      return (
        <>
          <div className="App-container">
            <HashRouter>
              <Routes>
                <Route element={<Layout products={products} carts={carts} setToken={setToken} />}>
                  <Route path="/" element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/animation' element={<Animation />} />
                  <Route path='/calculator' element={<Calculator />} />
                  <Route path='/companent' element={<Companent />} />
                  <Route path='/todo' element={<Todo />} />
                  <Route path='/Products' element={<Products products={products} carts={carts} setcarts={setcarts} />} />
                  <Route path='/Carts' element={<Carts carts={carts} setcarts={setcarts} />} />
                  
                </Route>
              </Routes>
            </HashRouter>
          </div>
        </>
      )
    }
  }


export default App
