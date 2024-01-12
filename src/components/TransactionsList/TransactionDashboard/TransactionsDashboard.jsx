import React from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import {
  StyledAlert,
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
            <StyledAlert>Add your first transaction </StyledAlert>
          )}
        </tbody>
      </StyledTable>
    </WrapTable>
  );
};

export default TransactionsDashboard;
