import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDatataToken } from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import { useUpdateDataWithImage } from "../../Hooks/useUpdateDate";
import { CREATE_PRODUCTS, DELETE_PRODUCTS, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, UPDATE_PRODUCTS } from "../types/Types";


//create product with pagination
export const createProduct=(formData)=>async (dispatch)=>{
    try{
        const response=await useInsertDataWithImage(`/api/v1/products`,formData);
        dispatch({
            type:CREATE_PRODUCTS,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}



//get all products with pagination
export const getAllProducts=(limit,page,word)=>async (dispatch)=>{
    try{
        const response=await useGetDatataToken(`/api/v1/products?limit=${limit}&page=${page}`);
        dispatch({
            type:GET_ALL_PRODUCTS,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}
//get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const response = await useGetDatataToken(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get one product with id
export const getOneProduct=(id)=>async (dispatch)=>{
    try{
        const response=await useGetDatataToken(`/api/v1/products/${id}`);
        dispatch({
            type:GET_PRODUCT_DETAILS,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get products with same category
export const getProductLike=(id)=>async (dispatch)=>{
    try{
        const response=await useGetDatataToken(`/api/v1/products?category=${id}`);
        dispatch({
            type:GET_PRODUCT_LIKE,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//delete product with id
export const deleteProduct=(id)=>async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type:DELETE_PRODUCTS,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//update product with id
export const updateProduct=(id,formdata)=>async (dispatch)=>{
    try{
        const response=await useUpdateDataWithImage(`/api/v1/products/${id}`,formdata);
        dispatch({
            type:UPDATE_PRODUCTS,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}