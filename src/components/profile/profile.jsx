import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ModalConatainer from '../../containers/ModalConatainer';
import defaultImg from '../../images/profile_default_image.png';
import Header from '../common/Header';
import Responsive from '../common/Responsive';

const Profile = ({profileImage, user}) => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <Header />
            <ProfileBlock>
                <ProfileSection>
                    <ImageContainer onClick={()=> setModal(true)}>
                        <img src={profileImage || defaultImg} alt="프로필 이미지 바꾸기"/>
                    </ImageContainer>
                    <UserInfo>
                        <div>
                            <h2>{user.userId}</h2>
                            <Link to='./edit'>
                                <EditBtn>프로필 편집</EditBtn>
                            </Link>
                            <SettingBtn>
                                <svg aria-label="옵션" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fillRule="evenodd"></path></svg>
                            </SettingBtn>
                        </div>
                        <ul>
                            <li><p>게시물 <span>100</span></p></li>
                            <li><p>팔로워 <span>100</span></p></li>
                            <li><p>팔로우 <span>100</span></p></li>
                        </ul>
                        <div>{user.userName}</div>
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
        background-color:transparent;
        outline: 0;
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

const EditBtn = styled.button`
    height: 30px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 5px 9px;
    font-weight: 600;
    margin: 0 10px 0 20px;
`;

const SettingBtn = styled.button`
    border: 0;
`;