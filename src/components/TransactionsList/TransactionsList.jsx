import React, { useEffect, useState } from 'react';

import {
  StyledAddTransactionButton,
  StyledAlert,
  StyledImg,
  Wrapper,
} from './TransactionsList.styled';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import TransactionsDashboard from './TransactionDashboard/TransactionsDashboard';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionsThunk } from 'store/Transactions/transactionsThunk';
import { transactionsData } from 'store/Transactions/selectors';

import coin from './coin.png';
import ModalEditTransactions from 'components/ModalEditTransaction/ModalEditTransactions';

export const formatCurrency = number => {
  return Math.abs(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsData);
  const [isAddTransactionOpen, setIsTransactionOpen] = useState(false);

  const [isEditTransactionOpen, setIsEditTransactionOpen] = useState(false);
  const [editTrans, setEditTrans] = useState(null);

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767.98px)' });

  function getEditTransaction(trans) {
    setEditTrans(trans);
  }

  return (
    <div>
      {transactions.length === 0 ? (
        <Wrapper>
          <StyledImg src={coin} alt="coin" />
          <StyledAlert>Add your first transaction </StyledAlert>
        </Wrapper>
      ) : (
        <>
          {isTabletScreen && (
            <TransactionsDashboard
              open={setIsEditTransactionOpen}
              get={getEditTransaction}
            />
          )}
          {isMobileScreen && (
            <TransactionMobile
              open={setIsEditTransactionOpen}
              get={getEditTransaction}
            />
          )}
        </>
      )}

      <StyledAddTransactionButton onClick={() => setIsTransactionOpen(true)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0V20" stroke="white" strokeWidth="2" />
          <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
        </svg>
      </StyledAddTransactionButton>
      {isAddTransactionOpen && (
        <ModalAddTransactions close={setIsTransactionOpen} />
      )}
      {isEditTransactionOpen && (
        <ModalEditTransactions
          close={setIsEditTransactionOpen}
          transaction={editTrans}
        />
      )}
    </div>
  );
};

export default TransactionsList;
