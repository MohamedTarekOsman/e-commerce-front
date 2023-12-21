import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from '../../Components/Products/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductContainer from "../../Components/Products/CardProductContainer"
import ViewProductLikeHook from '../../Hook/products/view-product-like-hook'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../Hook/products/view-product-details-hook'

export default function ProductDetailsPage() {
  const {id}=useParams()
  // eslint-disable-next-line no-unused-vars
  const [images,items,category,brand,colors,description,price,categoryId]=ViewProductDetailsHook(id);
  const [productsLike]=ViewProductLikeHook(categoryId)
  if(items){
    var rateAvg=items.ratingsAverage
    var rateQty=items.ratingsQuantity
  }
  return (
    <div style={{minHeight:"100vh"}}>
        <CategoryHeader/>
        <Container>
          <ProductDetails />
          <RateContainer rateAvg={rateAvg} rateQty={rateQty}/>
          <CardProductContainer productsLike={productsLike.data} title="منتجات قد تعجبك" btntitle=""/>
        </Container>
    </div>
  )
}
