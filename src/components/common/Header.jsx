import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import logo from '../../images/instagram_logo.png';
import Button from '../common/Button';
import defaultImg from '../../images/profile_default_image.png';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #dbdbdb; ;
`;

const Wrapper = styled(Responsive)`
  height: 54px;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 29px;
`;

const MainMenu = styled.div`
  right: 0;
  ul.menu {
    font-family: Arial, sans-serif;
    display: flex;
    list-style: none;
    li {
      position: relative;
      padding-left: 24px;
    }
  }
`;

const Spacer = styled.div`
  margin-top: 54px;
`;

const ProfileImg = styled.img`
  height: 22px;
  width: 22pz;
`;

const StyledButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Logo>
            <a href="/">
              <img src={logo} alt="l" />
            </a>
          </Logo>

          <MainMenu>
            {user ? (
              <>
                <ul className="menu">
                  <li>
                    <a href="javacript:void(0)">
                      <svg
                        aria-label="홈"
                        className="_8-yf5"
                        color="#262626"
                        fill="#262626"
                        height="22"
                        role="img"
                        viewBox="0 0 48 48"
                        width="22"
                      >
                        <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="javacript:void(0)">
                      <svg
                        aria-label="Direct"
                        className="_8-yf5"
                        color="#262626"
                        fill="#262626"
                        height="22"
                        role="img"
                        viewBox="0 0 48 48"
                        width="22"
                      >
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="javacript:void(0)">
                      <svg
                        aria-label="사람 찾기"
                        className="_8-yf5"
                        color="#262626"
                        fill="#262626"
                        height="22"
                        role="img"
                        viewBox="0 0 48 48"
                        width="22"
                      >
                        <path
                          clipRule="evenodd"
                          d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="javacript:void(0)">
                      <svg
                        aria-label="활동 피드"
                        className="_8-yf5"
                        color="#262626"
                        fill="#262626"
                        height="22"
                        role="img"
                        viewBox="0 0 48 48"
                        width="22"
                      >
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <Link to={`profile/${user[0].userId}`}>
                      <ProfileImg
                        src={user[0].profileURL || defaultImg}
                        alt="프로필 이미지"
                      />
                    </Link>
                    <StyledButton cyan onClick={onLogout}>
                      로그아웃
                    </StyledButton>
                  </li>
                </ul>
              </>
            ) : (
              <div>
                <StyledButton cyan>로그인 </StyledButton>
                <StyledButton cyan>가입하기 </StyledButton>
              </div>
            )}
          </MainMenu>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
