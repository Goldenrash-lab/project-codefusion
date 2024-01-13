import {
  Arrow,
  CalendarImg,
  CheckedExpense,
  CheckedIncome,
  CloseBtn,
  CommentInput,
  DatePickerWrapper,
  ErrorText,
  Modal,
  TestDiv,
  UncheckedText,
} from 'components/ModalAddTransactions/ModalAddTransaction.styled';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import closeImg from '../../images/ModalAddTransaction/close.svg';
import arrow from '../../images/ModalAddTransaction/arrow.svg';
import calendar from '../../images/ModalAddTransaction/calendar.svg';
import {
  Switcher,
  SwitcherContainer,
} from 'components/ModalAddTransactions/Switcher.styled';
import {
  ButtonsContainer,
  ErrorInputContainer,
  SumDateContainer,
} from 'components/ModalAddTransactions/Containers.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'store/Categories/categoriesSelectors';
import { useForm } from 'react-hook-form';
import {
  checkTransactionType,
  getFormattedDate,
  negOrPosNumber,
} from 'components/ModalAddTransactions/helpers';
import { addTransactionThunk } from 'store/Transactions/transactionsThunk';
import { changeBalance } from 'store/Auth/slice';
import { toast } from 'react-toastify';
import ReactDatePicker from 'react-datepicker';

const schema = yup
  .object({
    sum: yup
      .number()
      .typeError('Please enter the sum')
      .min(1, 'Number must be at least 1 character')
      .required('Sum is required'),
    comment: yup
      .string()
      .min(5, 'Comment must be at least 5 characters')
      .max(25)
      .required('Comment is required'),
  })
  .required();

const AddTransactionForm = ({ close }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isExpense, setIsExpense] = useState(true);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  function submit(e) {
    console.log(startDate);
    const newTransaction = {
      transactionDate: getFormattedDate(startDate),
      type: checkTransactionType(isExpense),
      ...(isExpense
        ? { categoryId: e.category }
        : { categoryId: '063f1132-ba5d-42b4-951d-44011ca46262' }),
      comment: e.comment,
      amount: negOrPosNumber(e.sum, isExpense),
    };
    console.log(newTransaction);

    dispatch(addTransactionThunk(newTransaction))
      .unwrap()
      .then(() => {
        close(false);
        dispatch(changeBalance(+newTransaction.amount));
        toast.success('Transaction is successfully added');
      })
      .catch(err => {
        toast.error(err);
      });
  }

  return (
    <Modal>
      <TestDiv></TestDiv>
      <MediaQuery minWidth={480}>
        <CloseBtn onClick={() => close(false)}>
          <img alt="" src={closeImg}></img>
        </CloseBtn>
      </MediaQuery>

      <h1>Add transaction</h1>
      <form action="" onSubmit={handleSubmit(submit)}>
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
          <div>
            <select
              name="category"
              id=""
              required
              defaultValue={''}
              {...register('category')}
            >
              <option value={''} disabled hidden>
                Select a category
              </option>
              {categories.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            <Arrow alt="" src={arrow}></Arrow>
          </div>
        )}

        <SumDateContainer>
          <ErrorInputContainer>
            <input
              type="text"
              name="sum"
              placeholder="0.00"
              autoComplete="off"
              {...register('sum')}
            />
            <ErrorText>{errors.sum?.message}</ErrorText>
          </ErrorInputContainer>
          <DatePickerWrapper>
            <CalendarImg alt="" src={calendar}></CalendarImg>
            <ReactDatePicker
              name="date"
              {...register('date')}
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="dd.MM.yyyy"
            />
          </DatePickerWrapper>
        </SumDateContainer>
        <ErrorInputContainer>
          <CommentInput
            type="text"
            placeholder="Comment"
            autoComplete="off"
            {...register('comment')}
          />
          <ErrorText>{errors.comment?.message}</ErrorText>
        </ErrorInputContainer>
        <ButtonsContainer>
          <button type="submit">Add</button>
          <button type="button" onClick={() => close(false)}>
            Cancel
          </button>
        </ButtonsContainer>
      </form>
    </Modal>
  );
};

export default AddTransactionForm;
