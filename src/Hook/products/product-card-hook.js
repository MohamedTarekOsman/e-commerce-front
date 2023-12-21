/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToWishList, removeProductToWishList } from './../../Redux/actions/wishListAction';
import notify from './../../Hook/useNotifaction';
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
const ProductCardHook = (item, favProd) => {
    const dispatch = useDispatch();
    const [favImg, setFavImg] = useState(favoff)
    let Fav = favProd.some(fitem => fitem === item._id);
    const [loadingAdd, setLoadingAdd] = useState(true)
    const [loadingRemove, setLoadingRemove] = useState(true)
    const [isFav, setIsFav] = useState(Fav)


    useEffect(() => {
        setIsFav(favProd.some(fitem => fitem === item._id))
    }, [favProd])

    const handelFav = () => {
        if (isFav) {
            removeToWishListData();
        } else {
            addToWishListData()
        }
    }

    useEffect(() => {

        if (isFav === true) {
            setFavImg(favon)
        }
        else {
            setFavImg(favoff)
        }

    }, [isFav])

    const resAdd = useSelector(state => state.addToWishListReducer.addWishList)
    const resRemove = useSelector(state => state.addToWishListReducer.removeWishList)

    const addToWishListData = async () => {
        setIsFav(true)
        setFavImg(favon)
        setLoadingAdd(true)
        await dispatch(addProductToWishList({
            productId: item._id,
        }))
        setLoadingAdd(false)
    }




    const removeToWishListData = async () => {
        setIsFav(false)
        setFavImg(favoff)
        setLoadingRemove(true)
        await dispatch(removeProductToWishList(item._id))
        setLoadingRemove(false)

    } 


    useEffect(() => {
        if (loadingAdd === false) {
            if (resAdd && resAdd.statuse === "success") {
                notify("تمت اضافة المنتج للمفضلة بنجاح", "success")
            } else if (resAdd && resAdd.status === 500) {
                notify("انت غير مسجل", "error")
            }else{
                notify("لا يمكن للأدمن التقييم", "error")
            }
        }
    }, [loadingAdd])

    useEffect(() => {
        if (loadingRemove === false) {
            if (resRemove && resRemove.statuse === "success") {
                notify("تمت حذف المنتج من المفضلة بنجاح", "warn")
            } else if (resRemove && resRemove.status === 500 ) {
                notify("انت غير مسجل", "error")
            }else{
                notify("لا يمكن للأدمن التقييم", "error")
            }
        }
    }, [loadingRemove])


    return [removeToWishListData, addToWishListData, handelFav, favImg]
}

export default ProductCardHook