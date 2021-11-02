import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FollowListModalContainer from '../../containers/profile/FollowListModalContainer';
import { getFollowUsers } from '../../modules/profile';

const FollowButton = ({ buttonName, data, loginUser}) => {

    const dispatch=useDispatch()    
    const [modal, setModal] = useState(false);

    async function onShowModal() {
        await dispatch(getFollowUsers(data));
        setModal(true);
    }

    const onCancle = () => setModal(false);

    return (
        <>
            <p onClick={onShowModal}>{buttonName} <span>{ data ? data.length : 0}</span></p>
            <FollowListModalContainer visible={modal} title={buttonName} data={data} loginUser={loginUser} onCancle={onCancle}/>
        </>
    );
            
}

export default FollowButton;
