import React from 'react';
import { StyledBalance, StyledTitle, StyledAmount } from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectBalance } from 'store/Auth/selectors';

export const Balance = () => {
  const balance = useSelector(selectBalance);
  return (
    <StyledBalance>
      <StyledTitle>Your balance</StyledTitle>
      <StyledAmount>₴ {balance && balance}</StyledAmount>
    </StyledBalance>
  );
};
