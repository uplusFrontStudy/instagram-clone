import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploadModalContainer from '../../containers/profile/ImageUploadModalContainer';
import ModalConatainer from '../../containers/profile/ModalConatainer';
import defaultImg from '../../images/profile_default_image.png';
import Header from '../common/Header';
import Responsive from '../common/Responsive';
import FollowModalButton from './FollowModalButton';

const Profile = ({ user, loading, error, followActionButton }) => {
    
    const [modal, setModal] = useState(false);
    
    // 에러 발생
    if(error) {
        alert(error);
        if (error.response && error.response.tatus === 404) {
            return <h1>사용자 정보를 불러오는 도중 에러가 발생하였습니다.</h1>;
        }
        return <h1>오류 발생</h1>
    }

    // 로딩 중이거나 아직 사용자 데이터가 없을 때
    if (loading || !user ) {
        return null;
    }
    
    const {userId, userName, profileURL, posts, follower, follow} = user;
    
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
                            {followActionButton}
                        </div>
                        <ul>
                            <li><p>게시물 <span>{ posts? posts.length : 0}</span></p></li>
                            <li><FollowModalButton buttonName='팔로워' data={follower}/></li>
                            <li><FollowModalButton buttonName='팔로우' data={follow}/></li>
                        </ul>
                        <div>{userName}</div>
                    </UserInfo>
                </ProfileSection>
            </ProfileBlock>
        <ImageUploadModalContainer />
        {/*
        <ModalConatainer trigger={modal} setTrigger={setModal}/>
        */}

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
        
    }

    div:nth-child(1) h2{
        font-size: 28px;
        font-weight: 300;
        line-height: 32px;
    }

    & > ul:nth-child(2) {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0px;
        margin: 3px 0;
        
        font-size: 16px;
    }

    & > ul:nth-child(2) > li {
        padding: 10px;
        margin-right: 20px;
    }

    & > ul:nth-child(2) > li:nth-child(1) {
        padding-left: 0px;
    }

    & > ul:nth-child(2) > li:nth-child(n+2) {
        cursor: pointer;
    }

    & > ul:nth-child(2) > li span{
        font-weight: 600;
    }

    & > div:nth-child(3) {
        font-weight: 600;
    }
`;