/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react'
import notify from '../useNotifaction'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCategory } from '../../Redux/actions/categoryAction'
import { createSubCategory } from '../../Redux/actions/subCategoryAction'

export default function AddSubCategoryhook() {
    const [id,setId]=useState('0')
    const [name,setName]=useState('')
    const [flag,setFlag]=useState(false)
    const [loading,setLoading]=useState(true)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(!navigator.onLine){
            notify("هناك مشكله في الاتصال بالإنترنت","warn")
            return;
        }
        dispatch(getAllCategory())
    },[dispatch,flag])

    const category=useSelector(state=>state.allCategory.category)

    const handelChange=(e)=>{
        e.persist()
        setId(e.target.value)
    }

    const onChangeName=(e)=>{
        e.persist()
        setName(e.target.value)
    }

    const handelSubmit=async(e)=>{
        e.preventDefault()
        if(id==='0'){
            notify("من فضلك اختر تصنيف اساسي","error")
            return
        }
        if(name===''){
            notify("من فضلك اكتب اسم التصنيف","error")
            return
        }
        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category:id,
        }))
        setLoading(false)
    }
    const subcategory=useSelector(state=>state.subCategory.subcategory)
    useEffect(()=>{
        try{
            if(loading===false){
                setId("0")
                setName("")
                if(subcategory.data){
                    notify("تمت اضافة البيانات","success")
                    setTimeout(()=>{
                        window.location.reload(false)
                    },1500)
                }else{
                    notify("هذا التصنيف موجود بالفعل","error")
                    setFlag(!flag)
                }
            }
        }catch(e){}
        
    },[loading, subcategory])
    return [id,name,loading,category,subcategory,handelChange,handelSubmit,onChangeName]
}

