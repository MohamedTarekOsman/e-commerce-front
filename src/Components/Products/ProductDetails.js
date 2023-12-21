import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'


export default function ProductDetails() {
  
  return (
    <div>
        <Row className='py-3'>
            <Col lg="5">
                <ProductGallery/>
            </Col>
            <Col lg="7">
                <ProductText />
            </Col>
        </Row>
    </div>
  )
}
