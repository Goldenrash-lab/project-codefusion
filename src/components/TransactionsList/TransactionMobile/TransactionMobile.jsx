import React from 'react';
import Edit from '../helpers/Edit';
import {
  EditButton,
  EditSpan,
  SpanItem,
  SpanName,
  StyledLi,
  StyledUlWrap,
  TransactionCard,
} from './TransactionMobile.styled';
import DeleteButton from '../helpers/DeleteButton';

export const formatCurrency = number => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

const TransactionMobile = ({ transactions }) => {
  return (
    <div>
      <StyledUlWrap>
        {transactions.map(transaction => {
          return (
            <TransactionCard $type={transaction.type} key={transaction.id}>
              <ul>
                <StyledLi>
                  <SpanName>Date</SpanName>
                  <SpanItem>{transaction.date}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Type</SpanName>
                  <SpanItem>{transaction.type}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Category</SpanName>
                  <SpanItem>{transaction.category}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Comment</SpanName>
                  <SpanItem>{transaction.comment}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Sum</SpanName>
                  <SpanItem $type={transaction.type}>
                    {formatCurrency(transaction.sum)}
                  </SpanItem>
                </StyledLi>
                <StyledLi>
                  <DeleteButton />
                  <EditButton>
                    <Edit />
                    <EditSpan>Edit</EditSpan>
                  </EditButton>
                </StyledLi>
              </ul>
            </TransactionCard>
          );
        })}
      </StyledUlWrap>
    </div>
  );
};

export default TransactionMobile;
