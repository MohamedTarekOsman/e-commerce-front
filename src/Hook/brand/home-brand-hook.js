import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../Redux/actions/brandAction';

const HomeBrandHook = () => {
    const dispatch =useDispatch();

    useEffect(()=>{
      dispatch(getAllBrand());
    },[dispatch])
    
    //get last brand state from redux 
    const brand=useSelector(state=>state.allBrand.brand)
    //get last loading state from redux
    const loading=useSelector(state=>state.allBrand.loading)
  
  
  
    return [brand,loading]
}

export default HomeBrandHook