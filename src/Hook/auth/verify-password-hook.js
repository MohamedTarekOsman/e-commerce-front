/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotifaction';
import { verifyPassword } from '../../Redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const VerifyPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(true)


    const OnChangeCode = (e) => {
        setCode(e.target.value)
    }

    const onSubmit = async () => {
        if (code === "") {
            notify("من فضلك ادخل الكود", "warning")
            return
        }
        setLoading(true)
        await dispatch(verifyPassword({
            resetCode: code
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.verifyPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === "success") {
                    notify("كود التفعيل صحيح", "success")
                    setTimeout(() => {
                        navigate("/user/reset-password")
                    }, 1500);
                }else{
                    notify("الكود خاطئ او انتهت صلاحيته", "error")
                }
            }
        }
    }, [loading])

    return [code, OnChangeCode, onSubmit]
}

export default VerifyPasswordHook