import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './view/pages/Home'
import Cart from './view/pages/Cart'
import Login from './view/pages/Login'
import AdminHome from './admin/pages/AdminHome'
import AdminProduct from './admin/pages/AdminProduct'
import AdminSellers from './admin/pages/AdminSellers'
import AdminSetting from './admin/pages/AdminSetting'
import AdminBase from './admin/pages/AdminBase'
import Cards from './view/components/Cards'
import CartsItem from './view/components/CartsItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Login register/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/adminproduct' element={<AdminProduct/>}/>
      <Route path='/adminseller' element={<AdminSellers/>}/>
      <Route path='/adminsetting' element={<AdminSetting/>}/>
      <Route path='/adminbase' element={<AdminBase/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/cartsitem' element={<CartsItem/>}/>

     </Routes>
    </>
  )
}

export default App