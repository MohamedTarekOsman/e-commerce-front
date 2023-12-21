/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../Hook/useNotifaction'
import { addProductToCart } from './../../Redux/actions/cartAction';

const AddToCartHook = (prdID, item) => {

    const dispatch = useDispatch();

    const [indexColor, setIndexColor] = useState('')
    const [colorText, setColorText] = useState('')
    const [loading, setLoading] = useState(true)
    const colorClick = (index, color) => {
        setIndexColor(index)
        setColorText(color)
    }


    //add product to cart
    const addToCartHandel = async () => {
        if (item.colors.length >= 1) {
            if (colorText === "") {
                notify("من فضلك اختر لون اولا للمنتج", "warn")
                return
            }
        } else {
            setColorText('')
        }
        setLoading(true)
        await dispatch(addProductToCart({
            productId: prdID,
            color: colorText
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.addToCart)

    useEffect(() => {

        if (loading === false) {
            if (res && res.status === "success") {
                notify("تمت اضافة المنتج للعربه بنجاح", "success")
                setTimeout(()=>{
                    window.location.reload(false)
                },1500)
            } else {
                notify("قم بتسجيل الدخول اولا", "warn")
            }
        }
    }, [loading])

    return [colorClick, indexColor, addToCartHandel]

}

export default AddToCartHook