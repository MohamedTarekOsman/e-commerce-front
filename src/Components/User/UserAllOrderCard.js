import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function UserAllOrderCard({item}) {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <Link to={`/products/${item.product._id}`} style={{ textDecoration: 'none' }}>
                        <img width="93px" height="120px" src={item.product.imageCover} alt="" />
                    </Link>
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        {item.product.title || ''}
                    </div>
                    <div className="mt-3 d-flex">
                        <div className="cat-text mt-1  d-inline">الكميه</div>
                        <input
                            value={item.quantity}
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "30px" }}
                        />
                        <div
                            className="color  d-inline"
                            style={{ backgroundColor: item.color }}></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
