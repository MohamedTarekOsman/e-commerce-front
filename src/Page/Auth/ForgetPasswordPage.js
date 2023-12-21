import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../Hook/auth/forget-password-hook';
export default function ForgetPasswordPage() {
    const [onChangeEmail,email,onSubmit]=ForgetPasswordHook();
  return (
    <Container style={{ minHeight: "100vh" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">استعادة كلمة السر</label>
                        <input
                            autoComplete='true'
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="ادخل الايميل..."
                            type="email"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <button className="btn-login mx-auto mt-4" onClick={onSubmit}>ارسال الكود</button>
                    </Col>
                </Row>
                <ToastContainer/>
    </Container>
  )
}
