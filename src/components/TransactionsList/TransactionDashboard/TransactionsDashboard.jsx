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
      {transactions.length === 0 && (
        <StyledAlert>Add your first transaction </StyledAlert>
      )}
      <StyledTable>
        <thead>
          <StyledThead>
            <StyledTheadItem>Date</StyledTheadItem>
            <StyledTheadItem $width={true} $type={true}>
              Type
            </StyledTheadItem>
            <StyledTheadItem $width={true}>Category</StyledTheadItem>
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
