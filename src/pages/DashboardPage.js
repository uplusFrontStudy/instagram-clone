import React from 'react';
import DashboardContainer from '../containers/dashboard/DashboardContainer';
import HeaderContainer from '../containers/HeaderContainer';
import WriteModalContainer from '../containers/post/WriteModalContainer';

const DashboardPage = () => {
  return (
    <>
      <HeaderContainer />
      <WriteModalContainer />
      <DashboardContainer />
    </>
  );
};

export default DashboardPage;
