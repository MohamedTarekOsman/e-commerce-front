/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { forgetPassword } from "../../Redux/actions/authAction";
import notify from "../useNotifaction";

const ForgetPasswordHook = () => {
        const dispatch=useDispatch();
        const navigate=useNavigate();

        const [email, setEmail]=useState('')
        const [loading, setLoading]=useState(true)

        const onChangeEmail=(e)=>{
            setEmail(e.target.value)
        }
        const onSubmit=async()=>{
            if(email===""){
                notify('من فضلك ادخل الايميل',"warning")
                return
            }
            localStorage.setItem("user-email",email)
            setLoading(true)
            await dispatch(forgetPassword({email}))
        setLoading(false)
        }

        const res=useSelector(state=>state.authReducer.forgetPassword)
        useEffect(() => {
            if(loading===false){
                if(res){
                    if(res.status==="Success"){
                        notify('تم ارسال الكود','success')
                        setTimeout(()=>{
                            navigate('/user/verify-code')
                        },1500)
                        
                    }else{
                        notify("هذا الحساب غير مسجل",'error')
                    }
                }
            }
        }, [loading])
        
        return[onChangeEmail,email,onSubmit]
}

export default ForgetPasswordHook