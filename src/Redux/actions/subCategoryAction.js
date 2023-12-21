
import {useInsertData} from "../../Hooks/useInsertData";
import { useGetData } from "../../Hooks/useGetData";
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../types/Types";



//create category
export const createSubCategory=(data)=>async (dispatch)=>{
    try{
        const response=await useInsertData(`/api/v1/subcategories`,data);
        dispatch({
            type:CREATE_SUB_CATEGORY,
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


//get subCategory depend on categoryId
export const getOneCategory=(id)=>async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/categories/${id}/subcategrories`);
        dispatch({
            type:GET_SUB_CATEGORY,
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