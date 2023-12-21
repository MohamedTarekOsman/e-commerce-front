import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../Redux/actions/productsAction'
export default function ViewHomeProductsHook() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])
    const allProducts=useSelector(state=>state.allproducts.allProducts)
    let items=[];
    if(allProducts){
        if(allProducts.data){
            items=allProducts.data.slice(0,4);
        }else{
            items=[]
        }
    }
    
    return[items]
}
