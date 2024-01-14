import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
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
import { Backdrop } from 'components/ModalAddTransactions/ModalAddTransaction.styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'store/Categories/categoriesSelectors';
import { getFormattedDate } from 'components/ModalAddTransactions/helpers';
import { updateTransactionThunk } from 'store/Transactions/transactionsThunk';
import { toast } from 'react-toastify';
import { changeBalance } from 'store/Auth/slice';

export const ModalEditTransactions = ({ close, transaction }) => {
  const { handleSubmit, register } = useForm();
  const [startDate, setStartDate] = useState(
    new Date(transaction.transactionDate)
  );
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  function submit({ amount, comment }) {
    const updatedTransaction = {
      amount: +amount,
      comment,
      categoryId: transaction.categoryId,
      type: transaction.type,
      transactionDate: getFormattedDate(startDate),
    };
    const patchBody = {
      id: transaction.id,
      updatedTransaction,
    };

    dispatch(updateTransactionThunk(patchBody))
      .unwrap()
      .then(() => {
        dispatch(changeBalance(transaction.amount - updatedTransaction.amount));
        toast.success('Transaction updated!');
      })
      .catch(err => toast.error(err));
  }
  function getNameCat(idCat) {
    const catName = categories.find(cat => cat.id === idCat);
    return catName.name;
  }

  return (
    <Backdrop>
      <EditContainer>
        <FormContainer>
          <CloseBtn onClick={() => close(false)}>
            <img alt="close" src={closeImg}></img>
          </CloseBtn>
          <Title>Edit Transaction</Title>
          <form onSubmit={handleSubmit(submit)}>
            <FormGroupType>
              <Label htmlFor="transaction-type">
                <ToggleButtonGroup>
                  <ToggleButton>Income</ToggleButton>
                  <SpanButton>
                    <img alt="" src={slash}></img>
                  </SpanButton>
                  <ToggleButton>Expense</ToggleButton>
                </ToggleButtonGroup>
              </Label>
            </FormGroupType>
            <ContainerCategory>
              <Category placeholder="Category" id="category" required>
                {getNameCat(transaction.categoryId)}
              </Category>
            </ContainerCategory>

            <FormGroup>
              <Label htmlFor="amount">
                <Input
                  {...register('amount')}
                  type="number"
                  id="amount"
                  defaultValue={transaction.amount}
                  placeholder="Amount"
                  name="amount"
                />
              </Label>
              <DatePickerWrapper>
                <CalendarImg alt="" src={calendar}></CalendarImg>
                <ReactDatePicker
                  {...register('date')}
                  // value={transaction.transactionDate}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat="dd.MM.yyyy"
                  name="date"
                />
              </DatePickerWrapper>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="comment">
                <TextArea
                  {...register('comment')}
                  id="comment"
                  rows="1"
                  defaultValue={transaction.comment}
                  placeholder="Сomment"
                  name="comment"
                ></TextArea>
              </Label>
            </FormGroup>

            <ButtonsContainer>
              <SaveButton type="submit">Save</SaveButton>
              <CancelButton>Cancel</CancelButton>
            </ButtonsContainer>
          </form>
        </FormContainer>
      </EditContainer>
    </Backdrop>
  );
};

export default ModalEditTransactions;
