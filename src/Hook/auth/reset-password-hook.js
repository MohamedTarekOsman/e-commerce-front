/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sparse-arrays */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../Redux/actions/authAction';
import notify from '../useNotifaction';
import { useNavigate } from 'react-router-dom';

const ResetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState('')
    const [confirmPassword, setComfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)


    const OnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const OnChangeConfirmPassword = (e) => {
        setComfirmPassword(e.target.value)
    }
    const onSubmit = async () => {
        if (password === "") {
            notify("من فضلك ادخل كلمة السر", "warning")
            return
        }
        if (password !== confirmPassword) {
            notify("كلمة السر غير متطابقه مع تاكيد كلمع السر", "warning");
            return
        }

        setLoading(true)
        await dispatch(resetPassword({
            email: localStorage.getItem("user-email"),
            newPassword: password
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.verifyPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === "success") {
                    notify("تم تغير كلمة السر بنجاح", "success")
                    setTimeout(() => {
                        navigate("/login")
                    }, 1500);
                }else{
                    notify("من فضلك اطلب كود جديد", "error")
                }
            }
        }
    }, [loading])

    return [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit]

}

export default ResetPasswordHook