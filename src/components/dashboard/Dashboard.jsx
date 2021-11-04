import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import defaultImg from '../../images/profile_default_image.png';
import icons from '../../images/icons2.png';
import { Link } from 'react-router-dom';
import Slider from '../common/Slider';

const Dashboard = ({ followPosts }) => {
  console.log(followPosts);
  return (
    <DashboardBlock>
      <PostSection>
        {followPosts &&
          followPosts.map((followPost, index) => {
            return (
              <PostArticle>
                <PostHeader>
                  <Profile>
                    <img
                      src={followPosts.profileURL || defaultImg}
                      alt={index}
                    />
                    <UserIdLink to={`./${followPost.userId}`}>
                      {followPost.userId}
                    </UserIdLink>
                  </Profile>
                  <Postinfo />
                </PostHeader>
                <Slider postImagesUrl={followPost.postImagesUrl} />
                <PostButtonSection>
                  <LikeButton />
                  <CommentButton />
                  <DirectButton />
                  <SaveButton />
                </PostButtonSection>
              </PostArticle>
            );
          })}
      </PostSection>
    </DashboardBlock>
  );
};

const DashboardBlock = styled(Responsive)`
  padding-top: 30px;
`;

const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
`;

const PostArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  margin-bottom: 24px;
  border-radius: 3px;
`;

const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  padding: 14px 4px 14px 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
`;

const Profile = styled.a`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserIdLink = styled(Link)`
  margin-left: 14px;
  color: #262626;
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
`;

const Postinfo = styled.a`
  display: flex;
  align-items: center;
  width: 15px;
  height: 3px;
  padding-right: 8px;
  background-position: -524px -483px;
  background-repeat: no-repeat;
  background-image: url(${icons});
`;

const PostButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 16px 8px;
  margin-top: 4px;
  border-top: 1px solid #dbdbdb;
`;

const LikeButton = styled.div`
  width: 24px;
  height: 24px;
  margin: 8px;
  background-position: -208px -474px;
  background-repeat: no-repeat;
  background-image: url(${icons});
`;

const CommentButton = styled.div`
  width: 24px;
  height: 24px;
  margin: 8px;
  background-position: -208px -447px;
  background-repeat: no-repeat;
  background-image: url(${icons});
`;

const DirectButton = styled.div`
  width: 24px;
  height: 20px;
  margin: 8px;
  background-position: -312px -448px;
  background-repeat: no-repeat;
  background-image: url(${icons});
`;

const SaveButton = styled.div`
  width: 19px;
  height: 24px;
  margin-left: auto; //margin-left를 auto로 주면 이 요소만 오른쪽 끝에 배치 가능
  background-position: -263px -499px;
  background-repeat: no-repeat;
  background-image: url(${icons});
`;

export default Dashboard;
