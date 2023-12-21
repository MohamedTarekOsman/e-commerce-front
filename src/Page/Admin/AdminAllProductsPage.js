import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProductes from '../../Components/Admin/AdminAllProductes'
import Pagination from '../../Components/Utility/Pagination'
import ViewProductAdminHook from '../../Hook/admin/view-product-admin-hook'

export default function AdminAllProductsPage  () {

  const [items,onPress]=ViewProductAdminHook()
  let pageCount
  if(items.paginationResult)    pageCount=items.paginationResult.numberOfPages
  else   pageCount=0

  return (
    <Container style={{minHeight:"100vh"}}>
        <Row>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar/>
            </Col>
            <Col  sm="9" xs="10" md="10">
                <AdminAllProductes products={items}/>
                <Pagination pageCount={pageCount} onPress={onPress}/>
            </Col>
        </Row>
    </Container>
  )
}
