import {CREATE_PRODUCTS, DELETE_PRODUCTS, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, UPDATE_PRODUCTS} from '../types/Types'

const inial={
    products:[],
    allProducts:[],
    oneProduct:[],
    productLike:[],
    deleteProducts:[],
    updateProducts:[],
    loading:true,
}

const productsReducer=(state=inial,action)=>{
    switch(action.type){
        case CREATE_PRODUCTS:
            return {
                ...state,
                products:action.payload,
                loading:false
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts:action.payload,
                loading:false
            }
        case GET_PRODUCT_DETAILS:
            return {
                oneProduct:action.payload,
                loading:false
            }
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike:action.payload,
                loading:false
            }
        case DELETE_PRODUCTS:
            return {
                ...state,
                deleteProducts:action.payload,
                loading:false
            }
        case UPDATE_PRODUCTS:
            return {
                ...state,
                updateProducts:action.payload,
                loading:false
            }
        case GET_ERROR:
            return{
                products:action.payload,
                loading:true
            }
        default:
            return state;
    }
}

export default productsReducer