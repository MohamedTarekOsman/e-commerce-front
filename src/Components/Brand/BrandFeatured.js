import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from "./BrandCard"
import SubTitle from "../Utility/SubTitle"
import HomeBrandHook from '../../Hook/brand/home-brand-hook'
export default function BrandFeatured({title,btntitle}) {

  const [brand,loading]=HomeBrandHook()
  return (
    brand.data?(
      brand.data.length>0?(
        <Container>
        <SubTitle title={title} btntitle={btntitle}  pathText={"/allbrand"}/>
        <Row className="my-1 d-flex justify-content-start">
        {
            loading===false?(
                brand.data.slice(0,6).map((item,index)=>(<BrandCard id={item._id} img={item.image} key={index}/>))
            ):<Spinner animation='border' variant='primary' className='m-auto'/>
          }
        
        </Row>
    </Container>
      ):null
    ):null
  )
}
