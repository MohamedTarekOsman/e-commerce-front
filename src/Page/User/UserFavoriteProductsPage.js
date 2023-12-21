import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserFavoriteProduct from '../../Components/User/UserFavoriteProduct'
export default function UserFavoriteProductsPage() {
  return (
    <Container style={{minHeight:"100vh"}}>
    <Row>
        <Col sm="3" xs="2" md="2">
            <UserSideBar/>
        </Col>
        <Col  sm="9" xs="10" md="10">
            <UserFavoriteProduct/>
        </Col>
    </Row>
    </Container>
  )
}
