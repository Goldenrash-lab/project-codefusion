import React from 'react';
import styled from 'styled-components';

export const StatisticsTable = () => {
  const expensesData = [
    { category: 'Main expenses', sum: 9700.0, color: '#FFD700' },
    { category: 'Products', sum: 3800.74, color: '#FFC0CB' },
    { category: 'Car', sum: 1500.0, color: '#E75480' },
    { category: 'Self care', sum: 800.0, color: '#9999FF' },
    { category: 'Child care', sum: 2208.5, color: '#6A5ACD' },
    { category: 'Household products', sum: 300.0, color: '#6495ED' },
    { category: 'Education', sum: 3400.0, color: '#ADD8E6' },
    { category: 'Leisure', sum: 1230.0, color: '#90EE90' },
    { category: 'Other expenses', sum: 610.0, color: '#98FB98' },
  ];

  const totalExpenses = expensesData.reduce(
    (total, item) => total + parseFloat(item.sum),
    0
  );

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
            <StyledSum>
              {expense.sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')}
            </StyledSum>
          </StyledListItem>
        ))}
        <StyledText>
          <p>Expenses:</p>{' '}
          <StyledSpanExpenses>
            {totalExpenses.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')}
          </StyledSpanExpenses>
        </StyledText>
        <StyledText>
          <p>Income:</p> <StyledSpanIncome>27 350.00</StyledSpanIncome>{' '}
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
