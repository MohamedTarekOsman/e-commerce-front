import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from "./ProductCard"
import SubTitle from '../Utility/SubTitle'
import CardContainerHook from '../../Hook/products/card-container-hook'
export default function CardProductContainer({productsLike,btntitle,title,products}) {
  const [favProd] = CardContainerHook()
  return (
    <Container>
        <SubTitle title={title} btntitle={btntitle} pathText={"/products"}/>
        <Row className="my-2 d-flex justify-content-between">
          {
            productsLike?(
              productsLike?(
                productsLike.slice(0,4).map((item,index)=><ProductCard favProd={favProd} key={index} item={item}/>)
              ):null
            ):(
              products?(
                products.map((item,index)=><ProductCard favProd={favProd} key={index} item={item}/>)
              ):null
            )
          }
        </Row>
    </Container>
  )
}
