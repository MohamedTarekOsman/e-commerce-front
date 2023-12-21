import { ADD_TO_CART,APPALY_COUPON_CART, GET_ALL_USER_CART, UPDATE_ITEM_FROMCART, DELETE_ITEM_FROMCART, CLEAR_ALL_USER_CART } from '../types/Types'
import {  useGetDatataToken } from '../../Hooks/useGetData'
import { useInsertData } from '../../Hooks/useInsertData';
import useDeleteData from './../../Hooks/useDeleteData';
import { useUpdateData } from './../../Hooks/useUpdateDate'
//add to cart
export const addProductToCart = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/cart`, body);
        dispatch({
            type: ADD_TO_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_TO_CART,
            payload: e.response,
        })
    }
}


//get all cart items
export const getAllUserCartItems = () => async (dispatch) => {
    try {
        const response = await useGetDatataToken(`/api/v1/cart`);
        dispatch({
            type: GET_ALL_USER_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_USER_CART,
            payload: e.response,
        })
    }
}

//clearAll cart Item
export const clearAllCartItem = () => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart`);
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: e.response,
        })
    }
}
//delete cart Item
export const deleteCartItem = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart/${id}`);
        dispatch({
            type: DELETE_ITEM_FROMCART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELETE_ITEM_FROMCART,
            payload: e.response,
        })
    }
}

//update cart Item
export const updateCartItem = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/cart/${id}`, body);
        dispatch({
            type: UPDATE_ITEM_FROMCART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: UPDATE_ITEM_FROMCART,
            payload: e.response,
        })
    }
}


//update cart Item
export const applayCoupnCart = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
        dispatch({
            type: APPALY_COUPON_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: APPALY_COUPON_CART,
            payload: e.response,
        })
    }
}