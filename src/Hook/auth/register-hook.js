import { useDispatch,useSelector } from "react-redux"
import notify from "../useNotifaction"
import { createNewUser } from "../../Redux/actions/authAction"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const { useState } = require("react")

const RegisterHook=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [loading,setLoading]=useState(false)


    const onChangeName=(e)=>{
        setName(e.target.value)
    }

    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const onChangePhone=(e)=>{
        setPhone(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onChangeConfirmPasword=(e)=>{
        setConfirmPassword(e.target.value)
    }

    const validationValues=()=>{
        if(name===""||phone===""||email===""||password===""||confirmPassword===""){
            return notify("من فضلك ادخل كل القيم","error")
        }
        if(confirmPassword!==password){
            return notify("تأكد من تأكيد كلمة السر بشكل صحيح","error")
        }
    }

    const res =useSelector(state=>state.authReducer.createUser)

    const onSubmit =async () => {
        validationValues();
        setLoading(true);
        await dispatch(createNewUser({
            name,
            email,
            password, 
            passwordConfirm: confirmPassword,
            phone 
        }))
        setLoading(false);
    }

    useEffect(() => {
        if(loading===false){
            if(res){
                if(res.token){
                    localStorage.setItem("token", res.token);
                    notify("تم تسجيل الحساب بنجاح","success")
                    setTimeout(()=>{
                        navigate('/login')
                    },1000)
                }
                if(res.status ===400){
                    if(res.data[0].message==='phone  must be at least 11 number long.'){
                        notify("رقم الهاتف يجب ان يكون مصري مكون من 11 رقم","error")
                    }
                    if(res.data[0].message==='password  must be at least 8 characters long.'){
                        notify("يجب ان لا تقل كلمة السر عن 8 حروف و ارقام","error")
                    }
                }
                if(res.status ===500){
                    notify("هذا الايميل مستخدم بالفعل","error")
                }
                
            }
        }
    },[loading, navigate, res]);

    return [name ,email ,phone,password ,confirmPassword,loading,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirmPasword,onSubmit]
}

export default RegisterHook