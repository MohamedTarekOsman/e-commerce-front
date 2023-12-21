import {CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_One_CATEGORY} from '../types/Types'

const inial={
    category:[],
    oneCategory:[],
    loading:true,
}

const categoryReducer=(state=inial,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category:action.payload,
                loading:false
            }
        case CREATE_CATEGORY:
            return{
                category:action.payload,
                loading:false
            }
        case GET_One_CATEGORY:
            return {
                ...state,
                oneCategory:action.payload,
                loading:false
            }
        case GET_ERROR:
            return{
                category:action.payload,
                loading:true
            }
        default:
            return state;
    }
}

export default categoryReducer