import React from 'react'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import { Row } from 'react-bootstrap'

export default function AdminAllOrders() {
  return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
            </Row>
        </div>
  )
}
