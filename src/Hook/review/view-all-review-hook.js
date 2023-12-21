/* eslint-disable react-hooks/exhaustive-deps */


import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allReviewProduct } from './../../Redux/actions/reviewAction';

const ViewAllReviewHook = (id) => {
    const dispatch = useDispatch();



    const allReview = useSelector((state) => state.reviewReducer.allReviewProduct)

    useEffect(() => {
        dispatch(allReviewProduct(id, 1, 5))
    }, [])

    const onPress = async (page) => {
        await dispatch(allReviewProduct(id, page, 5))
    }

    return [allReview, onPress]
}

export default ViewAllReviewHook