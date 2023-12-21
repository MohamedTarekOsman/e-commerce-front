import { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getProductLike } from '../../Redux/actions/productsAction'


const ViewProductLikeHook = (id) => {
    
    const [productsLike,setProductsLike]=useState([]);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductLike(id))
    },[dispatch, id])

    const productLike=useSelector(state => state.allproducts.productLike)
    useEffect(()=>{
        if(productLike){
            setProductsLike(productLike)
        }
},[productLike])
    return [productsLike]
}

export default ViewProductLikeHook