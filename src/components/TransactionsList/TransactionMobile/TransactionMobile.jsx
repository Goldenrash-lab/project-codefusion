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
import { formatCurrency } from '../TransactionsList';
import { useSelector } from 'react-redux';
import { selectCategories } from 'store/Categories/categoriesSelectors';

// export const formatCurrency = number => {
//   return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
// };

const TransactionMobile = ({ transactions }) => {
  const categories = useSelector(selectCategories);

  return (
    <div>
      <StyledUlWrap>
        {transactions.map(transaction => {
          const category = categories.find(
            category => category.id === transaction.categoryId
          );

          const inputDate = new Date(transaction.transactionDate);
          const day = String(inputDate.getDate()).padStart(2, '0');
          const month = String(inputDate.getMonth() + 1).padStart(2, '0');
          const year = String(inputDate.getFullYear()).slice(-2);
          const formattedDateStr = `${day}.${month}.${year}`;

          const transType = transaction.type === 'EXPENSE' ? '-' : '+';
          return (
            <TransactionCard $type={transType} key={transaction.id}>
              <ul>
                <StyledLi>
                  <SpanName>Date</SpanName>
                  <SpanItem>{formattedDateStr}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Type</SpanName>
                  <SpanItem>{transType}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Category</SpanName>
                  <SpanItem>{category.name}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Comment</SpanName>
                  <SpanItem>{transaction.comment}</SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Sum</SpanName>
                  <SpanItem $type={transType}>
                    {formatCurrency(transaction.amount)}
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
