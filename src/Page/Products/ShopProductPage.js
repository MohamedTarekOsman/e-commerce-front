/* eslint-disable no-unused-vars */
import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../Components/Utility/SideFilter'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import Pagination from '../../Components/Utility/Pagination'
import ViewSearchProductsHook from '../../Hook/products/view-search-products-hook'
export default function ShopProductPage() {

  const [items,pagination,onPress,getProduct,results]=ViewSearchProductsHook()
  
  let pageCount
  if(pagination)pageCount=pagination
  else pageCount=0
  
  return (
    <div style={{minHeight:"100vh"}}>
        <CategoryHeader/>
        <Container>
            <SearchCountResult onClick={getProduct} title={`هناك ${results}  نتيجة بحث`}/>
            <Row className='d-flex flex-row'>
                <Col xs="2" sm="2" md="2"  className='d-flex'><SideFilter/></Col>
                <Col xs="10" sm="10" md="10" className='d-flex '><CardProductContainer products={items}  title="" btntitle=""/></Col>
            </Row>
            <Pagination pageCount={pageCount} onPress={onPress}/>
        </Container>
    </div>
  )
}
