import {CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_One_BRAND} from '../types/Types'

const inial={
    brand:[],
    oneBrand:[],
    loading:true,
}

const brandReducer=(state=inial,action)=>{
    switch(action.type){
        case GET_ALL_BRAND:
            return {
                ...state,
                brand:action.payload,
                loading:false
            }
        case CREATE_BRAND:
            return{
                brand:action.payload,
                loading:false
            }
        case GET_One_BRAND:
            return {
                ...state,
                oneBrand:action.payload,
                loading:false
            }
        case GET_ERROR:
            return{
                brand:action.payload,
                loading:true
            }
        default:
            return state;
    }
}

export default brandReducer