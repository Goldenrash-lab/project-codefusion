import React, { useState } from 'react';
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

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const buttonExitClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const isAuthenticated = useSelector(state => !!state.auth.user);

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
          <HeaderDivLogo>
            <HeaderLogo />
            <span>Money Guard</span>
          </HeaderDivLogo>

          <HeaderDivExit>
            <HeaderSpanName>Hello {user.username}</HeaderSpanName>
            <HeaderIconI />
            <HeaderButtonExit onClick={buttonExitClick}>
              <HeaderExitDivIcon>
                <HeaderExitIcon />
              </HeaderExitDivIcon>
              <HeaderSpanExit>Exit</HeaderSpanExit>
            </HeaderButtonExit>
          </HeaderDivExit>
        </HeaderDivContainer>
      </HeaderSection>
    </>
  );
};

export default Header;
