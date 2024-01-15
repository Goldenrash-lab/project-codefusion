import React, { useEffect, useRef, useCallback } from 'react';
import {
  ExitBTNCancel,
  ExitBTNLogout,
  ExitContainer,
  ExitContainerBTN,
  ExitContainerBTNText,
  ExitContainerGradient,
  ExitContainerLogo,
  ExitSpanMoneyGuard,
  ExitSpanText,
} from './ModalExitBtnStyled';
import ExitLogo from '../../images/Login/LoginLogo';
import { Backdrop } from 'components/ModalAddTransactions/ModalAddTransaction.styled';

const ModalExitBtn = ({ buttonExitClick, handleLogout }) => {
  const modalRef = useRef();

  const handleClose = useCallback(() => {
    buttonExitClick();
  }, [buttonExitClick]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleClose]);

  return (
    <>
      <Backdrop />

      <ExitContainer>
        <ExitContainerBTNText ref={modalRef}>
          <ExitContainerGradient></ExitContainerGradient>

          <ExitContainerLogo>
            <ExitLogo />
            <ExitSpanMoneyGuard>Money Guard</ExitSpanMoneyGuard>
          </ExitContainerLogo>
          <ExitSpanText>Are you sure you want to log out?</ExitSpanText>
          <ExitContainerBTN>
            <ExitBTNLogout onClick={handleLogout}>Logout</ExitBTNLogout>
            <ExitBTNCancel onClick={handleClose}>Cancel</ExitBTNCancel>
          </ExitContainerBTN>
        </ExitContainerBTNText>
      </ExitContainer>
    </>
  );
};

export default ModalExitBtn;
