import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth,
    authError: auth.authError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
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

    register(
      email,
      password,
    )(dispatch)
      .then(() => {
        alert('Register successful');
        history.push('/login');
      })
      .catch((error) => {
        alert('Register failed');
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
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterForm);
