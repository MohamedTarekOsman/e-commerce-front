import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AdminAllOrdersItem({ orderItem }) {

    return (
        <Col sm="12">
            <Link to={`/admin/orders/${orderItem._id}`}
                className="cart-item-body-admin my-2 px-1 d-flex px-2"
                style={{ textDecoration: "none" }}>
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">طلب رقم #{orderItem.id || 0}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                طلب من..   {orderItem.user?orderItem.user.name:" "}
                            </div>
                            <div style={{ color: 'black' }} className="d-inline pt-2 cat-rate me-2">  {orderItem.user?orderItem.user.email:" "}</div>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-between">
                        <Col xs="6" className="d-flex">
                            <div style={{marginLeft:"10px"}}>
                                <div style={{ color: 'black' }} className="d-inline"> التوصيل </div>
                                <div className="d-block mx-2 stat"style={{color:orderItem.isDelivered === true ? 'green' : 'red'}}>{orderItem.isDelivered === true ? ' تم التوصيل '  : ' لم يتم '}</div>
                            </div>
                            <div style={{marginLeft:"10px"}}>
                                <div style={{ color: 'black' }} className="d-inline"> الدفع </div>
                                <div className="d-block mx-2 stat"style={{color:orderItem.isPaid === true ? 'green' : 'red'}}>{orderItem.isPaid === true ? ' تم الدفع ' : ' لم يتم '}</div>
                            </div>

                            <div style={{marginLeft:"10px"}}>
                                <div style={{ color: 'black' }} className="d-inline"> طريقة الدفع </div>
                                <div className="d-block mx-2 stat" style={{color:"black",fontWeight:"bold"}}>{orderItem.paymentMethodType === 'cash' ? ' كاش '  : 'بطاقة ائتمانية'}</div>
                            </div>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-end">
                            <div>
                                <div className="barnd-text">{orderItem.totalOrderPrice || 0} جنية</div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Link>
        </Col >
    )
}
