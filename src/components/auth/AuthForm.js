import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palettes';
import Button from '../common/Button';
import * as ROUTES from '../../constants/routes';
import LogoImage from '../../../src/images/32f0a4f27407.png';
import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div`
	h3{
		margin: 0;
		color: ${palette.gray[8]},
		margin-bottom: 1rem;
	}
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Logo = styled.div`
  margin: 22px auto 12px;
  background-repeat: no-repeat;
  background-position: 0 -130px;
  height: 51px;
  width: 175px;
  background-image: url(${LogoImage});
  display: block;
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
`;

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <Logo />
      <form onSubmit={onSubmit}>
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
            name="fullName"
            type="text"
            onChange={onChange}
            value={form.fullName}
          />
        )}

        {type === 'register' && (
          <StyledInput
            aria-label="사용자 이름"
            aria-required="true"
            placeholder="사용자 이름"
            name="username"
            type="text"
            onChange={onChange}
            value={form.username}
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

        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>

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
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;
