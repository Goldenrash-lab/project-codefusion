import React, { useEffect, useState } from 'react';
import {
  HeaderButtonExit,
  HeaderDivContainer,
  HeaderDivExit,
  HeaderDivLogo,
  HeaderDivLogoContainerSvg,
  HeaderExitDivIcon,
  HeaderSection,
  HeaderSpanExit,
  HeaderSpanLogoText,
  HeaderSpanName,
} from './HeaderStyled';
import HeaderExitIcon from '../../images/Header/HeaderExitIcon';
import HeaderIconI from '../../images/Header/HeaderIconI';

import HeaderLogo from '../../images/Header/HeaderLogo';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/Auth/thunk';
import { selectUser } from 'store/Auth/selectors';
import { Navigate } from 'react-router';
import ModalExitBtn from '../ModalExitBtn/ModalExitBtn';
// import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const buttonExitClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const isAuthenticated = useSelector(state => !!state.auth.user);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={Location.state?.from || '/login'} />;
  }

  return (
    <>
      {isModalOpen && (
        <ModalExitBtn
          buttonExitClick={buttonExitClick}
          handleLogout={handleLogout}
        />
      )}
      <HeaderSection>
        <HeaderDivContainer>
          <HeaderDivLogo to="/">
            <HeaderDivLogoContainerSvg>
              <HeaderLogo />
            </HeaderDivLogoContainerSvg>

            <HeaderSpanLogoText>Money Guard</HeaderSpanLogoText>
          </HeaderDivLogo>

          <HeaderDivExit>
            <HeaderSpanName>{user.username}</HeaderSpanName>
            {isMobile ? '' : <HeaderIconI />}

            <HeaderButtonExit onClick={buttonExitClick}>
              <HeaderExitDivIcon>
                <HeaderExitIcon />
              </HeaderExitDivIcon>
              {isMobile ? '' : <HeaderSpanExit>Exit</HeaderSpanExit>}
            </HeaderButtonExit>
          </HeaderDivExit>
        </HeaderDivContainer>
      </HeaderSection>
    </>
  );
};

export default Header;
