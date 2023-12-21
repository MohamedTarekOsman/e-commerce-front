import React from 'react'
import { Row } from 'react-bootstrap'
import SidebarSearchHook from '../../Hook/Search/sidebar-search-hook'

export default function SideFilter() {
  const [category, brand,clickCategory,clickBrand,priceFrom,priceTo]=SidebarSearchHook()
  let localFrom=localStorage.getItem('priceFrom');
  let localTo=localStorage.getItem('priceTo');

  return (
    <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">الفئة</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="0" onChange={clickCategory}/>
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            {
              category?(
                category.map((item,index)=>
              <div className="d-flex mt-3" key={index}>
                <input type="checkbox" onChange={clickCategory} value={item._id} />
                <div className="filter-sub me-2 ">{item.name}</div>
              </div>
              )
              ):<h6>لا توجد تصنيفات</h6>
            }
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">الماركة</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="0"onChange={clickBrand} />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            {
              brand?(
                brand.map((item,index)=>
              <div className="d-flex mt-3" key={index}>
                <input type="checkbox" onChange={clickBrand} value={item._id} />
                <div className="filter-sub me-2 ">{item.name}</div>
              </div>
              )
              ):<h6>لا توجد ماركات</h6>
            }
          </div>
  
          <div className="filter-title my-3">السعر</div>
          <div className="d-flex">
            <p className="filter-sub my-2">من:</p>
            <input
              onChange={priceFrom}
              className="m-2 text-center"
              value={localFrom}
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">الي:</p>
            <input
              onChange={priceTo}
              className="m-2 text-center"
              type="number"
              value={localTo}
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
  )
}
