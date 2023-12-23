import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker  } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminAddProductsHook from '../../Hook/products/add-products-hook';

export default function AdminAddProducts() {

    const  [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName]=AdminAddProductsHook()
  return (
    <>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        cropConfig={{  ruleOfThirds: true }}
                        max={5}
                        allowCrop={false}
                    />
                    <input 
                        value={prodName}
                        onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        value={prodDescription}
                        onChange={onChangeDesName}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        value={priceBefore}
                        onChange={onChangePriceBefor}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        value={priceAftr}
                        onChange={onChangePriceAfter}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                    />
                    <input
                        value={qty}
                        onChange={onChangeQty}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                    />
                    <select name="cat"className="select input-form-area mt-3 px-2" onChange={onSeletCategory}>
                        <option value="0">التصنيف الرئيسي</option>
                        {
                            category.data?(
                                category.data.map((item,index)=><option value={item._id} key={index}>{item.name}</option>)
                            ):null
                        }
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        className="select input-form-area mt-3 px-2"  onChange={onSeletBrand}>
                        <option value="0">اختر ماركه</option>
                        {
                            brand.data?(
                                brand.data.map((item,index)=><option value={item._id} key={index}>{item.name}</option>)
                            ):null
                        }
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length>=1?(
                                colors.map((color,index)=><div onClick={()=>removeColor(color)} className="color ms-2 border  mt-1" key={index} style={{ backgroundColor: color }}></div>)
                            ):null
                        }
                        <img src={add} alt="" width="30px" height="35px" style={{cursor:"pointer"}} onClick={onChangeColor} />
                        {
                            showColor===true ?(<CompactPicker onChangeComplete={handelChangeComplete} />):null
                        }
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2" onClick={handelSubmit}>حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer/>
    </>
  )
}
