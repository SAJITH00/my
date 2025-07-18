import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import AdminSidebar from '../components/AdminSidebar'

function AdminSetting() {
  
  return (
<div className="d-flex flex-column min-vh-100">
        <div>
           <AdminHeader/>
        </div>
        <div className="d-flex">
            <div>
           <AdminSidebar/>
            </div>
            <div>
      
            </div>

        </div>
        <div  className="bg-dark text-white p-3 mt-auto">
        <AdminFooter/>
        </div>
    </div>
)
}

export default AdminSetting