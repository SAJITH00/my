import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    {/* <Navbar expand="lg" className="bg-[#16302B]">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{color: "#A38562", fontWeight: "bold"}}>
          Kunju Garage
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" style={{color: "whitesmoke"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{color: "whitesmoke"}}>Cart</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{color: "whitesmoke"}}>Login</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
      <Navbar className='bg-[#16320B]' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color: "#A38562", fontWeight: "bold"}}> Kunju Garage</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#home"><Link to={"/"} style={{textDecoration:"none",color:"whitesmoke",fontFamily:"monospace" }} >Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to={"/cart"}  style={{textDecoration:"none",color:"whitesmoke",fontFamily:"monospace"}} className='mx-2'>CartArea</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to={"/login"}  style={{textDecoration:"none",color:"whitesmoke",fontFamily:"monospace" }}>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;