import  {GET_ALL_BRAND ,CREATE_BRAND, GET_One_BRAND, GET_ERROR}  from "../types/Types";
import {useGetData} from "../../Hooks/useGetData";
import {useInsertDataWithImage} from "../../Hooks/useInsertData";

//get all brands with pagination
export const getAllBrand=(limit,page)=>async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`)
        dispatch({
            type:GET_ALL_BRAND,
            payload:response,
        })
    }catch(e){
        dispatch({
            type:GET_ALL_BRAND,
            payload: "Error " + e,
        })
    }
}

//create brand
export const createBrand=(formData)=>async (dispatch)=>{
    try{
        const response=await useInsertDataWithImage(`/api/v1/brands`,formData);
        dispatch({
            type:CREATE_BRAND, 
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:CREATE_BRAND,
            payload: "Error " + e,
        })
    }
}

//get one brand
export const getOneBrand=(id)=>async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/brands/${id}}`)
        dispatch({
            type:GET_One_BRAND,
            payload:response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}
