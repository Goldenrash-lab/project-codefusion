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

export const StatisticsTable = ({
  categoriesSummary,
  expenseSummary,
  incomeSummary,
}) => {
  return (
    <StyledTable>
      <StyledTitleContainer>
        <p>Category</p>
        <p>Sum</p>
      </StyledTitleContainer>
      <StyledList>
        {categoriesSummary.map((category, index) => (
          <StyledListItem key={index}>
            <StyledColorItem>
              <ColorIndicator color={category.color} />
              <StyledCategory>{category.name}</StyledCategory>
            </StyledColorItem>
            <StyledSum>{formatCurrency(category.total)}</StyledSum>
          </StyledListItem>
        ))}
      </StyledList>
      <StyledText>
        <p>Expenses:</p>{' '}
        <StyledSpanExpenses>
          {formatCurrency(expenseSummary)}
        </StyledSpanExpenses>
      </StyledText>
      <StyledText>
        <p>Income:</p>{' '}
        <StyledSpanIncome>{formatCurrency(incomeSummary)}</StyledSpanIncome>{' '}
      </StyledText>
    </StyledTable>
  );
};
