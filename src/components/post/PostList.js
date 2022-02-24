import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  loading,
  error,
  currentUser,
  loginUser,
  getPost,
}) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <>
      {currentUser && <Categories />}
      <PostListBlock>
        <WritePostButtonWrapper>
          {currentUser === loginUser && (
            <StyledLink to="../write">+ 새 개시물</StyledLink>
          )}
        </WritePostButtonWrapper>
        <Article>
          {!loading &&
            posts &&
            posts.map((post, i) => {
              return (
                <PostItem key={post.id} onClick={() => getPost(post.id)}>
                  <img src={post.postFilesUrl[0]} alt="test" key={post.id} />
                </PostItem>
              );
            })}
        </Article>
      </PostListBlock>
    </>
  );
};

export default PostList;

const PostListBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;

  .post-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    div {
      justify-content: flex-end;
    }
  }
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  border: 0;
  color: #0095f6;
  display: inline;
  padding: 0;
  position: relative;
  background: 0 0;
  cursor: pointer;
  right: 0;
  text-align: center;
  text-decoration: none;

  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  margin-right: 28px;

  @media (max-width: 735px) {
    margin-right: 3px;
  }
`;

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0px;
  padding-top: 0px;
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  flex-basis: 33.33%;
  padding-right: 28px;
  padding-bottom: 28px;
  box-sizing: border-box;

  @media (max-width: 735px) {
    padding-right: 3px;
    padding-bottom: 3px;
  }

  img {
    border: 1px solid #999;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;
