import React, { useCallback, useEffect, useRef, useState } from 'react';
import calendar from '../../images/ModalAddTransaction/calendar.svg';
import closeImg from '../../images/ModalAddTransaction/close.svg';
import {
  Arrow,
  Backdrop,
  CalendarImg,
  CheckedExpense,
  CheckedIncome,
  CloseBtn,
  DatePickerWrapper,
  Modal,
  UncheckedText,
} from './ModalAddTransaction.styled';
import { CommentInput } from './ModalAddTransaction.styled';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TestDiv } from 'components/ModalAddTransactions/ModalAddTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'store/Categories/categoriesSelectors';
import { categoriesThunk } from 'store/Categories/categoriesThunk';
import arrow from '../../images/ModalAddTransaction/arrow.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addTransactionThunk } from 'store/Transactions/transactionsThunk';
import { ErrorText } from './ModalAddTransaction.styled';
import { toast } from 'react-toastify';
import { Switcher, SwitcherContainer } from './Switcher.styled';
import {
  ButtonsContainer,
  ErrorInputContainer,
  SumDateContainer,
} from './Containers.styled';
import {
  checkTransactionType,
  getFormattedDate,
  negOrPosNumber,
} from './helpers';

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

const ModalAddTransactions = ({ close }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isExpense, setIsExpense] = useState(true);
  const ref = useRef();
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

  useEffect(() => {
    dispatch(categoriesThunk());
  }, [dispatch]);

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
        toast.success('Transaction is successfully added');
      })
      .catch(err => {
        toast.error(err);
      });
  }

  return (
    <Backdrop
      onClick={onBackdropClick}
      ref={ref}
      onKeyDown={useEscapeKey(close)}
    >
      <Modal>
        <TestDiv></TestDiv>
        <CloseBtn onClick={() => close(false)}>
          <img alt="" src={closeImg}></img>
        </CloseBtn>
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
    </Backdrop>
  );
};

export default ModalAddTransactions;
