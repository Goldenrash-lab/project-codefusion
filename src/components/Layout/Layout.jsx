import React from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <div style={{ display: 'flex' }}>
          <div>
            <Navigation />
            <Balance />
            <Currency />
          </div>
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default Layout;
