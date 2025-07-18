import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
<div>
   <Navbar className='bg-[#16320B]' data-bs-theme="light">
        <Container>
          <Navbar.Brand>
             <span  className='text-[#A38560] font-bold '>
      Kunju Garage  
        </span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={"/"} style={{textDecoration:"none", color:"whitesmoke" }}> Home</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</div>
  )
}

export default AdminHeader