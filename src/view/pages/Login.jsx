import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Login({ register }) {
  const [isAdmin, setAdmin] = useState(false);
  
  return (
    <div className='d-flex justify-content-center align-items-center bg-[#16302B] min-vh-100'>
      <div className='m-5 p-3 border-2 border-light rounded-3xl pt-5 w-80 bg-[#B38560]' style={{ maxWidth: '400px' }}>
        {register ? (
          <h4 className='text-center mb-4 text-light'>Register here</h4>
        ) : (
          <h4 className='text-center mb-4 text-light'>Login</h4>
        )}
        
        {register ? (
          <>
          <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="name"
                className='bg-light'
              />
              <label htmlFor="floatingInputCustom"> Username</label>
            </Form.Floating>
           {/* Email Field */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                className='bg-light'
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            
            {/* Regular Password Field */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                className='bg-light'
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            </>
        ) : (
          <>
            {/* Email Field */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                className='bg-light'
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            
            {/* Regular Password Field */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                className='bg-light'
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            
            {/* Admin Toggle */}
            <Form.Check
              className='m-2 mb-3'
              type="switch"
              id="admin-switch"
              label="Admin Login"
              checked={isAdmin}
              onChange={(e) => setAdmin(e.target.checked)}
            />
            
            {/* Admin Password Field (Conditional) */}
            {isAdmin && (
              <Form.Floating className="mb-3">
                <Form.Control
                  id="adminPassword"
                  type="password"
                  placeholder="Admin Password"
                  className='bg-light'
                  required
                />
                <label htmlFor="adminPassword">Admin Password</label>
              </Form.Floating>
            )}
          </>
        )}
        
        {/* Buttons */}
        {register ? (
          <div className='d-flex justify-content-between align-items-center mt-4'>
            <Button variant="outline-light" size="sm">
              <Link to="/login" style={{textDecoration:"none",color:"black"}}>
                Back to Login
              </Link>
            </Button>
            <Button variant="success" size="lg" className='px-4'>
              <Link to="/login" style={{textDecoration:"none",color:"white"}}>
                Register
              </Link>
            </Button>
          </div>
        ) : (
          <div className='d-flex justify-content-between align-items-center mt-4'>
            <Button variant="outline-light" size="sm">
              <Link to="/register" style={{textDecoration:"none",color:"white"}}>
                Register
              </Link>           
            </Button>
            <Button variant="success" size="lg" className='px-3 text-center'>
                {isAdmin ? (
              <Link style={{textDecoration:"none",color:"white"}} to={"/adminhome"}>
                <p>Admin Login</p>
                </Link>
              ):( 
              <p>Login</p>
              )}
              
            
            </Button>
          </div>
        )}
        <div  className='text-center mt-5'>
        <p>Go To <Link to={"/"}>Home</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;