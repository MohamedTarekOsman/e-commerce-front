import React from 'react'
import Pagination from '../../Components/Utility/Pagination'
import BrandContainer from '../../Components/Brand/BrandContainer'
import { AllBrandHook } from '../../Hook/brand/all-brand-page-hook'


export default function AllBrandPage() {
  const [brand,loading,PageCount,getPage]=AllBrandHook()
  return (
    <div style={{minHeight:"100vh"}}>
    <BrandContainer brand={brand} loading={loading}/>
    {
      PageCount>1?(<Pagination pageCount={PageCount} onPress={getPage}/>):null
    }
    
    </div>
  )
}
