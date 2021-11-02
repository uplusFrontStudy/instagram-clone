import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterContainer from '../containers/auth/RegisterContainer';

const RegisterPage = () => {
  return (
    <AuthTemplate type="register">
      <RegisterContainer />
    </AuthTemplate>
  );
};

export default RegisterPage;
