import { GET_ALL_ORDER, UPDATE_ORDER_DELIVER, GET_ONE_ORDER, UPDATE_ORDER_PAY } from '../types/Types'

import { useGetDatataToken } from '../../Hooks/useGetData'
import { useUpdateData } from '../../Hooks/useUpdateDate';

export const getAllOrders = (page, limit) => async (dispatch) => {
    try {
        const response = await useGetDatataToken(`/api/v1/orders?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_ORDER,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_ORDER,
            payload: e.response,
        })
    }
}

export const getOneOrders = (id) => async (dispatch) => {
    try {
        const response = await useGetDatataToken(`/api/v1/orders/${id}`);

        dispatch({
            type: GET_ONE_ORDER,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ONE_ORDER,
            payload: e.response,
        })
    }
}

export const changeOrderPay = (id) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/orders/${id}/pay`);

        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: e.response,
        })
    }
}

export const changeOrderDeliver = (id) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/orders/${id}/deliver`);

        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: e.response,
        })
    }
}