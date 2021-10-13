import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import Header from './common/Header';
import Responsive from './common/Responsive';
import test from '../images/logo512.png';
import { Link } from 'react-router-dom';

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

  button {
    border: 0;
    color: #0095f6;
    display: inline;
    padding: 0;
    position: relative;
    background: 0 0;
    cursor: pointer;
    right: 0;
    text-align: center;

    font-size: 14px;
    line-height: 18px;
    font-weight: 600;

    margin-right: 28px;

    @media (max-width: 735px) {
      margin-right: 3px;
    }
  }
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
`;

const PostRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 0%;
  margin-bottom: 28px;

  @media (max-width: 735px) {
    margin-bottom: 3px;
  }
`;

const PostItem = styled.div`
  display: block;
  width: 100%;
  border: 1px solid #999;
  border-radius: 5px;
  margin-right: 28px;

  @media (max-width: 735px) {
    margin-right: 3px;
  }

  img {
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

function PostList({ posts }) {
  return (
    <>
      <Categories />
      <PostListBlock>
        <WritePostButtonWrapper>
          <Link to="./write">
            <button>+새 개시물</button>
          </Link>
        </WritePostButtonWrapper>
        <Article>
          <PostRow>
            <PostItem>
              <img src={test} alt="test" />
            </PostItem>
            <PostItem>
              <img src={test} alt="test" />
            </PostItem>
            <PostItem>
              <img src={test} alt="test" />
            </PostItem>
          </PostRow>
          <PostRow>
            <PostItem>
              <img src={test} alt="test" />
            </PostItem>
            <PostItem>
              <img src={test} alt="test" />
            </PostItem>
            <PostItem>
              <img src={test} alt="test" />
            </PostItem>
          </PostRow>
        </Article>
      </PostListBlock>
    </>
  );
}

export default PostList;
