import React, { useCallback, useEffect, useRef, useState } from 'react';
import calendar from '../../images/ModalAddTransaction/calendar.svg';
import closeImg from '../../images/ModalAddTransaction/close.svg';
import {
  Backdrop,
  Calendar,
  CalendarImg,
  CheckedExpense,
  CheckedIncome,
  CloseBtn,
  CloseImg,
  DatePickerWrapper,
  Modal,
  Popper,
  Switcher,
  SwitcherContainer,
  UncheckedText,
} from './ModalAddTransaction.styled';
import { SumDateContainer } from './ModalAddTransaction.styled';
import { ButtonsContainer } from './ModalAddTransaction.styled';
import { CommentInput } from './ModalAddTransaction.styled';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ModalAddTransactions = ({ close }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isExpense, setIsExpense] = useState(true);
  const ref = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function onBackdropClick(e) {
    if (e.target === ref.current) {
      close(false);
    }
  }

  function useEscapeKey(close) {
    const handleEscKey = useCallback(
      event => {
        if (event.key === 'Escape') {
          close(false);
        }
      },
      [close]
    );

    useEffect(() => {
      document.addEventListener('keydown', handleEscKey);

      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }, [handleEscKey]);
  }
  return (
    <Backdrop
      onClick={onBackdropClick}
      ref={ref}
      onKeyDown={useEscapeKey(close)}
    >
      <Modal>
        <CloseBtn onClick={() => close(false)}>
          <img alt="" src={closeImg}></img>
        </CloseBtn>
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
