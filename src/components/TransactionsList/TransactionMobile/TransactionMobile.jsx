import React, { useEffect } from 'react';
import Edit from '../helpers/Edit';
import {
  EditButton,
  EditSpan,
  SpanItem,
  SpanName,
  StyledButton,
  StyledLi,
  StyledUlWrap,
  TransactionCard,
} from './TransactionMobile.styled';
import { formatCurrency } from '../TransactionsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'store/Categories/categoriesSelectors';
import { transactionsData } from 'store/Transactions/selectors';
import { deleteTransactionThunk } from 'store/Transactions/transactionsThunk';
import { toast } from 'react-toastify';
import { deleteTransaction } from 'store/Transactions/transactionsSlice';
import { categoriesThunk } from 'store/Categories/categoriesThunk';
import { sortedTransactions } from '../helpers/helper';

const TransactionMobile = ({ open, get }) => {
  const categories = useSelector(selectCategories);
  const transactions = useSelector(transactionsData);
  const dispatch = useDispatch();

  function handleClick(trans) {
    open(true);
    get(trans);
  }
  useEffect(() => {
    dispatch(categoriesThunk());
  }, [dispatch]);

  return (
    <div>
      <StyledUlWrap>
        {sortedTransactions(transactions).map(transaction => {
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
            <TransactionCard
              $type={transType}
              key={transaction.id}
              $longcomment={transaction?.comment.length >= 20 ? true : false}
            >
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
                  <SpanItem
                    $longcategory={category?.name.length > 14 ? true : false}
                  >
                    {category?.name}
                  </SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Comment</SpanName>

                  <SpanItem
                    $longcomment={
                      transaction?.comment.length > 10 ? true : false
                    }
                  >
                    {transaction.comment}
                  </SpanItem>
                </StyledLi>
                <StyledLi>
                  <SpanName>Sum</SpanName>
                  <SpanItem $type={transType}>
                    {formatCurrency(transaction.amount)}
                  </SpanItem>
                </StyledLi>
                <StyledLi
                  $longcomment={transaction?.comment.length > 10 ? true : false}
                >
                  <StyledButton
                    onClick={() =>
                      dispatch(deleteTransactionThunk(transaction.id))
                        .unwrap()
                        .then(() => {
                          dispatch(deleteTransaction(transaction.id));
                          toast.success('Transaction is deleted!');
                        })
                        .catch(err => {
                          toast.error(err);
                        })
                    }
                  >
                    Delete
                  </StyledButton>
                  <EditButton
                    type="button"
                    onClick={() => handleClick(transaction)}
                  >
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
