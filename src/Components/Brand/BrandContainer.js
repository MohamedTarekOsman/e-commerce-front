import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'

export default function BrandContainer({brand,loading}) {
  return (
    <Container style={{minHeight:"50vh"}}>
        <div className='admin-content-text mt-2'>كل الماركات</div>
        <Row className="my-2 d-flex justify-content-between">
        {
        loading===false?(
          brand.data?(
            brand.data.map((item,index)=><BrandCard id={item._id}  img={item.image} key={index}/>)
          ):<h4>لا توجد براندات</h4>
        ):<Spinner animation='border' variant='primary' className='m-auto'/>
      }
        </Row>
    </Container>
  )
}
