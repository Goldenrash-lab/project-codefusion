import React, { useCallback, useEffect, useRef } from 'react';
import { Backdrop } from './ModalAddTransaction.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { categoriesThunk } from 'store/Categories/categoriesThunk';
import AddTransactionForm from 'components/AddTransactionsForm/AddTransactionForm';

const ModalAddTransactions = ({ close }) => {
  const ref = useRef();

  const dispatch = useDispatch();

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

  return (
    <Backdrop
      onClick={onBackdropClick}
      ref={ref}
      onKeyDown={useEscapeKey(close)}
    >
      <AddTransactionForm close={close} />
    </Backdrop>
  );
};

export default ModalAddTransactions;
