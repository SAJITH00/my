import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import CartsItem from '../components/CartsItem'

function Cart() {
  return (
    <div className="d-flex flex-column  bg-[#A38560] min-vh-100">
        <div>
          <Header/>
        </div>
        <div>
          <h2>cart </h2>
          <div>
          <CartsItem/>
          </div>
           
        </div>
        <div  className="bg-dark text-white p-3 mt-auto">
        <Footer/>
        </div>
    </div>
    
  )
}

export default Cart