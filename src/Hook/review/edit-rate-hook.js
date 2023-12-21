/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotifaction';
import {  updateReviewOnProduct } from './../../Redux/actions/reviewAction';
const EditRateHook = (review) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)

    const [newRateText, setNewRateText] = useState(review.title);
    const [newRateValue, setNewRateValue] = useState(review.ratings);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const onChangeRateText = (e) => {
        setNewRateText(e.target.value)
    }
    const OnChangeRateValue = (val) => {
        setNewRateValue(val)
    }

    const handelEdit = async () => {
        setLoading(true)
        await dispatch(updateReviewOnProduct(review._id, {
            title: newRateText,
            ratings: newRateValue
        }))
        setLoading(false)
        handleCloseEdit();
    }
    const res = useSelector(state => state.reviewReducer.updateReview)

    useEffect(() => {
        if (loading === false) {
            if (res.data && res.data.title) {
                notify("تم تعديل التقييم بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        else if(res.data.status==="error"){
            notify("اقل تقييم 1 نجمة", "error")
        }else{
            notify("هناك مشكله فى عملية التعديل", "error")
        }
                
        }
    }, [loading])

    return [showEdit, handleCloseEdit, handleShowEdit, handelEdit, onChangeRateText, newRateText, OnChangeRateValue, newRateValue]

}


export default EditRateHook