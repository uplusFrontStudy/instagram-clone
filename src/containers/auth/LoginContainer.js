import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import * as ROUTES from '../../constants/routes';
import { useHistory, useLocation } from 'react-router';

const LoginContainer = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: ROUTES.DASHBOARD } };

  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ form, auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { emailAddress, password } = form;

    try {
      dispatch(login({ emailAddress, password }));
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (authError) {
      console.log('로그인 오류발생');
      setError(authError);
      return;
    }
    //로그인 성공
    if (auth) {
      console.log('로그인 성공');
      history.replace(from);
    }
  }, [auth, authError, history, from]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginContainer;
