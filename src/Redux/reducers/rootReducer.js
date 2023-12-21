import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import authReducer from './authReducer'
import brandReducer from './brandReducer'
import subCategoryReducer from './subCategoryReducer'
import productsReducer from './productsReducer'
import reviewReducer from './reviewReducer'
import addToWishListReducer from './wishListReducer'
import couponReducer from './couponReducer'
import userAddressesReducer from './userAddressesReducer'
import cartReducer from './cartReducer'


export default combineReducers({
    allCategory:categoryReducer,
    allBrand:brandReducer,
    subCategory:subCategoryReducer,
    allproducts: productsReducer,
    authReducer:authReducer,
    reviewReducer: reviewReducer,
    addToWishListReducer: addToWishListReducer,
    couponReducer: couponReducer,
    userAddressesReducer: userAddressesReducer,
    cartReducer:cartReducer,
})