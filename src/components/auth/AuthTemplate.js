import React from 'react';
import styled from 'styled-components';

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fafafa;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  background: #ffffff;
  width: 350px;
  border: 0.1rem solid rgba(112, 112, 112, 0.5);
  margin: 0 0 10px;
  padding: 10px 0;
`;

const Ptag = styled.p`
  color: #262626;
  font-size: 14px;
  margin: 15px;
  text-align: center;
`;

const Atag = styled.a`
  color: #0095f6;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
      <WhiteBox>
        <Ptag>
          계정이 있으신가요? <Atag>가입하기</Atag>
        </Ptag>
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
