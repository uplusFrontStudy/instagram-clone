import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { doesUserIdExist } from '../../api/auth';
import * as ROUTES from '../../constants/routes';

const RegisterContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ form, auth }) => ({
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
  const onSubmit = async (e) => {
    e.preventDefault();
    const { userId, password, emailAddress, userName } = form;

    const usernameExists = await doesUserIdExist(userId);

    if (!usernameExists) {
      try {
        dispatch(
          register({
            emailAddress,
            userId,
            userName,
            password,
          }),
        );

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

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterContainer);
