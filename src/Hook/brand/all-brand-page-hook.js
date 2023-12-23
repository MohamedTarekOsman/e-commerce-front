import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../Redux/actions/brandAction';

export const AllBrandHook = () => {

  const dispatch =useDispatch();
  const limit=3
  //when first load
  useEffect(()=>{
    dispatch(getAllBrand(limit));
  },[dispatch])

  // get state data from redux
  const brand=useSelector(state=>state.allBrand.brand)
  const loading=useSelector(state=>state.allBrand.loading)

  //get oageCount after it has been loaded
  let PageCount=0;
  if(brand.paginationResult){
    PageCount=brand.paginationResult.numberOfPages
  }

    //when use pagination
  const getPage=(page)=>{
    dispatch(getAllBrand(limit,page));
  }
  return [brand,loading,PageCount,getPage]
}