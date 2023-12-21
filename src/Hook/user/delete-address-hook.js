import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUserAddress } from './../../Redux/actions/userAddressesAction';

const DeleteAddressHook = (id) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handelDelete = async () => {

        await dispatch(deleteUserAddress(id))
        setShow(false);
        window.location.reload(false);
    }

    
    return [show, handleClose, handleShow, handelDelete]
}

export default DeleteAddressHook