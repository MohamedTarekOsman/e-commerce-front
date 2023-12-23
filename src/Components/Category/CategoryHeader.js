/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AllCategoryHook } from '../../Hook/category/all-category-page-hook'

export default function CategoryHeader() {
  const [category, loading, pageCount, getPage] = AllCategoryHook()

  const [items, setItems] = useState([])
  useEffect(() => {
    if (category)
      setItems(category.data)

  }, [category])
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">

            {
              items ? (items.slice(0,9).map((item, index) => {
                return (<Link to={`/products/category/${item._id}`} style={{ textDecoration: 'none' }}>
                  <div key={index} className="cat-text-header ">{item.name}</div>
                </Link>
                )
              })) : null
            }
            <Link to="/allcategory" style={{ textDecoration: 'none' }}>
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
