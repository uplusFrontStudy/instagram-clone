import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palettes';
import Button from '../common/Button';

import LogoImage from '../../../src/images/32f0a4f27407.png';

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
          aria-label="전화번호, 사용자 이름 또는 이메일"
          aria-required="true"
          maxlength="75"
          name="email"
          onChange={onChange}
          type="text"
          value={form.email}
        />
        <StyledInput
          aria-label="비밀번호"
          aria-required="true"
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
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;
