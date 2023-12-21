/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProductsSearch } from '../../Redux/actions/productsAction'
const ViewSearchProductsHook = () => {
    let limit=12
    const dispatch=useDispatch()

    const getProduct=async()=>{
        let priceFromSrting="", priceToSrting="";
        let word="",queryCat="",brandCat="",priceFrom="",priceTo="";
        if(localStorage.getItem('keyword')!=null){
            word=localStorage.getItem('keyword')
        }
        if(localStorage.getItem('catChecked')!=null){
            queryCat=localStorage.getItem('catChecked')
        }
        if(localStorage.getItem('brandChecked')!=null){
            brandCat=localStorage.getItem('brandChecked')
        }
        if(localStorage.getItem('priceFrom')!=null){
            priceFrom=localStorage.getItem('priceFrom')
        }
        if(localStorage.getItem('priceTo')!=null){
            priceTo=localStorage.getItem('priceTo')
        }
        if(priceFrom===""|| priceFrom<=0){
            priceFromSrting=""
        }else{
            priceFromSrting=`&price[gte]=${priceFrom}`
        }

        if(priceTo===""|| priceTo<=0){
            priceToSrting=""
        }else{
            priceToSrting=`&price[lte]=${priceTo}`
        }

        sortData()
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${priceFromSrting}${priceToSrting}`))
    }

    useEffect(()=>{
        getProduct()
    },[])
    const allProducts=useSelector(state=>state.allproducts.allProducts)

    let items=[];
    let results=0
    try{
        if(allProducts){
            if(allProducts.data){
                items=allProducts.data;
            }else{
                items=[]
            }
        }
    }catch(e){}
    

    let pagination=[];
    try{
    if(allProducts){
        if(allProducts.paginationResult){
            pagination=allProducts.paginationResult.numberOfPages;
        }else{
            pagination=[]
        }
    }
    }catch(e){}

    try{
        if(allProducts){
            if(allProducts.results ){
                results=allProducts.results;
            }else{
                results=0
            }
        }
        }catch(e){}
    
    //pagination
    const onPress=async(page)=>{
        let priceFromSrting="", priceToSrting="";
        let word="",queryCat="",brandCat="",priceFrom="",priceTo="";
        if(localStorage.getItem('keyword')!=null){
            word=localStorage.getItem('keyword')
        }
        if(localStorage.getItem('catChecked')!=null){
            queryCat=localStorage.getItem('catChecked')
        }
        if(localStorage.getItem('brandChecked')!=null){
            brandCat=localStorage.getItem('brandChecked')
        }
        if(localStorage.getItem('priceFrom')!=null){
            priceFrom=localStorage.getItem('priceFrom')
        }
        if(localStorage.getItem('priceTo')!=null){
            priceTo=localStorage.getItem('priceTo')
        }

        if(priceFrom===""|| priceFrom<=0){
            priceFromSrting=""
        }else{
            priceFromSrting=`&price[gte]=${priceFrom}`
        }

        if(priceTo===""|| priceTo<=0){
            priceToSrting=""
        }else{
            priceToSrting=`&price[lte]=${priceTo}`
        }

        sortData()
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${priceFromSrting}${priceToSrting}`))
    }

    //sort
    let sortType="";
    let sort='-updatedAt'
    const sortData=async()=>{
        if(localStorage.getItem('sortType')!==null){
            sortType=localStorage.getItem('sortType')
            if(sortType==='السعر من الاقل الى الاعلى'){
                sort='+price'
            }else if(sortType==='السعر من الاعلي الى الاقل'){
                sort='-price'
            }else if(sortType==='الاعلى تقييما'){
                sort='-ratingsQuantiy'
            }else if(sortType==='الاكثر مبيعا'){
                sort='-sold'
            }else if(sortType===''){
                sort='-updatedAt'
            }
        }else{
            sortType=""
        }
        
        
    }
    return[items,pagination,onPress,getProduct,results]
}

export default ViewSearchProductsHook