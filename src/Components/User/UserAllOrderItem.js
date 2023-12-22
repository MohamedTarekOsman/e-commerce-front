import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

export default function UserAllOrderItem({ orderItem }) {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    return (
        <div className="user-order mt-2 mb-2">
            <Row>
                <div className="py-2 order-title">طلب رقم #{orderItem.id || 0} ...تم بتاريخ {formatDate(orderItem.createdAt)}</div>
            </Row>
            {
                orderItem.cartItems ? (orderItem.cartItems.map((item, index) => {
                    return <UserAllOrderCard key={index} item={item} />
                })) : null
            }

            <Row className="d-flex justify-content-between">
                <Col md="6" className="d-flex">
                    <div style={{marginRight:"20px"}}>
                        <div className="d-inline"> التوصيل </div>
                        <div className="d-block mx-2 stat"style={{color:orderItem.isDelivered === true ? 'green' : 'red'}}>{orderItem.isDelivered === true ? 'تم التوصيل' : 'لم يتم '}</div>
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <div className="d-inline"> الدفع </div>
                        <div className="d-block mx-2 stat" style={{color:orderItem.isPaid === true ? 'green' : 'red'}}>{orderItem.isPaid === true ? 'تم الدفع' : 'لم يتم '}</div>
                    </div>

                    <div style={{marginRight:"20px"}}>
                        <div className="d-inline">طريقة الدفع </div>
                        <div className="d-block mx-2 stat"style={{color:'black',fontWeight:"bold"}} >{orderItem.paymentMethodType === 'cash' ? 'كاش' : 'بطاقة ائتمانية'}</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{orderItem.totalOrderPrice || 0} جنية</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
