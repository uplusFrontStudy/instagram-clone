import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Modal from './modal';

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
    border: 1px solid red;
  }
`

const Profile = () => {

    const [modal, setModal] = useState(false);
    
    return (
        <ProfileSection>
            <ImageContainer>
                <Image  src="images/profileImage.png" alt="profile" onClick={() => setModal(true)}/>
            </ImageContainer>
            <Modal trigger={modal} setTrigger={setModal} />
            <div>         
                <UserInfo>
                    <UserId>hong.__ggddi</UserId>
                    <EditBtn>프로필 편집</EditBtn>
                    <SettingBtn>
                        <svg aria-label="옵션" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>
                    </SettingBtn>
                </UserInfo>
                <DataList>
                    <Datas>
                        <DataTitle>게시물 <DataSpan>100</DataSpan></DataTitle>
                    </Datas>
                    <Datas>
                        <DataTitle>팔로워 <DataSpan>100</DataSpan></DataTitle>
                    </Datas>
                    <Datas>
                        <DataTitle>팔로우 <DataSpan>100</DataSpan></DataTitle>
                    </Datas>
                </DataList>
                <UserName>홍길동</UserName>
            </div>
      </ProfileSection>
  
    );
    }

export default Profile;

const ProfileSection = styled.section`
    border: 1px solid black;
    max-width: 975px;
    width: 80%;
    margin: 0 auto;
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    margin-top: 54px;
`;

const ImageContainer = styled.div`
    width: 290px;
    height: 150px;
    margin: 0 30px 0 0;
    text-align: center;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    cursor: pointer;
`;

const UserInfo = styled.div`
    margin-top: 15px;
    display: flex;
    width: 100%;
    align-items: center;
`;

const UserId = styled.h2`
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    margin: 0 20px 0 0;
    color: #262626;
`;

const EditBtn = styled.button`
    height: 30px;
    background-color:transparent;
    outline: 0;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 5px 9px;
    font-weight: 600;
    font-size: 14px;
    color: #262626;
    margin-right: 10px;
`;

const SettingBtn = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
`;

const DataList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0px;
    margin: 3px 0;
`;

const Datas = styled.li`
    margin-right: 40px;
`;

const DataTitle = styled.p`
    color: #262626;
    font-size: 16px;
`;

const DataSpan= styled.span`
    font-weight: 600;
`;

const UserName = styled.h1`
    color: #262626;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`

