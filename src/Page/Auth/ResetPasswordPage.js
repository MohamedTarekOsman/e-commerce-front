import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import ResetPasswordHook from '../../Hook/auth/reset-password-hook'

const ResetPasswordPage = () => {
    const [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit] = ResetPasswordHook()
  return (
    <Container style={{ minHeight: "690px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">ادخل كلمه السر الجديده</label>
            <input
                value={password}
                onChange={OnChangePassword}
                placeholder="ادخل كلمه السر الجديدة"
                type="password"
                className="user-input my-3 text-center mx-auto"
            />
            <input
                value={confirmPassword}
                onChange={OnChangeConfirmPassword}
                placeholder="تاكيد كلمه السر الجديدة"
                type="password"
                className="user-input my-3 text-center mx-auto"
            />
            <button onClick={onSubmit} className="btn-login mx-auto mt-2">حفظ</button>
        </Col> 
    </Row>
    <ToastContainer />
</Container>
  )
}

export default ResetPasswordPage