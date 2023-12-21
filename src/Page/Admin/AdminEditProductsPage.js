import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminEditProducts from '../../Components/Admin/AdminEditProducts'

export default function AdminEditProductsPage() {
  return (
    <Container style={{minHeight:"100vh"}}>
    <Row>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar/>
        </Col>
        <Col  sm="9" xs="10" md="10">
            <AdminEditProducts/>
        </Col>
    </Row>
    </Container>
  )
}