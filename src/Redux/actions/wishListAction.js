import { useGetDatataToken } from '../../Hooks/useGetData';
import { useInsertData } from '../../Hooks/useInsertData';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from '../types/Types'
import useDeleteData from './../../Hooks/useDeleteData';



//add product to wishlist 
export const addProductToWishList = (body) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/v1/wishlist", body);

        dispatch({
            type: ADD_TO_WISHLIST,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: e.response,
        })
    }
}

//remove product to wishlist 
export const removeProductToWishList = (prodID) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/wishlist/${prodID}`);
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: e.response,
        })
    }
}

//get wishlist product 
export const getProductWishList = () => async (dispatch) => {
    try {
        const response = await useGetDatataToken(`/api/v1/wishlist`);
        dispatch({
            type: USER_WISHLIST,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: USER_WISHLIST,
            payload: e.response,
        })
    }
}