import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Row, Spinner } from 'react-bootstrap'


export default function AdminAllProductes({products}) {

  return (
    <div>
      <div className='admin-content-text'>ادارة جميع المنتجات</div>
      <Row className='justify-content-between'>
        {
          products?(
            products.data?(
              products.data.map((item,index)=><AdminAllProductsCard key={index} item={item}/>))
              :<Spinner animation='border' variant='primary' className='m-auto'/>
          ):<h4>لا توجد منتجات حتي الان</h4>
        }
      </Row>
      
    </div>
  )
}

