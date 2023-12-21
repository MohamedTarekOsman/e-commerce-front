import {CREATE_SUB_CATEGORY,GET_SUB_CATEGORY,GET_ERROR} from '../types/Types'

const inial={
    subcategory:[],
    loading:true,
}

const subCategoryReducer=(state=inial,action)=>{
    switch(action.type){
        case CREATE_SUB_CATEGORY:
            return{
                ...state,
                subcategory:action.payload,
                loading:false
            }
        case GET_SUB_CATEGORY:
            return{
                subcategory:action.payload,
                loading:false
            }
        case GET_ERROR:
            return{
                subcategory:action.payload,
                loading:true
            }
        default:
            return state;
    }
}

export default subCategoryReducer