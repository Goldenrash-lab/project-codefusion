import React from 'react';
import {
  HeaderButtonExit,
  HeaderDivContainer,
  HeaderDivExit,
  HeaderDivLogo,
  HeaderImgLogo,
  HeaderSection,
  HeaderSpanExit,
  HeaderSpanName,
} from './HeaderStyled';
import HeaderExitIcon from '../../images/Header/HeaderExitIcon';
import HeaderIconI from '../../images/Header/HeaderIconI';
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
          <HeaderSpanName>Name</HeaderSpanName>
          <HeaderIconI />
          <HeaderButtonExit>
            <HeaderExitIcon />
            <HeaderSpanExit>Exit</HeaderSpanExit>
          </HeaderButtonExit>
        </HeaderDivExit>
      </HeaderDivContainer>
    </HeaderSection>
  );
};

export default Header;
