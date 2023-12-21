import React from 'react'
import Slider from "../../Components/Home/Slider"
import HomeCategory from "../../Components/Home/HomeCategory"
import CardProductContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'
import ViewHomeProductsHook from '../../Hook/products/view-home-products-hook'

export default function 
HomePage() {
    const [items]=ViewHomeProductsHook();
  return (
    <div className='font' style={{minHeight:"670px"}}>
        <Slider/>
        <HomeCategory/>
        <CardProductContainer products={items} title={"الاكثر مبيعا"} btntitle={"المزيد"}/>
        <DiscountSection/>
        <CardProductContainer products={items} title={"احدث المنتجات"} btntitle={"المزيد"}/>
        <BrandFeatured title={" الماركات"} btntitle={"المزيد"}/>
    </div>
  )
}
