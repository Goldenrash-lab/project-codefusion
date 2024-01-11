import React, { useState } from 'react';
import {
  EditContainer,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Select,
  Input,
  TextArea,
  ButtonsContainer,
  SaveButton,
  CancelButton,
  ToggleButtonGroup,
  ToggleButton,
  SpanButton,
  FormGroupType,
} from './EditTransactionForm.styled';

const EditTransaction = () => {
  const [transactionType, setTransactionType] = useState('income');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
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
              <SpanButton>/</SpanButton>
              <ToggleButton
                isActive={transactionType === 'expense'}
                onClick={() => setTransactionType('expense')}
              >
                Expense
              </ToggleButton>
            </ToggleButtonGroup>
          </Label>
        </FormGroupType>

        <FormGroup>
          <Label htmlFor="expense-category"></Label>
          <Select
            id="expense-category"
            value={expenseCategory}
            onChange={e => setExpenseCategory(e.target.value)}
          >
            {/* Add your expense categories as options */}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="amount"></Label>
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <Label htmlFor="transaction-date"></Label>
          <Input
            type="date"
            id="transaction-date"
            value={transactionDate}
            onChange={e => setTransactionDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="comment"></Label>
          <TextArea
            id="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows="1"
            placeholder="Сomment"
          ></TextArea>
        </FormGroup>

        <ButtonsContainer>
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </ButtonsContainer>
      </FormContainer>
    </EditContainer>
  );
};

export default EditTransaction;
