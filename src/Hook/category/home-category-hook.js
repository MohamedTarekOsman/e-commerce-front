import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/categoryAction';

const HomeCategoryHook = () => {
    const dispatch =useDispatch();

    useEffect(()=>{
      dispatch(getAllCategory());
    },[dispatch])
    
    //get last category state from redux 
    const category=useSelector(state=>state.allCategory.category)
    //get last loading state from redux
    const loading=useSelector(state=>state.allCategory.loading)
  
  
    const colors=["blue","orange","yellow","skyblue","green"]
  
    return [category,loading,colors]
}

export default HomeCategoryHook