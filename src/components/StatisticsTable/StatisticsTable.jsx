import { formatCurrency } from 'pages/StatisticsTab';
import React from 'react';
import {
  ColorIndicator,
  StyledCategory,
  StyledColorItem,
  StyledList,
  StyledListItem,
  StyledSpanExpenses,
  StyledSpanIncome,
  StyledSum,
  StyledTable,
  StyledText,
  StyledTitleContainer,
} from './StatisticsTable.styled';

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
      </StyledList>
      <StyledText>
        <p>Expenses:</p>{' '}
        <StyledSpanExpenses>{formatCurrency(totalExpenses)}</StyledSpanExpenses>
      </StyledText>
      <StyledText>
        <p>Income:</p>{' '}
        <StyledSpanIncome>{formatCurrency(27350)}</StyledSpanIncome>{' '}
      </StyledText>
    </StyledTable>
  );
};
