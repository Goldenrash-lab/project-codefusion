import React, { useEffect } from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import {
  StyledAlert,
  StyledTable,
  StyledThead,
  StyledTheadItem,
  WrapTable,
} from './TransactionDashboard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsData } from 'store/Transactions/selectors';
import { categoriesThunk } from 'store/Categories/categoriesThunk';

function sortByDate(array) {
  array.sort((a, b) => {
    const dateA = new Date(a.transactionDate).getTime();
    const dateB = new Date(b.transactionDate).getTime();
    console.log(a.transactionDate, b.transactionDate);
    return dateA - dateB;
  });
}

const TransactionsDashboard = () => {
  const transactions = useSelector(transactionsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesThunk());
  }, [dispatch]);

  console.log(transactions);
  //console.log(sortByDate(transactions));
  return (
    <WrapTable>
      {transactions.length === 0 && (
        <StyledAlert>Add your first transaction </StyledAlert>
      )}
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
