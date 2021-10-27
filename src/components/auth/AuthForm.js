import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import LogoImage from '../../../src/images/instagram_logo.png';
import facebookIcon from '../../../src/images/icons.png';

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;

  h2 {
    color: #8e8e8e;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 11rem;
  margin: 22px auto 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const StyledInput = styled.input`
  height: 36px;
  padding-left: 8px;
  margin-bottom: 6px;
  border-radius: 0.2rem;
  font-size: 12px;
  background: #fafafa;
  border: 0.1rem solid rgba(112, 112, 112, 0.5);
  outline: none;

  &:focus {
    border-color: rgba(112, 112, 112, 0.8);
  }
`;

const ButtonWithMargin = styled(Button)`
  margin: 8px 0px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  color: #8e8e8e;
  font-size: 14px;
  padding-top: 10px;
  width: 100%;
  box-sizing: border-box;

  ::before {
    content: '';
    flex-grow: 1;
    margin-right: 16px;
    background: #8e8e8e;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  ::after {
    content: '';
    flex-grow: 1;
    margin-left: 16px;
    background: #8e8e8e;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

const FacebookLogin = styled.div`
  margin: 16px 40px 8px;

  button {
    border: 0;
    color: #385185;
    cursor: pointer;
    background: 0 0;
    font-weight: 700;
  }
`;

const FacebookIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
  position: relative;
  top: 3px;
  background-repeat: no-repeat;

  ${(props) =>
    props.blue &&
    css`
      background-position: -414px -259px;
    `}

  ${(props) =>
    props.white &&
    css`
      background-position: -414px -300px;
    `}

  height: 16px;
  width: 16px;
  background-image: url(${facebookIcon});
`;

const FindPassWord = styled.a`
  color: #00376b;
  font-size: 12px;
  line-height: 16px;
  margin: 12px 0 10px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <Logo src={LogoImage} />
      {type === 'register' && (
        <>
          <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
          <ButtonWithMargin cyan fullWidth>
            <FacebookIcon white />
            Facebook으로 로그인
          </ButtonWithMargin>
          <Divider>또는</Divider>
        </>
      )}

      <Form onSubmit={onSubmit}>
        <StyledInput
          aria-label="이메일주소"
          aria-required="true"
          placeholder="이메일주소"
          maxlength="75"
          name="emailAddress"
          onChange={onChange}
          type="text"
          value={form.emailAddress}
        />
        {type === 'register' && (
          <StyledInput
            aria-label="성명"
            aria-required="true"
            placeholder="성명"
            name="userName"
            type="text"
            onChange={onChange}
            value={form.userName}
          />
        )}

        {type === 'register' && (
          <StyledInput
            aria-label="사용자 이름"
            aria-required="true"
            placeholder="사용자 이름"
            name="userId"
            type="text"
            onChange={onChange}
            value={form.userId}
          />
        )}

        <StyledInput
          aria-label="비밀번호"
          aria-required="true"
          placeholder="비밀번호"
          name="password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMargin cyan fullWidth>
          {text}
        </ButtonWithMargin>
      </Form>
      {type === 'login' && (
        <>
          <Divider>또는</Divider>
          <FacebookLogin>
            <button>
              <FacebookIcon blue />
              <span>Facebook으로 로그인</span>
            </button>
          </FacebookLogin>
          <FindPassWord>비밀번호를 잊으셨나요?</FindPassWord>
        </>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;
