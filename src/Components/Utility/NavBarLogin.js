/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Container, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from "../../images/logo.png"
import login from "../../images/login.png"
import cart from "../../images/cart.png"
import { Link, useNavigate } from 'react-router-dom'
import NavbarSearchHook from '../../Hook/Search/navbar-search-hook'
import GetAllUserCartHook from '../../Hook/cart/get-all-user-cart-hook'


export default function NavBarLogin() {
    const [searchWord,onChangeSearch]=NavbarSearchHook()
    let word="";
    if(localStorage.getItem('keyword')!=null){
        word=localStorage.getItem('keyword')
    }
    const navigate=useNavigate()
    const  [user,setUser]=useState("")
    useEffect(()=>{
        if(localStorage.getItem('user')!==null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }    
    },[])
    const logOut=() => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser('')
        navigate('/login')
    }
    const [itemsNum] = GetAllUserCartHook()
  return (
    <Navbar className="sticky-top"  bg="dark" variant="dark" expand="sm">
            <Container>
                <Link to='/'>
                        <img src={logo} alt='logo' className='logo' />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={word}
                        onChange={onChangeSearch}
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        {
                            user !==''?( 
                            <NavDropdown title={user.name} id="basic-nav-dropdown" >
                            {user.role==='admin' ? (
                                <NavDropdown.Item><Link to='/admin/allproducts' className='dropdown-item'>لوحة التحكم</Link></NavDropdown.Item>
                            ):(
                                <NavDropdown.Item><Link to='/user/profile' className='dropdown-item'>الصفحة الشخصيه</Link></NavDropdown.Item>
                            )}
                            <NavDropdown.Divider />
                            <NavDropdown.Item  onClick={logOut}>تسجيل الخروج</NavDropdown.Item>
                        </NavDropdown>):(<Link to='/login'
                            className="nav-text d-flex mt-4 mx-1 justify-content-center"
                            style={{textDecoration:"none",fontSize:"100%",fontWeight:"normal"}}>
                            <img src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>دخول</p>
                        </Link>)
                        }
                        <Link to='/cart'
                            className="nav-text d-flex position-relative mt-4 mx-1 justify-content-center"
                            style={{textDecoration:"none",fontSize:"100%",fontWeight:"normal"}} >
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربه</p>
                            <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                                {itemsNum || 0}
                            </span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
