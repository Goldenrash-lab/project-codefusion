import React from 'react';
import {
  SelectedOption,
  StyledContainer,
  StyledSelect,
} from './StatisticsDashboard.styled';

export const StatisticsDashboard = () => {
  return (
    <StyledContainer>
      <StyledSelect name="month" id="month" defaultValue="March">
        <SelectedOption value="March" disabled>
          Please select a month
        </SelectedOption>
        <SelectedOption value="March">March</SelectedOption>
        <SelectedOption value="April">April</SelectedOption>
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
