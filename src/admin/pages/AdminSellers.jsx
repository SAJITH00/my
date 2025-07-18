import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import AdminSidebar from '../components/AdminSidebar'
import SellersCard from '../components/SellersCard'

function AdminSellers() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  return (
<div className="flex flex-col min-h-screen bg-[#A38560] ">
      {/* Mobile Header with Hamburger Menu - Fixed at top */}
      <div className="lg:hidden fixed  bg-[#16302B] text-[#A38560]  top-0 left-0 right-0 z-50 shadow-sm h-16 ">
        <div className="flex items-center justify-between p-4 h-full ">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-emerald-500"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <AdminHeader mobileView />
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
        <AdminHeader />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 lg:pt-0 pt-5">
        {/* Mobile Sidebar */}
        <div className={`fixed inset-y-0  left-0 z-40 w-64 shadow-lg transform ${sidebarOpen ? 'translate-x-0 mt-5' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}>
          <AdminSidebar />
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" 
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
              {[...Array(10)].map((_, index) => (
                <SellersCard key={index} />
              ))}
            </div>
      </div>

      {/* Footer */}
      <div className=" text-white lg:ml-64">
        <AdminFooter />
      </div>
    </div>
      )
}

export default AdminSellers

