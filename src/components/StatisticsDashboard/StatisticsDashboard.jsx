import React from 'react';
import { StyledContainer, StyledSelect } from './StatisticsDashboard.styled';

export const StatisticsDashboard = ({
  selectedMonth,
  selectedYear,
  handleMonthChange,
  handleYearChange,
}) => {
  return (
    <StyledContainer>
      <StyledSelect
        name="month"
        id="month"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        <option value="" disabled>
          Please select a month
        </option>
        {Array.from(monthNumberMap.keys()).map(month => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect
        name="year"
        id="year"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="" disabled>
          Please select a year
        </option>
        {years.map(year => (
          <option key={year} value={year.toString()}>
            {year}
          </option>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
};

const startYear = 2020;
const endYear = new Date().getFullYear();
const years = Array.from(
  { length: endYear - startYear + 1 },
  (_, index) => startYear + index
);

export const monthNumberMap = new Map([
  ['January', 1],
  ['February', 2],
  ['March', 3],
  ['April', 4],
  ['May', 5],
  ['June', 6],
  ['July', 7],
  ['August', 8],
  ['September', 9],
  ['October', 10],
  ['November', 11],
  ['December', 12],
]);
