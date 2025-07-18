import React from 'react'
import { Col, Row } from 'react-bootstrap'

function CartsItem() {
  return (
    <div className="container-fluid p-0">
      <div className="m-2 p-3 border-2 rounded-2xl border-amber-950 bg-white shadow-sm">
        <Row className="align-items-center">
          {/* Image Column - Full width on mobile, 4 cols on larger screens */}
          <Col xs={12} md={4} className='p-2 text-center md:text-left'>
            <div className="bg-gray-200 h-24 w-full md:h-32 md:w-24 flex items-center justify-center rounded-lg">
              [Image]
            </div>
          </Col>
          
          {/* Product Info - Full width on mobile, 5 cols on larger screens */}
          <Col xs={12} md={5} className='p-2'>
            <h2 className="text-lg font-semibold mb-1">Product Heading</h2>
            <p className="text-gray-600 text-sm">Product description</p>
          </Col>
          
          {/* Quantity - Full width on mobile, 1 col on larger screens */}
          <Col xs={6} md={1} className='p-2'>
            <div className="flex justify-center items-center border rounded-lg p-1">
              <span className="mx-2">1</span>
            </div>
          </Col>
          
          {/* Amount - Full width on mobile, 2 cols on larger screens */}
          <Col xs={6} md={2} className='p-2 text-center'>
            <span className="font-bold text-lg">$99.99</span>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CartsItem