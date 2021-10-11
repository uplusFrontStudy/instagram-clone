import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const FooterBlock = styled.div`
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;

const Wrapper = styled(Responsive)`
  padding: 40px 0 60px 0;

  .menu {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    flex-wrap: wrap;
    li {
      position: relative;

      a {
        text-decoration: none;
        color: rgba(var(--f52, 142, 142, 142), 1);
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        padding: 15px;
        display: block;
      }
    }
  }
`;

const footer = () => {
  return (
    <FooterBlock>
      <Wrapper>
        <ul className="menu">
          <li>
            <a href="javascript:void(0)">소개</a>
          </li>
          <li>
            <a href="javascript:void(0)">블로그</a>
          </li>
          <li>
            <a href="javascript:void(0)">채용 정보</a>
          </li>
          <li>
            <a href="javascript:void(0)">도움말</a>
          </li>
          <li>
            <a href="javascript:void(0)">API</a>
          </li>
          <li>
            <a href="javascript:void(0)">개인정보처리방침</a>
          </li>
          <li>
            <a href="javascript:void(0)">약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">인기 계정</a>
          </li>
          <li>
            <a href="javascript:void(0)">해시태그</a>
          </li>
          <li>
            <a href="javascript:void(0)">위치</a>
          </li>
          <li>
            <a href="javascript:void(0)">Instagram Lite</a>
          </li>
        </ul>
      </Wrapper>
    </FooterBlock>
  );
};

export default footer;
