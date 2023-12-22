/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrders } from '../../Redux/actions/ordersAction';

const GetOrderDetalisHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch()


    const get = async () => {
        setLoading(true)
        await dispatch(getOneOrders(id))
        setLoading(false)
    }

    useEffect(() => {
        get()
    }, [])

    //get address detalis for user
    const resOneOrder = useSelector(state => state.orderReducer.getOneOrder)
    useEffect(() => {
        if (loading === false) {
            if (resOneOrder.data)
                setOrderData(resOneOrder.data)
            if (resOneOrder.data.cartItems)
                setCartItems(resOneOrder.data.cartItems)
        }
    }, [loading])


    return [orderData, cartItems]

}

export default GetOrderDetalisHook