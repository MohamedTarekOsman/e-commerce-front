/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createOrderCARD} from '../../Redux/actions/checkoutAction';
import notify from '../useNotifaction';
import GetAllUserCartHook from './../cart/get-all-user-cart-hook';


const OrderPayCardHook = (addressDetalis) => {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetAllUserCartHook()

    //when user click
    const handelCreateOrderCARD = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn")
            return
        }
        if (addressDetalis.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoading(true)
        await dispatch(createOrderCARD(cartID, {
            shippingAddress: {
                details: addressDetalis.alias,
                phone: addressDetalis.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoading(false)
    }



    //get response for create order card
    const resOrderCard = useSelector(state => state.checkoutReducer.createOrderCard)
    useEffect(() => {
        if (loading === false) {
            if (resOrderCard && resOrderCard.status === "success") {
                if (resOrderCard.session.url) {
                    window.open(resOrderCard.session.url)
                }
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn")
            }
        }
    }, [loading])


    return [handelCreateOrderCARD]


}

export default OrderPayCardHook