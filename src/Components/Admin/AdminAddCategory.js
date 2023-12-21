import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AddCategoryHook from '../../Hook/category/add-category-hook';


export default function AdminAddCategory() {

    const [img,name,loading,isPress,onImageChange,handelSubmit,onChangeName]=AddCategoryHook()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label htmlFor="upload-photo">
                            <img
                            src={img}
                            alt='fzx'
                            height='100px'
                            width='120px'
                            style={{cursor:'pointer'}}
                            />
                        </label>
                        <input
                            type='file'
                            name='photo'
                            onChange={onImageChange}
                            id='upload-photo'
                        />
                    </div>
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                        value={name}
                        onChange={onChangeName}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            
            <Row>
            {
                isPress?(loading?(<Spinner animation='border' variant='primary' className='m-auto mt-5'/>):null):null
            }
            </Row>
            <ToastContainer/>
        </div>
  )
}
