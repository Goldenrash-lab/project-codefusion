import React from 'react';
import Select, { components } from 'react-select';

import { StyledContainer } from './StatisticsDashboard.styled';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

export const StatisticsDashboard = ({
  selectedMonth,
  selectedYear,
  handleMonthChange,
  handleYearChange,
}) => {
  const monthOptions = Array.from(monthNumberMap.keys()).map(month => ({
    value: monthNumberMap.get(month),
    label: month,
  }));

  const yearOptions = years.map(year => ({ value: year, label: year }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      border: `1px solid (--white-60, rgba(255, 255, 255, 0.60))`,
      background: 'rgba(74, 86, 226, 0.10)',
      fontFamily: 'Poppins-Regular',
      fontSize: '16px',
      width: '182px',
      height: '50px',
      paddingLeft: '10px',
      '@media only screen and (min-width: 768px)': {
        width: '160px',
      },
      '@media only screen and (max-width: 767px)': {
        width: '280px',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      background:
        'var(--Small-Form-color, linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%))',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      background: state.isSelected
        ? 'rgba(255, 255, 255, 0.10)'
        : 'transparent',
      color: state.isSelected ? '#FF868D' : provided.color,
      ':hover': {
        background: 'rgba(255, 255, 255, 0.10)',
        color: '#FF868D',
      },
    }),
    menuList: base => ({
      ...base,
      height: '100%',

      '::-webkit-scrollbar': {
        width: '2px',
      },
      '::-webkit-scrollbar-track': {
        background: 'inset 0 0 2px rgba(0, 0, 0, 0.2)',
      },
      '::-webkit-scrollbar-thumb': {
        background: ' var(--transparency-20)',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: ' var(--transparency-20)',
      },
    }),
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <SlArrowUp size={18} label="Arrow up" color={'#FBFBFB'} />
        ) : (
          <SlArrowDown size={18} label="Arrow down" color={'#FBFBFB'} />
        )}
      </components.DropdownIndicator>
    );
  };

  return (
    <StyledContainer>
      <Select
        name="month"
        id="month"
        value={monthOptions.find(option => option.value === selectedMonth)}
        onChange={handleMonthChange}
        options={monthOptions}
        styles={customStyles}
        isSearchable={false}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      ></Select>
      <Select
        name="year"
        id="year"
        value={yearOptions.find(option => option.value === selectedYear)}
        onChange={handleYearChange}
        options={yearOptions}
        styles={customStyles}
        isSearchable={false}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      ></Select>
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
