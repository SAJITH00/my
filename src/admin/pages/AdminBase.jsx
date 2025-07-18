import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import AdminSidebar from '../components/AdminSidebar'

function AdminBase() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <div className="w-100">
           <AdminHeader/>
        </div>
        <div  className="d-flex flex-grow-1">
            <div className="flex-shrink-0">
           <AdminSidebar/>
            </div>
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      
            </div>

        </div>
        <div className="w-100">
        <AdminFooter/>
        </div>
    </div>
  )
}

export default AdminBase