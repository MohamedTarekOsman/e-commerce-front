import React from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import AddBrandHook from '../../Hook/brand/add-brand-hook'
import { ToastContainer } from 'react-toastify'
export default function AdminAddBrand() {
    const [img,name,loading,isPress,onImageChange,handelSubmit,onChangeName]=AddBrandHook()
  return (
    <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صورة الماركه</div>
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
                        value={name}
                        onChange={onChangeName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
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
