import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

import calendar from '../../images/ModalAddTransaction/calendar.svg';
import slash from '../../images/EditTransaction/slash.svg';
import closeImg from '../../images/ModalAddTransaction/close.svg';
import {
  EditContainer,
  FormContainer,
  Title,
  FormGroup,
  Label,
  ContainerCategory,
  Category,
  Input,
  TextArea,
  ButtonsContainer,
  SaveButton,
  CancelButton,
  ToggleButtonGroup,
  ToggleButton,
  SpanButton,
  FormGroupType,
  CloseBtn,
  DatePickerWrapper,
  CalendarImg,
} from './ModalEditTransaction.styled';

const ModalEditTransactions = () => {
  const [transactionType, setTransactionType] = useState('income');
  const [expenseCategory, setExpenseCategory] = useState('true');
  const [amount, setAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [comment, setComment] = useState('');

  const handleSave = () => {
    console.log('Saved:', {
      transactionType,
      expenseCategory,
      amount,
      transactionDate,
      comment,
    });
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <EditContainer>
      <FormContainer>
        <CloseBtn>
          <img alt="close" src={closeImg}></img>
        </CloseBtn>
        <Title>Edit Transaction</Title>

        <FormGroupType>
          <Label htmlFor="transaction-type">
            <ToggleButtonGroup>
              <ToggleButton
                isActive={transactionType === 'income'}
                onClick={() => setTransactionType('income')}
              >
                Income
              </ToggleButton>
              <SpanButton>
                <img alt="" src={slash}></img>
              </SpanButton>
              <ToggleButton
                isActive={transactionType === 'expense'}
                onClick={() => setTransactionType('expense')}
              >
                Expense
              </ToggleButton>
            </ToggleButtonGroup>
          </Label>
        </FormGroupType>
        <ContainerCategory>
          <Category
            placeholder="Category"
            id="category"
            required
            onChange={e => setExpenseCategory(e.target.value)}
          >
            Car
          </Category>
        </ContainerCategory>

        <FormGroup>
          <Label htmlFor="amount">
            <Input
              type="number"
              id="amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="Amount"
            />
          </Label>
          <DatePickerWrapper>
            <CalendarImg alt="" src={calendar}></CalendarImg>
            <ReactDatePicker
              selected={transactionDate}
              onChange={date => setTransactionDate(date)}
              dateFormat="dd.MM.yyyy"
            />
          </DatePickerWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="comment">
            <TextArea
              id="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
              rows="1"
              placeholder="Сomment"
            ></TextArea>
          </Label>
        </FormGroup>

        <ButtonsContainer>
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </ButtonsContainer>
      </FormContainer>
    </EditContainer>
  );
};

export default ModalEditTransactions;
