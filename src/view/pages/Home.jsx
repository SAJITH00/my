import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import Cards from '../components/Cards'
function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-[#A38560]">
        <div>
          <Header/>
        </div>
        <div>
            <div className='text-center'>
             <h2>Welcome</h2>
            </div>
             <div className="grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3">
              {[...Array(12)].map((_, index) => (
                <Cards key={index} />
              ))}
            </div>

        </div>
        <div  className="bg-dark text-white p-3 mt-auto">
        <Footer/>
        </div>
    </div>
  )
}

export default Home