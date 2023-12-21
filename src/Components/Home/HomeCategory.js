import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import HomeCategoryHook from '../../Hook/category/home-category-hook'




const HomeCategory=()=>{

  const [category,loading,colors]=HomeCategoryHook()
  return (
    <Container>
        <SubTitle title={"التصنيفات"} btntitle={"المزيد"} pathText={"/allcategory"}/>
        <Row className="my-2 d-flex justify-content-between">
          {
            loading===false?(
              category.data?(
                category.data.slice(0,5).map((item,index)=>(<CategoryCard key={index} title={item.name} img={item.image} background={colors[index]}/>))
              ):<h4>لا توجد تصنيفات</h4>
            ):<Spinner animation='border' variant='primary' className='m-auto'/>
          }
        </Row>
    </Container>
  )
}
export default HomeCategory

