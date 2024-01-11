import React from 'react';
import { StyledBalance, StyledTitle, StyledAmount } from './Balance.styled';

export const Balance = () => {
  return (
    <StyledBalance>
      <StyledTitle>Your balance</StyledTitle>
      <StyledAmount>₴ 24 000.00</StyledAmount>
    </StyledBalance>
  );
};
