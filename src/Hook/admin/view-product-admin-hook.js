import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../Redux/actions/productsAction'
const ViewProductAdminHook = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts(9))
    },[dispatch])
    const allProducts=useSelector(state=>state.allproducts.allProducts)
    let items=[];
    if(allProducts){
        if(allProducts.data){
            items=allProducts;
        }else{
            items=[]
        }
    }
    const onPress=async(page)=>{
        await dispatch(getAllProducts(9,page));
      }
    return[items,onPress]
}

export default ViewProductAdminHook