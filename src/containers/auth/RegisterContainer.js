import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { doesUsernameExist } from '../../api/auth';
import * as ROUTES from '../../constants/routes';
import * as authAPI from '../../api/auth';

const RegisterContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ form, auth }) => ({
    form: auth.register,
    auth,
    authError: auth.authError,
  }));

  console.log(form);

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
  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password, emailAddress, fullName } = form;

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists) {
      try {
        const createdUserResult = await dispatch(
          register({
            username,
            password,
            emailAddress,
            fullName,
          }),
        );

        // await createdUserResult.user.displayName(username);

        const newUser = {
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: ['2'],
          followers: [],
          dateCreated: Date.now(),
        };
        authAPI.addUser(newUser);

        history.push(ROUTES.LOGIN);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    } else {
      // 유효성 처리
      alert('이미 존재하는 회원입니다.');
    }
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm({ form: 'register' }));
  }, [dispatch]);

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

export default withRouter(RegisterContainer);
