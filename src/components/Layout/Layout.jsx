import React from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <>
          <Navigation />
        </>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
