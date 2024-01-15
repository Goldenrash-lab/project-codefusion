import React, { useCallback, useEffect, useState } from 'react';
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
  SpanButton,
  FormGroupType,
  CloseBtn,
  DatePickerWrapper,
  CalendarImg,
  StyledText,
} from './ModalEditTransaction.styled';
import { Backdrop } from 'components/ModalAddTransactions/ModalAddTransaction.styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'store/Categories/categoriesSelectors';
import { getFormattedDate } from 'components/ModalAddTransactions/helpers';
import { updateTransactionThunk } from 'store/Transactions/transactionsThunk';
import { toast } from 'react-toastify';
import { changeBalance } from 'store/Auth/slice';
import { TestDiv } from 'components/RegistrationForm/RegistrationForm.styled';

export const ModalEditTransactions = ({ close, transaction }) => {
  const { handleSubmit, register } = useForm();
  const [startDate, setStartDate] = useState(
    new Date(transaction.transactionDate)
  );
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [transactionType] = useState(transaction.type);

  function submit({ amount, comment }) {
    const newAmount = transactionType === 'INCOME' ? +amount : +amount * -1;
    const amountChange = newAmount - transaction.amount;

    const updatedTransaction = {
      amount: newAmount,
      comment,
      categoryId: transaction.categoryId,
      type: transactionType,
      transactionDate: getFormattedDate(startDate),
    };

    const patchBody = {
      id: transaction.id,
      updatedTransaction,
    };

    dispatch(updateTransactionThunk(patchBody))
      .unwrap()
      .then(() => {
        dispatch(changeBalance(amountChange));
        toast.success('Transaction updated!');
        close(false);
      })
      .catch(err => toast.error(err));
  }
  function getNameCat(idCat) {
    const catName = categories.find(cat => cat.id === idCat);
    return catName.name;
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

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
      close(false);
    }
  }

  return (
    <Backdrop onKeyDown={useEscapeKey(close)}>
      <EditContainer onClick={onBackdropClick}>
        <FormContainer>
          <TestDiv />
          <CloseBtn onClick={() => close(false)}>
            <img alt="close" src={closeImg}></img>
          </CloseBtn>
          <Title>Edit Transaction</Title>
          <form onSubmit={handleSubmit(submit)}>
            <FormGroupType>
              <Label htmlFor="transaction-type">
                <ToggleButtonGroup>
                  <StyledText
                    $color={transactionType === 'INCOME' && '#ffb627'}
                  >
                    Income
                  </StyledText>
                  <SpanButton>
                    <img alt="" src={slash}></img>
                  </SpanButton>
                  <StyledText
                    $color={transactionType === 'EXPENSE' && '#ff868d'}
                  >
                    Expense
                  </StyledText>
                </ToggleButtonGroup>
              </Label>
            </FormGroupType>
            <ContainerCategory>
              <Category placeholder="Category" id="category" required>
                {getNameCat(transaction?.categoryId)}
              </Category>
            </ContainerCategory>

            <FormGroup>
              <Label htmlFor="amount">
                <Input
                  {...register('amount')}
                  type="number"
                  id="amount"
                  defaultValue={Math.abs(transaction.amount)}
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
                  maxDate={new Date()}
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
              <CancelButton type="button" onClick={() => close(false)}>
                Cancel
              </CancelButton>
            </ButtonsContainer>
          </form>
        </FormContainer>
      </EditContainer>
    </Backdrop>
  );
};

export default ModalEditTransactions;
