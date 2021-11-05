import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FollowListModalContainer from '../../containers/profile/FollowListModalContainer';
import { getFollowUsers } from '../../modules/profile';

const FollowButton = ({ buttonName, followUsers, loginUser}) => {

    const dispatch=useDispatch()    
    const [modal, setModal] = useState(false);

    async function onShowModal() {
        await dispatch(getFollowUsers(followUsers));
        setModal(true);
    }

    const onCancle = () => setModal(false);

    return (
        <>
            <p onClick={onShowModal}>{buttonName} <span>{ followUsers ? followUsers.length : 0}</span></p>
            <FollowListModalContainer buttonName={buttonName} followUsers={followUsers} loginUser={loginUser} visible={modal}  onCancle={onCancle}/>
        </>
    );
            
}

export default FollowButton;
