import React, { useEffect, useState } from 'react';
import calendar from '../../images/ModalAddTransaction/calendar.svg';
import {
  Backdrop,
  Calendar,
  CalendarImg,
  CheckedExpense,
  CheckedIncome,
  DatePickerWrapper,
  Modal,
  Popper,
  StyledExpense,
  Switcher,
  SwitcherContainer,
  UncheckedExpense,
  UncheckedText,
} from './ModalAddTransaction.styled';
import { SumDateContainer } from './ModalAddTransaction.styled';
import { ButtonsContainer } from './ModalAddTransaction.styled';
import { CommentInput } from './ModalAddTransaction.styled';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ModalAddTransactions = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isExpense, setIsExpense] = useState(true);
  useEffect(() => {
    console.log(isExpense);
  }, [isExpense]);

  return (
    <Backdrop>
      <Modal>
        <h1>Add transaction</h1>
        <form action="">
          <SwitcherContainer>
            {isExpense ? (
              <UncheckedText>Income</UncheckedText>
            ) : (
              <CheckedIncome>Income</CheckedIncome>
            )}

            <Switcher>
              <input
                type="checkbox"
                defaultChecked
                onChange={() => setIsExpense(!isExpense)}
              />
              <span />
            </Switcher>
            {isExpense ? (
              <CheckedExpense>Expense</CheckedExpense>
            ) : (
              <UncheckedText>Expense</UncheckedText>
            )}
          </SwitcherContainer>

          {isExpense && (
            <select name="" id="" required defaultValue={1}>
              <option value={1} disabled hidden>
                Select a category
              </option>
            </select>
          )}

          <SumDateContainer>
            <input
              type="text"
              name="sum"
              placeholder="0.00"
              autoComplete="off"
            />
            <DatePickerWrapper>
              <CalendarImg alt="" src={calendar}></CalendarImg>
              <ReactDatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="dd.MM.yyyy"
              />
            </DatePickerWrapper>
          </SumDateContainer>
          <CommentInput type="text" placeholder="Comment" autoComplete="off" />
          <ButtonsContainer>
            <button type="submit">Add</button>
            <button>Cancel</button>
          </ButtonsContainer>
        </form>
      </Modal>
    </Backdrop>
  );
};

export default ModalAddTransactions;
