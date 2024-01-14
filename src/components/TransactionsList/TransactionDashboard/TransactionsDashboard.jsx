import React, { useEffect } from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import {
  StyledTable,
  StyledThead,
  StyledTheadItem,
  WrapTable,
} from './TransactionDashboard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsData } from 'store/Transactions/selectors';
import { categoriesThunk } from 'store/Categories/categoriesThunk';

const TransactionsDashboard = () => {
  const transactions = useSelector(transactionsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesThunk());
  }, [dispatch]);

  return (
    <WrapTable>
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
        <tbody>
          {transactions.length !== 0
            ? transactions?.map(transaction => {
                return (
                  <TransactionsItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                );
              })
            : null}
        </tbody>
      </StyledTable>
    </WrapTable>
  );
};

export default TransactionsDashboard;
