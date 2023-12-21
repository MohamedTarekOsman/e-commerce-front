/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Utility/Pagination'
import { AllCategoryHook } from '../../Hook/category/all-category-page-hook'



export default function AllCategoryPage() {

  const [category,loading,PageCount,getPage]=AllCategoryHook()
  return (
    <div style={{minHeight:"100vh"}}>
        <CategoryContainer  data={category.data} loading={loading}/>
        {
          PageCount >1?(<Pagination pageCount={PageCount} onPress={getPage}/>):null
        }
        
    </div>
  )
}
