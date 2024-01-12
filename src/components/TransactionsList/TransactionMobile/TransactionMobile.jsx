import React from 'react';
import Edit from '../Edit';
import {
  EditButton,
  EditSpan,
  SpanItem,
  SpanName,
  StyledLi,
  TransactionCard,
} from './TransactionMobile.styled';
import DeleteButton from '../DeleteButton';

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
const TransactionMobile = () => {
  return (
    <div>
      <ul>
        {transactions.map(transaction => {
          return (
            <TransactionCard>
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
                  <SpanItem>{transaction.sum}</SpanItem>
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
      </ul>
    </div>
  );
};

export default TransactionMobile;
