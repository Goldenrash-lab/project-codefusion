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

export const Balance = () => {
  const balance = useSelector(selectBalance);
  return (
    <StyledBalanceDiv>
      <StyledBalance>
        <StyledBalanceDivText>
          <StyledTitle>Your balance</StyledTitle>
          <StyledAmount>₴ {balance && balance}</StyledAmount>
        </StyledBalanceDivText>
      </StyledBalance>
    </StyledBalanceDiv>
  );
};
