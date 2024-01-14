import React from 'react';
import {
  StyledBalance,
  StyledTitle,
  StyledAmount,
  StyledBalanceDivText,
  StyledBalanceDiv,
} from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectBalance } from 'store/Auth/selectors';
import Babki from 'images/Babki';

export const Balance = () => {
  const balance = useSelector(selectBalance);
  return (
    <StyledBalanceDiv>
      <StyledBalance>
        <StyledBalanceDivText>
          <StyledTitle>Your balance</StyledTitle>
          <StyledAmount>
            <Babki fill="white" width="26" height="26" />{' '}
            {balance && balance.toFixed(0)}
          </StyledAmount>
        </StyledBalanceDivText>
      </StyledBalance>
    </StyledBalanceDiv>
  );
};
