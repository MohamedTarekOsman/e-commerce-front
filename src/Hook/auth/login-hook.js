import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../Redux/actions/authAction"
import notify from "../useNotifaction"



const LoginHook=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(true)
    const [isPress,setIsPress]=useState(false)

    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }


    const res =useSelector(state=>state.authReducer.loginUser)
    const onSubmit=async()=>{
        setIsPress(true)
        setLoading(true)
        dispatch(loginUser({
            email,
            password
        }))
        setLoading(false)
        setIsPress(false)
    }

    useEffect(()=>{
        if(loading===false){
            if(res){
                if(res.token){
                    localStorage.setItem('token',res.token)
                    localStorage.setItem('user',JSON.stringify(res.data))
                    notify("تم تسجيل الدخول بنجاح","success")
                    setTimeout(()=>{
                        window.location.href='/'
                    },1000)
                    
                }else if(res.status=== 401){
                    notify("الايميل او كلمة السر خطأ","error")
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                }else{
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                }
            }
        }
    },[loading, navigate, res])
    return [email,password,loading,isPress,onChangeEmail,onChangePassword,onSubmit]
}

export default LoginHook