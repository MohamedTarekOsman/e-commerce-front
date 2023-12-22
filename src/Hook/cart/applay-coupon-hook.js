/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../Hook/useNotifaction'
import { applayCoupnCart } from '../../Redux/actions/cartAction';
import {useNavigate} from 'react-router-dom'
const ApplayCouponHook = (cartItems) => {
    const dispatch = useDispatch();


    const [couponName, setCouponName] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeCoupon = (e) => {
        setCouponName(e)
    }

    const handelSubmitCoupon = async () => {
        if (couponName === "") {
            notify("من فضلك ادخل الكوبون", "warn")
            return
        }
        setLoading(true)
        await dispatch(applayCoupnCart({
            coupon: couponName
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.applayCoupon)

    useEffect(() => {

        if (loading === false) {
            if (res && res.status === "success") {
                notify("تم تطبيق الكوبون بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);

            } else {
                notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warn")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }, [loading])

    const navigate = useNavigate()
    const handelCheckout = () => {
        if (cartItems.length >= 1) {
            navigate('/order/paymethoud')
        }
        else {
            notify("من فضلك اضف منتجات للعربة اولا", "warn")
        }
    }

    return [couponName, onChangeCoupon, handelSubmitCoupon,handelCheckout]

}

export default ApplayCouponHook