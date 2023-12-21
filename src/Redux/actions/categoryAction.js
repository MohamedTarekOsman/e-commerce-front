import  {GET_ALL_CATEGORY,CREATE_CATEGORY, GET_ERROR, GET_One_CATEGORY }  from "../types/Types";
import {useGetData} from "../../Hooks/useGetData";
import {useInsertDataWithImage} from "../../Hooks/useInsertData";

//get all categories with pagination
export const getAllCategory=(limit,page)=>async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//create category
export const createCategory=(formData)=>async (dispatch)=>{
    try{
        const response=await useInsertDataWithImage(`/api/v1/categories`,formData);
        dispatch({
            type:CREATE_CATEGORY,
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


//get one categorie
export const getOneCategory=(id)=>async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/categories/${id}}`)
        dispatch({
            type:GET_One_CATEGORY,
            payload:response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload: "Error " + e,
        })
    }
}


