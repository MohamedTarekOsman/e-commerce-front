/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem'
import CartCheckOut from '../../Components/Cart/CartCheckOut'
import GetAllUserCartHook from '../../Hook/cart/get-all-user-cart-hook'

export default function CartPage() {
    const [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetAllUserCartHook()
    return (
    <Container style={{ minHeight: '670px' }}>
        <Row>
        <Row className='d-flex justify-content-center'>
            <div className='cart-title mt-4'>عربة التسوق</div>
        </Row>
            <Col xs="12" md="9">
                {
                    cartItems.length >= 1 ? (cartItems.map((item, index) => {
                        return (<CartItem key={index} item={item} />)
                    })) : <h6>لا يوجد منتجات فى العربة</h6>
                }

    </Col>

            <Col xs="6" md="3">
                <CartCheckOut couponNameRes={couponNameRes} totalCartPriceAfterDiscount={totalCartPriceAfterDiscount} totalCartPrice={totalCartPrice} />
            </Col>
        </Row>
    </Container >
    )
}
