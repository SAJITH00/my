import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Card } from 'flowbite-react';
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

function SellersCard() {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
<div className="container btn border bg-light rounded-3 m-3" onClick={handleShow} style={{width:"300px" ,height:"200px"}}>     
           <Row>
                <Col xs={5}> <img style={{width:"100px" ,height:"100px"}} src="https://cdn.imgbin.com/12/20/9/imgbin-franchising-7-eleven-convenience-shop-marketing-retail-marketing-3qD78XiqqC0p2cimcq7vjh7VT.jpg" alt=" seller image" /> </Col>
                <Col xs={7}> name <br />
                place 
                </Col>
            </Row>
            <Row>
                <Col>Products count = 0</Col>
            </Row>
        </div>
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Card className='container'>
        <Row>
       <Col xs={5}>image</Col>
       <Col xs={5}>
       <h5>product name</h5>
       <p>details</p>
<div className='d-flex justify-content-center align-items-center gap-2'>
  <span className='bg-success text-white px-2 rounded-pill'>Amount</span>
  <Button variant="outline-primary" className='p-1'><FaRegEdit /></Button>
  <Button variant="outline-danger" className='p-1'><AiOutlineDelete /></Button>
</div>
       </Col>
        </Row>
    </Card>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SellersCard