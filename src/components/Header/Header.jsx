import React from 'react';
import {
  HeaderDivExit,
  HeaderDivLogo,
  HeaderImgLogo,
  HeaderSection,
} from './HeaderStyled';
import headerLogo from '../../images/Register/logoMoneyGuard.png';
// import { useSelector } from 'react-redux';

const Header = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);

  return (
    <HeaderSection>
      <HeaderDivLogo>
        <HeaderImgLogo src={headerLogo}></HeaderImgLogo>
        <span>Money Guard</span>
      </HeaderDivLogo>
      <HeaderDivExit>
        <span>Name</span>
        <i>|</i>
        <button>Exit</button>
      </HeaderDivExit>
    </HeaderSection>
  );
};

export default Header;
