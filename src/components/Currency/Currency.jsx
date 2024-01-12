import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import imageDesc from '../../images/currency/currency.png';
import imageTabl from '../../images/currency/currency-tablet.png';

import {
  StyledBox,
  StyledTable,
  StyledThBox,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTdBox,

  StyledTableHead,
} from './CurrencyStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { currencyThunk } from 'store/currency/currencyThunk';
import {
  currencySelector,
  // isLoadingSelector,
} from 'store/currency/currencySelector';


const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(currencySelector);

  // const isLoading = useSelector(isLoadingSelector);
  const token = useSelector(state => state.auth.token);

  const updateLastUpdatedTime = () => {
    const newTime = Date.now();
    localStorage.setItem('lastUpdatedTime', newTime);
  };

  useEffect(() => {
    // if (!token) return;
    const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');

    const isHourPassed = () => {
      const ONE_HOUR_IN_MS = 60 * 60 * 1000;
      return Date.now() - Number(lastUpdatedTime) >= ONE_HOUR_IN_MS;
    };

    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(currencyThunk());
      setCurrency(selectedCurrency);
      updateLastUpdatedTime();
    } else {
      setCurrency(selectedCurrency);
    }
  }, [dispatch, selectedCurrency, token]);

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <div>
      {isDesktop && (
        <StyledBox ai="center" jc="center">
          <StyledTable>
            <StyledTableHead>
              <StyledThBox>
                <StyledTh>Currency</StyledTh>
                <StyledTh>Purchase</StyledTh>
                <StyledTh>Sale</StyledTh>
              </StyledThBox>
            </StyledTableHead>
            <StyledTBody>
              {currency?.length &&
                currency.map(el => {
                  return (
                    <StyledTdBox key={nanoid()}>
                      <StyledTd>{el.currencyName}</StyledTd>
                      <StyledTd>{el.rateBuy}</StyledTd>
                      <StyledTd>{el.rateSell.toString().slice(0, -2)}</StyledTd>
                    </StyledTdBox>
                  );
                })}
            </StyledTBody>
          </StyledTable>
          <img src={imageDesc} alt="graphic" />
        </StyledBox>
      )}
      {/* tablet */}
      {isTablet && (
        <StyledBox maxw="336px">
          <StyledTable>
            <StyledTableHead padl="20px" marb="8px">
              <StyledThBox>
                <StyledTh>Currency</StyledTh>
                <StyledTh>Purchase</StyledTh>
                <StyledTh>Sale</StyledTh>
              </StyledThBox>
            </StyledTableHead>

            <StyledTBody padl="20px" gap="12px">
              {currency?.length &&
                currency.map(el => {
                  return (
                    <StyledTdBox key={nanoid()}>
                      <StyledTd>{el.currencyName}</StyledTd>
                      <StyledTd>{el.rateBuy}</StyledTd>
                      <StyledTd>{el.rateSell.toString().slice(0, -2)}</StyledTd>
                    </StyledTdBox>
                  );
                })}
            </StyledTBody>
          </StyledTable>
          <img src={imageTabl} alt="" />
        </StyledBox>
      )}
    </div>
  );

};

export default Currency;
