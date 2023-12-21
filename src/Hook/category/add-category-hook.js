import { useEffect, useState } from 'react'
import notify from '../useNotifaction'
import { createCategory } from '../../Redux/actions/categoryAction'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../../images/avatar.png'

export default function AddCategoryHook() {

    
    const [img,setImg]=useState(avatar)
    const [name,setName]=useState('')
    const [loading,setLoading]=useState(true)
    const [isPress,setIsPress]=useState(false)
    const [selectedFile,setSelectedFile]=useState('')


    const onChangeName=(e) =>{
        e.persist();
        setName(e.target.value);
    }


    const dispatch=useDispatch();
    const res=useSelector(state=>state.allCategory.category)
    //when user add image save it in img
    const onImageChange =(e) => {
        try{
            if(e.target.files&&e.target.files[0]){
                setImg(URL.createObjectURL(e.target.files[0]))
                setSelectedFile(e.target.files[0])
            }
        }catch(e){}
        
    }



    //save data to db
    const handelSubmit =async(e) => {
        e.preventDefault();
        if(name ===''||selectedFile===null){
            notify('من فضلك اكمل البيانات','error')
            return
        }
        const formData =new FormData();
        formData.append("name",name)
        formData.append("image",selectedFile)
        setLoading(true);
        setIsPress(true)
        await dispatch(createCategory(formData))
        setLoading(false);
    }

    useEffect(()=>{
        if(loading===false){
            try{
                if(res.data){
                    setImg(avatar)
                    setName('')
                    setSelectedFile(null)
                    setLoading(true)
                    setIsPress(false)
                    notify("تمت عملية الاضافه بنجاح","success")
                    return
                }else{
                    notify("هناك مشكله في عملية الاضافه","error")
                }
            }catch(e){}
            
        }
    },[loading, res, selectedFile])


    return [img,name,loading,isPress,onImageChange,handelSubmit,onChangeName]
}
