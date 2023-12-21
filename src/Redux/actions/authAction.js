import { CREATE_NEW_USER, FOREGT_PASSWORD, GET_CURRENT_USER, LOGIN_USER, RESET_PASSWORD, VERIFY_PASSWORD,UPDATE_USER_PASSWORD,UPDATE_USER_PROFILE } from "../types/Types";
import {useInsertData} from "../../Hooks/useInsertData"
import {useGetDatataToken} from "../../Hooks/useGetData";
import { useUpdateData } from "../../Hooks/useUpdateDate";

// create a new user
export const createNewUser=(data)=>async (dispatch)=>{
    try{
        const response=await useInsertData(`/api/v1/auth/signup`,data);
        dispatch({
            type:CREATE_NEW_USER,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:CREATE_NEW_USER,
            payload: e.response,
        })
    }
}


// login user
export const loginUser=(data)=>async (dispatch)=>{
    try{
        const response=await useInsertData(`/api/v1/auth/login`,data);
        dispatch({
            type:LOGIN_USER,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:LOGIN_USER,
            payload: e.response,
        })
    }
}

// get looged user data
export const getLoggedUser=()=>async (dispatch)=>{
    try{
        const response=await useGetDatataToken(`/api/v1/users/getMe`);
        dispatch({
            type:GET_CURRENT_USER,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_CURRENT_USER,
            payload: e.response,
        })
    }
}

//1-foregt  passwrod 
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/forgotPassword`, data);
        dispatch({
            type: FOREGT_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: FOREGT_PASSWORD,
            payload: e.response,
        })
    }
}


//2-verify  passwrod 
export const verifyPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
        dispatch({
            type: VERIFY_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
        })
    }
}


//2-reset  passwrod 
export const resetPassword = (data) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/auth/resetPassword`, data);
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
        })
    }
}

export const updateUserProfileData = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/users/updateMe`, body);
        console.log(response)
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: e.response,
        })
    }
}


//update  user password
export const updateUserPassword = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/users/chageMyPassword`, body);
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: e.response,
        })
    }
}