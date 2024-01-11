import React from 'react';
import { StyledContainer, StyledSelect } from './StatisticsDashboard.styled';

export const StatisticsDashboard = () => {
  return (
    <StyledContainer>
      <StyledSelect name="month" id="month" defaultValue="March">
        <option value="March" disabled>
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
