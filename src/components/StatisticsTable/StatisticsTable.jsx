import { formatCurrency } from 'pages/StatisticsTab';
import React from 'react';
import styled from 'styled-components';

export const StatisticsTable = ({ expensesData, totalExpenses }) => {
  return (
    <StyledTable>
      <StyledTitleContainer>
        <p>Category</p>
        <p>Sum</p>
      </StyledTitleContainer>
      <StyledList>
        {expensesData.map((expense, index) => (
          <StyledListItem key={index}>
            <StyledColorItem>
              <ColorIndicator color={expense.color} />
              <StyledCategory>{expense.category}</StyledCategory>
            </StyledColorItem>
            <StyledSum>{formatCurrency(expense.sum)}</StyledSum>
          </StyledListItem>
        ))}
        <StyledText>
          <p>Expenses:</p>{' '}
          <StyledSpanExpenses>
            {formatCurrency(totalExpenses)}
          </StyledSpanExpenses>
        </StyledText>
        <StyledText>
          <p>Income:</p>{' '}
          <StyledSpanIncome>{formatCurrency(27350)}</StyledSpanIncome>{' '}
        </StyledText>
      </StyledList>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  width: 395px;
  height: 607px;
`;

const StyledTitleContainer = styled.h3`
  display: flex;
  justify-content: space-between;
  padding: 16px 28px;
  margin-right: 12px;
  width: 395px;
  height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 29px 16px 28px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  gap: 19px;
`;

const StyledSpanExpenses = styled.span`
  color: var(--dashboard-text, #ff868d);
`;

const StyledSpanIncome = styled.span`
  color: var(--yellow, #ffb627);
`;

const StyledList = styled.ul`
  padding-left: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px 29px 16px 16px;
`;

const StyledColorItem = styled.div`
  display: flex;
  gap: 16px;
`;

const ColorIndicator = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10%;
  background-color: ${props => props.color || '#FFFFFF'};
`;

const StyledCategory = styled.p`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledSum = styled.p`
  color: var(--white, #fbfbfb);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
