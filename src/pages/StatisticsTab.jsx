import { Chart } from 'components/Chart/Chart';
import { StatisticsDashboard } from 'components/StatisticsDashboard/StatisticsDashboard';
import { StatisticsTable } from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
import styled from 'styled-components';

const StatisticsTab = () => {
  const expensesData = [
    { category: 'Main expenses', sum: 9700.0, color: 'rgba(255, 215, 0, 1)' },
    { category: 'Products', sum: 3800.74, color: 'rgba(255, 192, 203, 1)' },
    { category: 'Car', sum: 1500.0, color: 'rgba(231, 84, 128, 1)' },
    { category: 'Self care', sum: 800.0, color: 'rgba(153, 153, 255, 1)' },
    { category: 'Child care', sum: 2208.5, color: 'rgba(106, 90, 205, 1)' },
    {
      category: 'Household products',
      sum: 300.0,
      color: 'rgba(100, 149, 237, 1)',
    },
    { category: 'Education', sum: 3400.0, color: 'rgba(173, 216, 230, 1)' },
    { category: 'Leisure', sum: 1230.0, color: 'rgba(144, 238, 144, 1)' },
    {
      category: 'Other expenses',
      sum: 610.0,
      color: 'rgba(152, 251, 152, 1)',
    },
  ];

  const totalExpenses = expensesData.reduce(
    (total, item) => total + parseFloat(item.sum),
    0
  );

  return (
    <div>
      <StyledTitle>Statistics</StyledTitle>
      <StyledContainer>
        <Chart expensesData={expensesData} totalExpenses={totalExpenses} />
        <StyledStatsInfo>
          <StatisticsDashboard />
          <StatisticsTable
            expensesData={expensesData}
            totalExpenses={totalExpenses}
          />
        </StyledStatsInfo>
      </StyledContainer>
    </div>
  );
};

const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  padding-left: 60px;
  font-size: 34px;
  margin-bottom: 20px;
  margin-top: 32px;
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledContainer = styled.div`
  display: flex;
  width: 715px;
  height: 677px;
`;

const StyledStatsInfo = styled.div`
  flex-direction: column;
`;

export const formatCurrency = number => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

export default StatisticsTab;
