/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../Redux/actions/categoryAction"
import { getAllBrand } from "../../Redux/actions/brandAction"
import ViewSearchProductsHook from "../products/view-search-products-hook"


const SidebarSearchHook = () => {
    const dispatch=useDispatch()
    const [items,pagination,onPress,getProduct,results]=ViewSearchProductsHook()
    useEffect(()=>{
        const run=async()=>{
            await dispatch(getAllCategory());
            await dispatch(getAllBrand())
        }
        run()
    },[dispatch])

    //get all category and all brand actions
    const allCat=useSelector(state=>state.allCategory.category)
    const allBrand=useSelector(state=>state.allBrand.brand)

    let category=[]
    try{if(allCat){
        if(allCat.data){
            category=allCat.data
        }
    }}catch(e){}

    let brand=[]
    try{if(allBrand){
        if(allBrand.data){
            brand=allBrand.data
        }
    }}catch(e){} 


    //category side filtering
    const [catChecked,setCatChecked]=useState([]);
    let queryCat="";
    const clickCategory=(e)=>{
        let value=e.target.value;
        if(value==="0"){
            setCatChecked([]);
        }else{
            if(e.target.checked===true){
                setCatChecked([...catChecked,value]);
            }else if(e.target.checked===false){
                const newArr=catChecked.filter((item)=>item!==value);
                setCatChecked(newArr);
            }
        }
    }
    useEffect(()=>{
        queryCat=catChecked.map((item) => "category="+item).join("&");
        localStorage.setItem("catChecked",queryCat);
        setTimeout(()=>{
            getProduct()
        },500)
    },[catChecked])


    //brand side filtering
    const [brandChecked,setBrandChecked]=useState([]);
    let queryBrand="";
    const clickBrand=(e)=>{
        let value=e.target.value;
        if(value==="0"){
            setBrandChecked([]);
        }else{
            if(e.target.checked===true){
                setBrandChecked([...brandChecked,value]);
            }else if(e.target.checked===false){
                const newArr=brandChecked.filter((item)=>item!==value);
                setBrandChecked(newArr);
            }
        }
    }
    useEffect(()=>{
        queryBrand=brandChecked.map((item) => "brand="+item).join("&");
        localStorage.setItem("brandChecked",queryBrand);
        setTimeout(()=>{
            getProduct()
        },500)
    },[brandChecked])


    //price side filtering
    const[From,setFrom]=useState(0)
    const[to,setTo]=useState(0)
    const priceFrom=(e)=>{
        localStorage.setItem("priceFrom",e.target.value);
        setFrom(e.target.value);
    }
    const priceTo=(e)=>{
        localStorage.setItem("priceTo",e.target.value);
        setTo(e.target.value);
    }
    useEffect(()=>{
        setTimeout(()=>{
            getProduct();
        },1000)
    },[From,to])
    return [category, brand,clickCategory,clickBrand,priceFrom,priceTo]
}

export default SidebarSearchHook