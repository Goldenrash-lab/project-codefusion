import React from 'react';

import TransactionsItem from './TransactionsItem/TransactionsItem';
import {
  StyledAddTransactionButton,
  StyledTable,
  StyledThead,
  TableWrap,
} from './TransactionsList.styled';


const transactions = [
  {
    id: 1,
    date: '04.01.23',
    category: 'other',
    comment: 'gift',
    sum: 300,
    type: '-',
  },
  {
    id: 2,
    date: '05.01.23',
    category: 'income',
    comment: 'salary',
    sum: 4300,
    type: '+',
  },
];
const TransactionsList = () => {
  return (
    <TableWrap>
      <StyledTable>
        <StyledThead>
          
            <span>Date</span>
            <span>Type</span>
            <span>Category</span>
            <span>Comment</span>
            <span>Sum</span>
        
        </StyledThead>
        <div>
          {transactions.map(transaction => {
            return (
              <TransactionsItem
                key={transaction.id}
                transaction={transaction}
              />
            );
          })}
        </div>
      </StyledTable>
      <StyledAddTransactionButton>
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
    </TableWrap>
  );
};

export default TransactionsList;
