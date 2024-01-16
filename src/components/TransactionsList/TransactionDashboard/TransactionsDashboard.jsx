import React, { useEffect } from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import {
  StyledTable,
  StyledThead,
  StyledTheadItem,
  WrapTable,
  WrapperBlock,
} from './TransactionDashboard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsData } from 'store/Transactions/selectors';
import { categoriesThunk } from 'store/Categories/categoriesThunk';
import { sortedTransactions } from '../helpers/helper';

const TransactionsDashboard = ({ open, get }) => {
  const transactions = useSelector(transactionsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesThunk());
  }, [dispatch]);

  return (
    <WrapperBlock>
      <StyledTable>
        <thead>
          <StyledThead>
            <StyledTheadItem $width={true}>Date</StyledTheadItem>
            <StyledTheadItem $width={true} $type={true}>
              Type
            </StyledTheadItem>
            <StyledTheadItem>Category</StyledTheadItem>
            <StyledTheadItem>Comment</StyledTheadItem>
            <StyledTheadItem $sum={true}>Sum</StyledTheadItem>
            <StyledTheadItem></StyledTheadItem>
          </StyledThead>
        </thead>
      </StyledTable>
      <WrapTable>
        <StyledTable>
          <tbody>
            {transactions.length !== 0
              ? sortedTransactions(transactions).map(transaction => {
                  return (
                    <TransactionsItem
                      get={get}
                      open={open}
                      key={transaction.id}
                      transaction={transaction}
                    />
                  );
                })
              : null}
          </tbody>
        </StyledTable>
      </WrapTable>
    </WrapperBlock>
  );
};

export default TransactionsDashboard;
