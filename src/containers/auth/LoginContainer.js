import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
// import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ form, auth }) => ({
    form: auth.login,
    auth,
    authError: auth.authError,
  }));

  /*   createUserWithEmailAndPassword(authTest, 'test@test.com', 'qwer1234!@')
    .then((u) => {
      console.log(u);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }); */

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
    const { email, password } = form;

    // 유효성검사 추후 분리
    if (!email || !password) {
      alert('이메일주소와 비밀번호를 입력해주세요.');
      return false;
    }

    login(
      email,
      password,
    )(dispatch)
      .then(() => {
        alert('Login successful');
        history.push('/');
      })
      .catch((error) => {
        alert('Login failed');
        // console.error(error);
      });
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, []);

  useEffect(() => {
    // if (authError) {
    //   console.log('오류 발생');
    //   console.log(authError);
    //   setError('로그인 실패');
    //   return;
    // }
    // if (auth) {
    //   console.log('로그인 성공');
    //   dispatch(check());
    // }
    // myFirebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user);
    //   });
  }, []);

  useEffect(() => {
    // if (user) {
    //   history.push('/');
    // }
  }, [history]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(LoginForm);
