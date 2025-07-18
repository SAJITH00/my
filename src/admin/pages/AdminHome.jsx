import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminFooter from '../components/AdminFooter';
import AdminSidebar from '../components/AdminSidebar';

function AdminHome() {
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
      <div className="flex flex-1 lg:pt-0">
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
        <main className={`flex-1 lg:ml-64  ${sidebarOpen ? "mt-0" : "mt-5 "}`}>
          {/* Padding top matches mobile header height */}
          <div className="p-4 pt-4 lg:pt-6">
            <div className="bg-white rounded-lg shadow p-2">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-gray-600">Total Users</h3>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-gray-600">Active Products</h3>
                  <p className="text-2xl font-bold">567</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-gray-600">Pending Orders</h3>
                  <p className="text-2xl font-bold">89</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-gray-600">Revenue</h3>
                  <p className="text-2xl font-bold">$12,345</p>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">New order received</p>
                      <p className="text-sm text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className=" text-white lg:ml-64">
        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminHome;