import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import LogoImage from '../../../src/images/instagram_logo.png';
import facebookIcon from '../../../src/images/icons.png';

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 0 40px 6px;
  border-radius: 0.2rem;
  font-size: 12px;
  background: #fafafa;
  border: 0.1rem solid rgba(112, 112, 112, 0.5);
  outline: none;

  &:focus {
    border-color: rgba(112, 112, 112, 0.8);
  }
`;

const ButtonWithMarginTop = styled(Button)`
  height: 30px;
  margin: 8px 40px;
  width: auto;
  font-size: 14px;
  padding: 5px 9px;
`;

const Divider = styled.span`
  color: #8e8e8e;
  font-weight: 700;
  position: relative;
  font-size: 1.2rem;
  margin: 10px 40px 18px;
`;

const FacebookLogin = styled.div`
  margin: 8px 40px;

  button {
    border: 0;
    color: #385185;
    cursor: pointer;
    background: 0 0;
    font-weight: 700;

    .facebookIcon {
      display: inline-block;
      margin-right: 8px;
      position: relative;
      top: 3px;
      background-repeat: no-repeat;
      background-position: -414px -259px;
      height: 16px;
      width: 16px;
      background-image: url(${facebookIcon});
    }
  }
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
  font-size: 3px;
  margin-top: 10px;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <Logo src={LogoImage} />
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
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </Form>
      {/* 
      <div>
        <div />
        <div>또는</div>
        <div />
        <div>페이스북 로그인</div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            {type === 'login' ? '계정이 없으신가요?' : '계정이 있으신가요? '}
            <Link
              to={type === 'login' ? ROUTES.SIGN_UP : ROUTES.LOGIN}
              className="font-bold text-blue-medium"
            >
              {type === 'login' ? '회원가입' : '로그인'}
            </Link>
          </p>
        </div>
      </div> */}
      <Divider>OR</Divider>
      <FacebookLogin>
        <button>
          <span className="facebookIcon" />
          <span>Facebook으로 로그인</span>
        </button>
      </FacebookLogin>
      <FindPassWord>비밀번호를 잊으셨나요?</FindPassWord>
    </AuthFormBlock>
  );
};

export default AuthForm;
