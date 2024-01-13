import React, { useState } from 'react';

import { StyledAddTransactionButton } from './TransactionsList.styled';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import TransactionsDashboard from './TransactionDashboard/TransactionsDashboard';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { transactionsData } from 'store/Transactions/selectors';

// const transactions = [
//   {
//     id: 1,
//     date: '04.01.23',
//     category: 'other',
//     comment: 'gift for a wife',
//     sum: 300,
//     type: '-',
//   },
//   {
//     id: 2,
//     date: '05.01.23',
//     category: 'income',
//     comment: 'salary from work',
//     sum: 4300,
//     type: '+',
//   },
//   {
//     id: 3,
//     date: '04.01.23',
//     category: 'other stuff',
//     comment: 'gift',
//     sum: 300,
//     type: '-',
//   },
//   {
//     id: 4,
//     date: '05.01.23',
//     category: 'income',
//     comment: 'salary',
//     sum: 4300,
//     type: '+',
//   },
//   {
//     id: 5,
//     date: '04.01.23',
//     category: 'other',
//     comment: 'gift for a wife',
//     sum: 300,
//     type: '-',
//   },
//   {
//     id: 6,
//     date: '05.01.23',
//     category: 'income',
//     comment: 'salary from work',
//     sum: 4300,
//     type: '+',
//   },
// ];
export const formatCurrency = number => {
  return Math.abs(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

const TransactionsList = () => {
  const transactions = useSelector(transactionsData);
  console.log(transactions);

  const [isAddTransactionOpen, setIsTransactionOpen] = useState(false);

  //const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 767.98px)' });

  return (
    <div>
      {isTabletScreen && <TransactionsDashboard transactions={transactions} />}
      {isMobileScreen && <TransactionMobile transactions={transactions} />}

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
    </div>
  );
};

export default TransactionsList;
