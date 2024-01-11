import React from 'react';
import styled from 'styled-components';

export const StatisticsDashboard = () => {
  return (
    <StyledContainer>
      <StyledSelect name="month" id="month" defaultValue="March">
        <option value="" disabled>
          Please select a month
        </option>
        <option value="March">March</option>
        <option value="April">April</option>
      </StyledSelect>
      <StyledSelect name="year" id="year" defaultValue="2023">
        <option value="" disabled>
          Please select a year
        </option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </StyledSelect>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  width: 395px;
  height: 50px;
  gap: 32px;
  margin-bottom: 20px;
  margin-right: 12px;
`;

const StyledSelect = styled.select`
  width: 182px;
  height: 50px;
  border-radius: 8px;
`;
