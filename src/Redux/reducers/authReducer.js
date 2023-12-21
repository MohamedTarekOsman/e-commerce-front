import {CREATE_NEW_USER, FOREGT_PASSWORD, GET_CURRENT_USER, LOGIN_USER, RESET_PASSWORD, UPDATE_USER_PASSWORD, UPDATE_USER_PROFILE, VERIFY_PASSWORD} from '../types/Types'

const inial={
    createUser:[],
    loginUser:[],
    currentUser:[],
    forgetPassword:[],
    resetPassword:[],
    verifyPassword:[],
    userProfile: [],
    userChangePassword: [],
    loading:true,
}

const authReducer=(state=inial,action)=>{
    switch(action.type){
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser:action.payload,
            }
        case LOGIN_USER:
            return {
                ...state,
                loginUser:action.payload,
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload,
            }
        case FOREGT_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
        case VERIFY_PASSWORD:
            return {
                ...state,
                verifyPassword: action.payload,
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            }
        case UPDATE_USER_PASSWORD:
            return {
                ...state,
                userChangePassword: action.payload,
            }
        default:
            return state;
    }
}

export default authReducer