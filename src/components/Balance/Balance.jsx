import React from 'react';
import {
  StyledBalance,
  StyledTitle,
  StyledAmount,
  StyledBalanceDiv,
  StyledBalanceDivText,
} from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectBalance } from 'store/Auth/selectors';
import Babki from 'images/Babki';

export const Balance = () => {
  const balance = useSelector(selectBalance);
  return (
    <StyledBalance>
      <StyledTitle>Your balance</StyledTitle>
      <StyledAmount>
        <Babki fill="white" width="26" height="26" /> {balance && balance}
      </StyledAmount>
    </StyledBalance>

  );
};
