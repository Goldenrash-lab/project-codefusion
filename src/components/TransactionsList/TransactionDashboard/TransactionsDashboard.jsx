import React from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import {
  StyledTable,
  StyledThead,
  StyledTheadItem,
  WrapTable,
} from './TransactionDashboard.styled';

const TransactionsDashboard = ({ transactions }) => {
  return (
    <WrapTable>
      <StyledTable>
        <thead>
          <StyledThead>
            <StyledTheadItem>Date</StyledTheadItem>
            <StyledTheadItem $type={true}>Type</StyledTheadItem>
            <StyledTheadItem>Category</StyledTheadItem>
            <StyledTheadItem>Comment</StyledTheadItem>
            <StyledTheadItem $sum={true}>Sum</StyledTheadItem>
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
        </tbody>
      </StyledTable>
    </WrapTable>
  );
};

export default TransactionsDashboard;
