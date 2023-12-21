import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'
export default function AdminAddBrandPage() {
  return (
    <Container style={{minHeight:"100vh"}}>
        <Row>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar/>
            </Col>
            <Col  sm="9" xs="10" md="10">
                <AdminAddBrand/>
            </Col>
        </Row>
    </Container>
  )
}
