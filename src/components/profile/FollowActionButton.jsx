import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FollowActionButton = ({ user, loginUser, editUser, editLoginUser , visibleProfileEditButton}) => {

    if (!user || !loginUser ) {
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
                follow: loginUser.follow.filter((data) => data !== user.userId),
            });
            // (2) 유저 => follower 배열에서 삭제
            editUser({
                userId: user.userId,
                follower: user.follower.filter((data) => data !== loginUser.userId),
            });
            return;
        } else {
            // follow 안한 상태 => 버튼 클릭 => 팔로우 신청
            // (1) 로그인한 유저 => follow 배열에 d넣기       
            editLoginUser({
                userId: loginUser.userId,
                follow: loginUser.follow.concat([user.userId]),
            });
            // (2) 유저 => follower 배열에 넣기
            editUser({
                userId: user.userId,
                follower: user.follower.concat([loginUser.userId]),
            });
            return;
        }
    };
    // 로그인한 유저는 [프로필 편집] 버튼, 다른 사람 프로필 방문시 [팔로우] 버튼 출력
    let userBtn = null;
    if (user.userId === loginUser.userId) {
        // follow list 모달에서는 [프로필 편집 ] 버튼이 뜨면 안됨
        userBtn =  visibleProfileEditButton ? <Link to= "/account/edits"><EditBtn>프로필 편집</EditBtn></Link> : "";
    } else {
        loginUser.follow.some(data => data === user.userId) ?
            userBtn = <FollowCancleBtn data-follow-status="true" onClick={followChange}>팔로잉</FollowCancleBtn>
            : userBtn = <FollowBtn data-follow-status="false" onClick={followChange}>팔로우</FollowBtn>;
    }
    return <>{userBtn}</>
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
    background-color: #0095f6;
    color: white;
    border: 0px;
`;