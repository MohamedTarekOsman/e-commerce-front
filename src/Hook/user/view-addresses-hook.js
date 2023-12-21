/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserAddress } from '../../Redux/actions/userAddressesAction';

const ViewAddressesHook = () => {
    const disptach = useDispatch()
    useEffect(() => {
        const get = async () => {
            await disptach(getAllUserAddress());
        }
        get();
    }, [])

    const res = useSelector(state => state.userAddressesReducer.allAddresses)
  

    return [res]
}

export default ViewAddressesHook