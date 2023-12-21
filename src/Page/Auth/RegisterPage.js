import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import {Link} from "react-router-dom"
import RegisterHook from '../../Hook/auth/register-hook'
import { ToastContainer } from 'react-toastify'
export default function RegisterPage() {

  const [name ,email ,phone,password ,confirmPassword,loading,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirmPasword,onSubmit]=RegisterHook()

  return (
    <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
              value={name}
              onChange={onChangeName}
              placeholder="اسم المستخدم..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="الايميل..."
              type="enail"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={phone}
              onChange={onChangePhone}
              placeholder="الهاتف..."
              type="text"
              maxLength={11}
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="كلمه السر..."
              type="password"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPasword}
              placeholder="تأكيد كلمة السر..."
              type="password"
              className="user-input mt-3 text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4" onClick={onSubmit}>تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
          {loading?(loading===true?(<Spinner animation='border' variant='primary' className='m-auto'/>):null):null}
        </Row>
        <ToastContainer/>
      </Container>
  )
}
