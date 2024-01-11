import React from 'react';
import {
  HeaderButtonExit,
  HeaderDivContainer,
  HeaderDivExit,
  HeaderDivLogo,
  HeaderExitDivIcon,
  HeaderSection,
  HeaderSpanExit,
  HeaderSpanName,
} from './HeaderStyled';
import HeaderExitIcon from '../../images/Header/HeaderExitIcon';
import HeaderIconI from '../../images/Header/HeaderIconI';

import HeaderLogo from '../../images/Header/HeaderLogo';
// import { useSelector } from 'react-redux';

const Header = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);

  return (
    <HeaderSection>
      <HeaderDivContainer>
        <HeaderDivLogo>
          <HeaderLogo />
          <span>Money Guard</span>
        </HeaderDivLogo>
        <HeaderDivExit>
          <HeaderSpanName>Name</HeaderSpanName>
          <HeaderIconI />
          <HeaderButtonExit>
            <HeaderExitDivIcon>
              <HeaderExitIcon />
            </HeaderExitDivIcon>
            <HeaderSpanExit>Exit</HeaderSpanExit>
          </HeaderButtonExit>
        </HeaderDivExit>
      </HeaderDivContainer>
    </HeaderSection>
  );
};

export default Header;
