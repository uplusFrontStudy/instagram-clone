import React, { useState } from 'react';
import styled from 'styled-components';
import EditModalContainer from '../../containers/profile/EditModalContainer';

const FollowActionButton = ({ currentUser, loginUser, editCurrentUser, editLoginUser , visibleProfileEditButton}) => {

    const [editModal, setEditModal] = useState(false);// edit modal
    const onShowModal = () => setEditModal(true); 
    const onHideModal = () => setEditModal(false);


    if (!currentUser || !loginUser ) {
        return null;
    } 

    function followChange(event) {

        // followStatus => true: follow 된 상태, false: 팔로우 안한 상태
        const followStatus = (event.target.dataset.followStatus === "true") ? true : false;
    
        if(followStatus) {
            // follow 된 상태 => 버튼 클릭 => 팔로우 취소
            // (1) 로그인한 유저 => follow 배열에서 삭제 
            editLoginUser({
                userId: loginUser.userId,
                uid: loginUser.uid,
                following: loginUser.following.filter((data) => data !== currentUser.userId),
            });
            // (2) 유저 => follower 배열에서 삭제
            editCurrentUser({
                userId: currentUser.userId,
                uid: currentUser.uid,
                followers: currentUser.followers.filter((data) => data !== loginUser.userId),
            });
            return;
        } else {
            // follow 안한 상태 => 버튼 클릭 => 팔로우 신청
            // (1) 로그인한 유저 => follow 배열에 d넣기       
            editLoginUser({
                userId: loginUser.userId,
                uid: loginUser.uid,
                following: loginUser.following.concat([currentUser.userId]),
            });
            // (2) 유저 => follower 배열에 넣기
            editCurrentUser({
                userId: currentUser.userId,
                uid: currentUser.uid,
                followers: currentUser.followers.concat([loginUser.userId]),
            });
            return;
        }
    };
    // 로그인한 유저는 [프로필 편집] 버튼, 다른 사람 프로필 방문시 [팔로우] 버튼 출력
    let userBtn = null;
    if (currentUser.userId === loginUser.userId) {
        // follow list 모달에서는 [프로필 편집 ] 버튼이 뜨면 안됨
        userBtn =  visibleProfileEditButton ? 
        <><EditBtn onClick={onShowModal}>프로필 편집</EditBtn> <EditModalContainer visible={editModal} onCancle={onHideModal} currentUser={currentUser}/></>
        : "";
    } else {
        loginUser.following.some(data => data === currentUser.userId) ?
            userBtn = <FollowCancleBtn data-follow-status="true" onClick={followChange}>팔로잉</FollowCancleBtn>
            : userBtn = <FollowBtn data-follow-status="false" onClick={followChange}>팔로우</FollowBtn>;
    }
    return <>{userBtn}</>;
}

export default FollowActionButton;


const Button = styled.button`
    height: 30px;
    border-radius: 4px;
    padding: 5px 9px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 10px 0 0px;
    outline: 0;
    
`;

const EditBtn = styled(Button)`
    background-color:transparent;
    border: 1px solid #dbdbdb;
`;

const FollowBtn = styled(Button)`
    background-color: #0095f6;
    color: white;
    border: 0px;
`;

const FollowCancleBtn = styled(Button)`
background-color:transparent;
border: 1px solid #dbdbdb;
`;