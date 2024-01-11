import { Chart } from 'components/Chart/Chart';
import { StatisticsDashboard } from 'components/StatisticsDashboard/StatisticsDashboard';
import { StatisticsTable } from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
import styled from 'styled-components';

const StatisticsTab = () => {
  return (
    <div>
      <StyledTitle>Statistics</StyledTitle>
      <StyledContainer>
        <Chart />
        <StyledStatsInfo>
          <StatisticsDashboard />
          <StatisticsTable />
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

export default StatisticsTab;
