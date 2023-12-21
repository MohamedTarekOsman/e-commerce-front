/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import ViewSearchProductsHook from '../products/view-search-products-hook'

const NavbarSearchHook = () => {
    const [items,pagination,onPress,getProduct,results]=ViewSearchProductsHook()
    const [searchWord,setSearchWord]=useState('')
    const onChangeSearch=(e)=>{
        localStorage.setItem('keyword',e.target.value)
        setSearchWord(e.target.value)
        if(window.location.pathname !== '/products'){
            window.location.href='/products'
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            getProduct()
        },1000)
    },[searchWord])
  return [searchWord,onChangeSearch]
}

export default NavbarSearchHook