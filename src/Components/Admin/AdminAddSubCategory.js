/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import addSubCategoryhook from '../../Hook/subcategory/add-subcategory-hook'



export default function AdminAddSubCategory() {
    const [id,name,loading,category,subcategory,handelChange,handelSubmit,onChangeName] = addSubCategoryhook()
  return (
    <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />
                    <select name="category" id="cat" className="select mt-3 px-2"value={id} onChange={handelChange}>
                    <option value="0">اختر تصنيف اساسي</option>
                        {
                            category?(
                                category.data?(
                                    category.data.map((item,index)=><option value={item._id} key={index}>{item.name}</option>)
                                ):null
                            ):null
                            
                        }
                        
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
  )
}
