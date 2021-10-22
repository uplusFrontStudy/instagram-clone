import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ModalConatainer from '../../containers/profile/ModalConatainer';
import defaultImg from '../../images/profile_default_image.png';
import Header from '../common/Header';
import Responsive from '../common/Responsive';

const Profile = ({user, loginUser, editUser, editLoginUser, loading, error}) => {
    
    
    const [modal, setModal] = useState(false);
    // 에러 발생시
    if(error) {
        alert(error);
        if (error.response && error.response.tatus === 404) {
            return <h1>사용자 정보를 불러오는 도중 에러가 발생하였습니다.</h1>;
        }
        return <h1>오류 발생</h1>
    }

    // 로딩 중이거나 아직 사용자 데이터가 없을 때
    if (loading || !user || !loginUser) {
        
        return null;
    }
    

    const {userId, userName, profileURL, posts, follower, follow} = user;
    


    function followChange(event) {
        // followStatus => true: follow 된 상태, false: 팔로우 안한 상태
        const followStatus = (event.target.dataset.followStatus === "true") ? true : false;
    
        if(followStatus) {
            // follow 된 상태 => 버튼 클릭 => 팔로우 취소
            // (1) 로그인한 유저 => follow 배열에서 삭제 
            editLoginUser({
                userId: loginUser.userId,
                follow: loginUser.follow.filter((data) => data !== userId),
            });
            // (2) 유저 => follower 배열에서 삭제
            editUser({
                userId: userId,
                follower: follower.filter((data) => data !== loginUser.userId),
            });
            return;
        } else {
            // follow 안한 상태 => 버튼 클릭 => 팔로우 신청
            // (1) 로그인한 유저 => follow 배열에 d넣기       
            editLoginUser({
                userId: loginUser.userId,
                follow: loginUser.follow.concat([userId]),
            });
            // (2) 유저 => follower 배열에 넣기
            editUser({
                userId: userId,
                follower: follower.concat([loginUser.userId]),
            });
            return;
        }
    };

    // 로그인한 유저는 [프로필 편집] 버튼, 다른 사람 프로필 방문시 [팔로우] 버튼 출력
    let userBtn = null;
    if (userId === loginUser.userId) {
        console.log(user, '&&&', loginUser);
        userBtn = <Link to= "/account/edits"><EditBtn>프로필 편집</EditBtn></Link>;
    } else {
        loginUser.follow.some(data => data === userId) ?
            userBtn = <FollowCancleBtn data-follow-status="true" onClick={followChange}>팔로잉</FollowCancleBtn>
            : userBtn = <FollowBtn data-follow-status="false" onClick={followChange}>팔로우</FollowBtn>;
    }
    

    return (
        <>
            <Header />
            <ProfileBlock>
                <ProfileSection>
                    <ImageContainer onClick={()=> setModal(true)}>
                        <img src={profileURL || defaultImg} alt="프로필 이미지 바꾸기"/>
                    </ImageContainer>
                    <UserInfo>
                        <div>
                            <h2>{userId}</h2>
                            {userBtn}
                        </div>
                        <ul>
                            <li><p>게시물 <span>{ posts? posts.length : 0}</span></p></li>
                            <li><p>팔로워 <span>{ follower ? follower.length : 0}</span></p></li>
                            <li><p>팔로우 <span>{ follow ? follow.length : 0}</span></p></li>
                        </ul>
                        <div>{userName}</div>
                    </UserInfo>
                </ProfileSection>
            </ProfileBlock>
        <ModalConatainer trigger={modal} setTrigger={setModal}/>
        </>
    );
}

export default Profile;

const ProfileBlock = styled(Responsive)`
    display: flex;
    padding: 1rem;
`;

const ProfileSection = styled.section`
    width:100%;
    margin: 85px auto 0px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(var(--b38,219,219,219),1);
    display: flex;
    font-size: 1.125rem;
`;

const ImageContainer = styled.div`
    width: 290px;
    height: 150px;
    margin: 0 30px 0 0;
    text-align: center;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
    }
`;

const UserInfo = styled.section`
    div{
        display: flex;
        align-items: center;
        margin-bottom:20px;
    }

    div:nth-child(1) h2{
        font-size: 28px;
        font-weight: 300;
        line-height: 32px;
    }

    div:nth-child(1) button {

    }

    ul:nth-child(2) {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0px;
        margin: 3px 0;
        margin-bottom:20px;
        font-size: 16px;
    }

    ul:nth-child(2) li {
        margin-right: 40px;
    }

    ul:nth-child(2) li span{
        font-weight: 600;
    }

    div:nth-child(3) {
        font-weight: 600;
    }
`;

const Button = styled.button`
    height: 30px;
    border-radius: 4px;
    padding: 5px 9px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 10px 0 20px;
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