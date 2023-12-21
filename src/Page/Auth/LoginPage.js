import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import {Link} from "react-router-dom"
import LoginHook from '../../Hook/auth/login-hook'
import { ToastContainer } from 'react-toastify';
export default function LoginPage() {
    const [email,password,loading,isPress,onChangeEmail,onChangePassword,onSubmit] =LoginHook();
  return (
    <Container style={{ minHeight: "100vh" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول</label>
                        <input
                            autoComplete='true'
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="الايميل..."
                            type="email"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                            value={password}
                            onChange={onChangePassword}
                            placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button className="btn-login mx-auto mt-4" onClick={onSubmit}>تسجيل الدخول</button>
                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                        <label className="mx-auto my-4">
                            
                            <Link to="/user/forget-password" style={{textDecoration:'none'}}>
                                هل نسيت كلمة السر ؟{" "}
                            </Link>
                        </label>
                    </Col>
                    <label className="mx-auto my-4">
                </label>
                {isPress===true?(loading?(loading===true?(<Spinner animation='border' variant='primary' className='m-auto'/>):null):null):null}
                </Row>
                <ToastContainer/>
    </Container>
  )
}
