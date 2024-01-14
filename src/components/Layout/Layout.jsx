import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Container, WrapperLeft, WrapperLeftAndRight } from './Layout.styled';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { NavigBalanceContainerDiv } from 'components/Balance/Balance.styled';

const Layout = () => {
  const location = useLocation();
  function statusLocation(location) {
    if (location?.pathname === '/currency') return true;
    else return false;
  }

  return (
    <>
      <Header />
      <Container>
        <WrapperLeftAndRight>
          <WrapperLeft>
            <NavigBalanceContainerDiv>
              <Navigation />
              {!statusLocation(location) && <Balance />}
            </NavigBalanceContainerDiv>
            <Currency />
          </WrapperLeft>
          <Outlet />
        </WrapperLeftAndRight>
      </Container>
    </>
  );
};

export default Layout;
