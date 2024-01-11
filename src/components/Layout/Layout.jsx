import React from 'react';
import { Outlet } from 'react-router';
import { Container, WrapperLeft, WrapperLeftAndRight } from './Layout.styled';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <WrapperLeftAndRight>
          <WrapperLeft>
            <Navigation />
            <Balance />
            <Currency />
          </WrapperLeft>
          <Outlet />
        </WrapperLeftAndRight>
      </Container>
    </>
  );
};

export default Layout;
