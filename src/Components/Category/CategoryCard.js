import React from 'react'
import { Col } from 'react-bootstrap'

export default function CategoryCard({background,img,title}) {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="my-4 d-flex justify-content-around ">
    <div className="allCard mb-3 " style={{width:'80%'}}>
        <div
            className="categoty-card"
            style={{ backgroundColor: `${background}`}}>
            </div>
            <img alt="zcv" src={img}style={{width:'70%'}} className="categoty-card-img"/>
            
        <p className="categoty-card-text my-2">{title}</p>
    </div>
</Col>
  )
}
