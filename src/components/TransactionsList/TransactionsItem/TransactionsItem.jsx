import React from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledDeleteButton,
  StyledEditButton,
  StyledTh,
  StyledTransaction,
} from './TransactionsItem.styled';
import { deleteTransactionThunk } from 'store/Transactions/operations';
import { formatCurrency } from '../TransactionsList';

const TransactionsItem = ({ transaction }) => {
  const dispatch = useDispatch();
  return (
    <StyledTransaction $normalFont={true}>
      <StyledTh>{transaction.date}</StyledTh>
      <StyledTh $type={true}>{transaction.type}</StyledTh>
      <StyledTh>{transaction.category}</StyledTh>
      <StyledTh>{transaction.comment}</StyledTh>
      <StyledTh $type={transaction.type} $sum={formatCurrency(transaction.sum)}>
        {transaction.sum}
      </StyledTh>
      <StyledTh>
        <StyledEditButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M10.5 6.33343L8.16666 4.0001M1.45831 13.0418L3.43253 12.8224C3.67373 12.7956 3.79433 12.7822 3.90706 12.7457C4.00707 12.7133 4.10224 12.6676 4.19 12.6097C4.28891 12.5445 4.37471 12.4587 4.54632 12.2871L12.25 4.58343C12.8943 3.9391 12.8943 2.89443 12.25 2.25009C11.6057 1.60576 10.561 1.60576 9.91666 2.25009L2.21299 9.95375C2.04138 10.1254 1.95558 10.2112 1.89035 10.3101C1.83248 10.3978 1.78674 10.493 1.75436 10.593C1.71787 10.7057 1.70447 10.8263 1.67767 11.0675L1.45831 13.0418Z"
              stroke="white"
              strokeOpacity="0.6"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledEditButton>
        <StyledDeleteButton
          onClick={() => dispatch(deleteTransactionThunk(transaction.id))}
        >
          Delete
        </StyledDeleteButton>
      </StyledTh>
    </StyledTransaction>
  );
};

export default TransactionsItem;
