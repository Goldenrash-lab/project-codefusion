import React from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
