import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiCog, HiShoppingBag, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
         <Sidebar aria-label="Default sidebar example" >
      <SidebarItems>
        <SidebarItemGroup className="bg-blue-200 py-3 rounded-4xl">
          <SidebarItem   to="/adminhome" as={Link}  icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem   icon={HiShoppingBag} as={Link}   to="/adminproduct"  label="5" >
           All Products
          </SidebarItem>
          <SidebarItem   icon={HiUser} as={Link}   to="/adminseller"  label="3">
            Sellers
          </SidebarItem>
          <SidebarItem   icon={HiCog} as={Link}   to="/adminsetting" >
           Setting
          </SidebarItem>
          <SidebarItem  as={Link}  icon={ HiArrowSmRight} to="/">
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
      </div>
    </>
  );
}

export default AdminSidebar;