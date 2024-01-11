import React from 'react';
import {
  HeaderDivContainer,
  HeaderDivExit,
  HeaderDivLogo,
  HeaderImgLogo,
  HeaderSection,
} from './HeaderStyled';
import headerLogo from '../../images/Header/logoMoneyGuard.png';
// import { useSelector } from 'react-redux';

const Header = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);

  return (
    <HeaderSection>
      <HeaderDivContainer>
        <HeaderDivLogo>
          <HeaderImgLogo src={headerLogo}></HeaderImgLogo>
          <span>Money Guard</span>
        </HeaderDivLogo>
        <HeaderDivExit>
          <span>Name</span>
          <i>|</i>
          <button>Exit</button>
        </HeaderDivExit>
      </HeaderDivContainer>
    </HeaderSection>
  );
};

export default Header;
