import styled from 'styled-components';
import switcherExpense from '../../images/Switcher/switcherExpense.svg';
import switcherIncome from '../../images/Switcher/switcherIncome.svg';

export const Switcher = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  input[type='checkbox'] {
    display: none;
  }
  span {
    width: 80px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  span::before {
    position: absolute;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    content: url(${switcherIncome});
    top: 6px;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  input[type='checkbox']:checked + span::before {
    width: 44px;
    height: 44px;
    transform: translateX(38px);
    content: url(${switcherExpense});
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input[type='checkbox']:checked + span {
    background-color: #ffffff;
  }
`;

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 42px;
`;
