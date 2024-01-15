import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Container, WrapperLeft, WrapperLeftAndRight } from './Layout.styled';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { NavigBalanceContainerDiv } from 'components/Balance/Balance.styled';
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
  const location = useLocation();

  const showStatOnDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const showOnLocation = location?.pathname === '/';

  return (
    <>
      <Header />
      <Container>
        <WrapperLeftAndRight>
          <WrapperLeft>
            <NavigBalanceContainerDiv>
              <Navigation />
              {!showStatOnDesktop && showOnLocation && <Balance />}
              {showStatOnDesktop && <Balance />}
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
