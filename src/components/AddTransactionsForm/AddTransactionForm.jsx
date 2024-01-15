import {
  //   Arrow,
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
import Select, { components } from 'react-select';
import MediaQuery from 'react-responsive';
import closeImg from '../../images/ModalAddTransaction/close.svg';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
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
import { Controller, useForm } from 'react-hook-form';
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
      .min(3, 'Comment must be at least 3 characters')
      .max(25)
      .required('Comment is required'),
  })
  .required();

const AddTransactionForm = ({ close }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isExpense, setIsExpense] = useState(true);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const filteredCategories = categories.filter(item => item.type !== 'INCOME');

  const options = filteredCategories.map(cat => {
    return { value: cat.id, label: cat.name };
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  function submit(e) {
    const newTransaction = {
      transactionDate: getFormattedDate(startDate),
      type: checkTransactionType(isExpense),
      ...(isExpense
        ? { categoryId: e.category }
        : { categoryId: '063f1132-ba5d-42b4-951d-44011ca46262' }),
      comment: e.comment,
      amount: negOrPosNumber(e.sum, isExpense),
    };

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

  const selectStyle = {
    control: styles => ({
      ...styles,
      backgroundColor: 'transparent',
      marginBottom: '40px',
      border: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
      outline: 'none',
      borderRadius: '0',
      boxShadow: 'none',
      cursor: 'pointer',
      minWidth: '280px',

      '&:hover': {
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
      },
    }),
    singleValue: styles => ({
      ...styles,
      color: '#FBFBFB',
      fontSize: '18px',
    }),
    placeholder: styles => ({
      ...styles,
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '18px',
    }),
    menu: styles => ({
      ...styles,
      borderRadius: '8px',
      backgroundColor: 'transparent',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
      overflow: 'hidden',
      color: '#FBFBFB',
      fontFamily: 'inherit',
      fontSize: '16px',
      fontWeight: '400',

      '&::before': {
        background:
          'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
        content: '""',
        filter: 'blur(50px)',
        position: 'absolute',
        inset: '0%',
        zIndex: '-1',
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      if (isFocused) {
        return {
          ...styles,
          background: '#FFFFFF1A',
          color: '#FF868D',
        };
      } else if (isSelected) {
        return {
          ...styles,
          background: 'transparent',
        };
      } else {
        return {
          ...styles,
        };
      }
    },
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
          <Controller
            name="category"
            control={control}
            rules={{ required: true }}
            render={({ field, value }) => (
              <Select
                required
                name="category"
                {...register('category')}
                id="category"
                options={options}
                components={{
                  DropdownIndicator,
                  IndicatorSeparator: () => null,
                }}
                placeholder="Select a category"
                styles={selectStyle}
                isSearchable={false}
                onChange={option => field.onChange(option.value)}
              />
            )}
          />
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
              maxDate={new Date()}
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
