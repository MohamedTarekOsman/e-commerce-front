/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  getOneProduct } from '../../Redux/actions/productsAction'
import avatar from '../../images/avatar.png'

const ViewProductDetailsHook = (id) => {
    const dispatch=useDispatch()
    const [category,setCategory]=useState('')
    const [brand,setBrand]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [colors,setColors]=useState([])
    const [categoryId,setCategoryId]=useState('')
    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[dispatch, id])

    const oneProduct=useSelector(state=>state.allproducts.oneProduct)

    //show product items 
    let items=[];
    
    if(oneProduct){
        if(oneProduct.data){
            items=oneProduct.data;
        }else{
            items=[]
        }
    }
    useEffect(()=>{
        if(items.category){
            setCategory(items.category.name);
            setCategoryId(items.category._id)
        }
        if(items.brand){
            setBrand(items.brand.name)
        }
        if(items.colors){
            setColors(items.colors)
        }
        if(items.description){
            setDescription(items.description)
        }
        if(items.price){
            setPrice(items.price)
        }
    },[items])

   
    //view image gallary
    let images=[]
    if(items.images){
        images=items.images.map((img)=>{return{original:img}})
    }else{
        images=[{original:avatar}]
    }


    return[images,items,category,brand,colors,description,price,categoryId]
}

export default ViewProductDetailsHook