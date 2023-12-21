import { ADD_COUPON, GET_ALL_COUPON, EDIT_COUPON, GET_ONE_COUPON, DELTET_COUPON } from '../types/Types'

import { useInsertData } from '../../Hooks/useInsertData'
import { useGetDatataToken } from '../../Hooks/useGetData'
import useDeleteData from './../../Hooks/useDeleteData';
import { useUpdateData } from '../../Hooks/useUpdateDate';
//add coupon
export const addCoupon = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/coupons`, body);
        dispatch({
            type: ADD_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_COUPON,
            payload: e.response,
        })
    }
}
//get all coupon
export const getAllCoupon = () => async (dispatch) => {
    try {
        const response = await useGetDatataToken(`/api/v1/coupons`);
        dispatch({
            type: GET_ALL_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_COUPON,
            payload: e.response,
        })
    }
}

//get one coupon
export const getOneCoupon = (id) => async (dispatch) => {
    try {
        const response = await useGetDatataToken(`/api/v1/coupons/${id}`);
        dispatch({
            type: GET_ONE_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ONE_COUPON,
            payload: e.response,
        })
    }
}

//delete coupon
export const deleteCoupon = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/coupons/${id}`);
        dispatch({
            type: DELTET_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELTET_COUPON,
            payload: e.response,
        })
    }
}

//edit coupon
export const editCoupon = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/coupons/${id}`, body);
       
        dispatch({
            type: EDIT_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: EDIT_COUPON,
            payload: e.response,
        })
    }
}