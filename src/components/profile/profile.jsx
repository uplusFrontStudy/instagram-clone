import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';


const Profile = ({loadingProfileImage, profileImage}) => {
    //console.log('profileImage', profileImage);
    return (
        <ProfileSection>
            <ImageContainer>
                <Image  src={profileImage} />
            </ImageContainer>
            <Modal/>
            <div>         
                <UserInfo>
                    <UserId>hong.__ggddi</UserId>
                    <EditBtn>프로필 편집</EditBtn>
                    <SettingBtn>
                        ...
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

