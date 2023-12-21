import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './CategoryCard'




export default function CategoryContainer({data,loading}) {

  
  const colors=["blue","orange","yellow","red","green"]


  return (
    <Container style={{minHeight:"50vh"}}>
        <div className='admin-content-text mt-2'>كل التصنيفات</div>
        <Row className="my-2 d-flex justify-content-start">
            {
            loading===false?(
              data?(
                data.map((item,index)=>(<CategoryCard key={index} title={item.name} img={item.image} background={colors[Math.floor(Math.random()*5)]}/>))
              ):<h4 className='m-auto' >لا توجد تصنيفات</h4>
            ):<Spinner animation='border' variant='primary' className='m-auto'/>
          }
        </Row>
    </Container>
  )
}
