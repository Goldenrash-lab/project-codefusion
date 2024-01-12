import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import TransactionsItem from './TransactionsItem/TransactionsItem';
import {
  StyledAddTransactionButton,
  StyledTable,
  StyledThead,
  StyledTheadItem,
  TableWrap,
  WrapTable,
} from './TransactionsList.styled';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import TransactionMobile from './TransactionMobile/TransactionMobile';
// import { transactionsData } from 'store/Transactions/selectors';

const transactions = [
  {
    id: 1,
    date: '04.01.23',
    category: 'other',
    comment: 'gift for a wife',
    sum: 300,
    type: '-',
  },
  {
    id: 2,
    date: '05.01.23',
    category: 'income',
    comment: 'salary from work',
    sum: 4300,
    type: '+',
  },
  {
    id: 3,
    date: '04.01.23',
    category: 'other stuff',
    comment: 'gift',
    sum: 300,
    type: '-',
  },
  {
    id: 4,
    date: '05.01.23',
    category: 'income',
    comment: 'salary',
    sum: 4300,
    type: '+',
  },
  {
    id: 5,
    date: '04.01.23',
    category: 'other',
    comment: 'gift for a wife',
    sum: 300,
    type: '-',
  },
  {
    id: 6,
    date: '05.01.23',
    category: 'income',
    comment: 'salary from work',
    sum: 4300,
    type: '+',
  },
];
const TransactionsList = () => {
  // const transactions = useSelector(transactionsData);
  // console.log(transactions);
  const [isAddTransactionOpen, setIsTransactionOpen] = useState(false);

  return (
    <TableWrap>
      <WrapTable>
        <StyledTable>
          <TransactionMobile />
          {/* <thead>
            <StyledThead>
              <StyledTheadItem>Date</StyledTheadItem>
              <StyledTheadItem type={true}>Type</StyledTheadItem>
              <StyledTheadItem>Category</StyledTheadItem>
              <StyledTheadItem>Comment</StyledTheadItem>
              <StyledTheadItem sum={true}>Sum</StyledTheadItem>
              <StyledTheadItem></StyledTheadItem>
            </StyledThead>
          </thead>
          <tbody>
            {transactions.length !== 0 ? (
              transactions?.map(transaction => {
                return (
                  <TransactionsItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                );
              })
            ) : (
              <h1>No transactions yet </h1>
            )}
          </tbody> */}
        </StyledTable>
      </WrapTable>
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
    </TableWrap>
  );
};

export default TransactionsList;
