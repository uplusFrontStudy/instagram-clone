import React, { useState } from 'react';
import styled from 'styled-components';
import FollowActionButtonContainer from '../../containers/profile/FollowActionButtonContainer';
import ImageUploadModalContainer from '../../containers/profile/ImageUploadModalContainer';
import defaultImg from '../../images/profile_default_image.png';
import palette from '../../lib/styles/palettes';
import Responsive from '../common/Responsive';
import FollowModalButton from './FollowModalButton';

const Profile = ({ currentUser, loginUser, loading, error }) => {
    
    const [uploadModal, setUploadModal] = useState(false);
    const onShowModal = () => setUploadModal(true); 
    const onHideModal = () => setUploadModal(false);
    
    // 에러 발생
    if(error) {
        alert(error);
        if (error.response && error.response.tatus === 404) {
            return <h1>사용자 정보를 불러오는 도중 에러가 발생하였습니다.</h1>;
        }
        return <h1>오류 발생</h1>
    }

    // 로딩 중이거나 아직 사용자 데이터가 없을 때
    if (loading || typeof loginUser === 'string' || !currentUser ) {
        return null;
    }
    
    const { userId, userName, profileURL, posts, followers, following, introduce } = currentUser;

    
    return (
        <>
            <ProfileBlock>
                <ProfileSection>
                    <ImageSection>
                        <div onClick={onShowModal}>
                            <img src={profileURL || defaultImg} alt="프로필 이미지 바꾸기"/>
                        </div>
                    </ImageSection>
                    <UserInfo>
                        <div>
                            <h2>{userId}</h2>
                            <FollowActionButtonContainer
                                currentUser={currentUser}
                                loginUser={loginUser[0]}
                                visibleProfileEditButton={true}/>
                        </div>
                        <ul>
                            <li><p>게시물 <span>{ posts? posts.length : 0}</span></p></li>
                            <li><FollowModalButton buttonName='팔로워' data={followers} loginUser={loginUser[0]}/></li>
                            <li><FollowModalButton buttonName='팔로우' data={following} loginUser={loginUser[0]}/></li>
                        </ul>
                        <div>{userName}</div>
                        <div className='introduce'>{introduce}</div>
                    </UserInfo>
                </ProfileSection>
            </ProfileBlock>
            <ImageUploadModalContainer visible={uploadModal} onCancle={onHideModal}/>
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
    margin: 30px auto 0px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(var(--b38,219,219,219),1);
    display: flex;
    font-size: 1.125rem;
`;

const ImageSection = styled.div`
    width: 290px;
    height: 150px;
    margin: 0 30px 0 0;
    display: flex;
    justify-content: center;

    & > div {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
        border: 0.5px solid ${palette.gray[5]};
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const UserInfo = styled.section`
    padding-top: 10px;

    & > * {
        margin-bottom: 13px;
        display: flex;
    }

    & > div > h2 {
        font-size: 28px;
        font-weight: 300;
        line-height: 32px;
        padding-right: 20px;
    }

    & > ul {
        font-size: 16px;
    }

    & > ul > li {
        padding: 10px;
        margin-right: 20px;
    }

    & > ul > li:nth-child(1) {
        padding-left: 0px;
    }

    & > ul:nth-child(2) > li:nth-child(n+2) {
        cursor: pointer;
    }

    & > ul + div {
        font-weight: 400;
        margin-bottom: 8px;
    }

    .introduce {
        font-weight: 100;
        font-size: 14px;
    }
`;