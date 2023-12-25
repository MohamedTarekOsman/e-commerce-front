/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../Hook/products/view-product-details-hook';
import AddToCartHook from '../../Hook/cart/add-to-cart-hook';
import { ToastContainer } from 'react-toastify';

export default function ProductText() {
    const {id}=useParams()
    const [images,items,category,brand,colors,description,price]=ViewProductDetailsHook(id);
    const [colorClick, indexColor, addToCartHandel] = AddToCartHook(id,items)
  
    return (
      <div>
        <Row className="mt-2">
          <div className="cat-text">{category} :</div>
        </Row>
        <Row>
          <Col md="8">
            <div className="cat-title d-inline">
              {items.title}
              <div className="cat-rate d-inline mx-3">{items.ratingsAverage}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="8" className="mt-4">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">{brand} </div>
          </Col>
        </Row>
        <Row>
          <Col md="8" className="mt-1 d-flex">
            {
              items.colors ? (items.colors.map((color, index) => {
                return (<div
                  key={index}
                  onClick={() => colorClick(index, color)}
                  className="color ms-2"
                  style={{ backgroundColor: color, border: indexColor === index ? '5px solid black' : 'none' }}></div>)
              })) : null
            }
  
        <div className="cat-text d-inline">الكمية المتاحة : {items.quantity} </div>
          </Col>
        </Row>
  
        <Row className="mt-4">
          <div className="cat-text">المواصفات :</div>
        </Row>
        <Row className="mt-2">
          <Col md="10">
            <div className="product-description d-inline">
              {items.description}
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12">
          {
              items.priceAfterDiscount>1?(
                  <div style={{marginBottom:"20px"}}><span style={{textDecorationLine:"line-through",color:"red"}}> {items.price} </span> {items.priceAfterDiscount} جنيه</div>
              ):<div style={{marginBottom:"20px"}}>{items.price} جنيه</div>
          }
            <div onClick={addToCartHandel} className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    )
}
