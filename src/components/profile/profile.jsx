import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ModalConatainer from '../../containers/profile/ModalConatainer';
import defaultImg from '../../images/profile_default_image.png';
import Header from '../common/Header';
import Responsive from '../common/Responsive';

const Profile = ({user, loginUser, followStatusUpdate, loading, error}) => {
    
    
    const [modal, setModal] = useState(false);
    // 에러 발생시
    if(error) {
        if (error.response && error.response.tatus === 404) {
            return <h1>사용자 정보를 불러오는 도중 에러가 발생하였습니다.</h1>;
        }
        return <h1>오류 발생</h1>
    }

    // 로딩 중이거나 아직 사용자 데이터가 없을 때
    if (loading || !user) {
        return null;
    }
    const {userId, userName, profileURL, posts, follower, follow} = user;


    const followChange = () => {
        console.log(userId);

    };
    

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
                            {
                                userId === loginUser.userId ?
                                <Link to= "/account/edits"><EditBtn>프로필 편집</EditBtn></Link>:
                                <FollowBtn onClick={followChange}>팔로우</FollowBtn>
                            }
                        </div>
                        <ul>
                            <li><p>게시물 <span>{posts.length}</span></p></li>
                            <li><p>팔로워 <span>{follower.length}</span></p></li>
                            <li><p>팔로우 <span>{follow.length}</span></p></li>
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