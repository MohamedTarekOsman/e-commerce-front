import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/categoryAction';

export const AllCategoryHook = () => {

  const dispatch =useDispatch();
  const limit=18
  //when first load
  useEffect(()=>{
    dispatch(getAllCategory(limit));
  },[dispatch])

  // get state data from redux
  const category=useSelector(state=>state.allCategory.category)
  const loading=useSelector(state=>state.allCategory.loading)

  //get oageCount after it has been loaded
  let PageCount=0;
  if(category.paginationResult){
    PageCount=category.paginationResult.numberOfPages
  }

    //when use pagination
  const getPage=(page)=>{
    dispatch(getAllCategory(limit,page));
  }
  return [category,loading,PageCount,getPage]
}
