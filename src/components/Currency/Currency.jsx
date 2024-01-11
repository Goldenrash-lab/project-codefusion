import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import image from '../../images/currency/currency.png';
import {
  StyledBox,
  StyledTable,
  StyledThBox,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTdBox,
} from './CurrencyStyled';
import { useDispatch, useSelector } from 'react-redux';

import { currencyThunk } from 'store/currency/currencyThunk';
import { currencySelector } from 'store/currency/currencySelector';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(currencySelector);
  // console.log('select', currency);
  // const isLoading = useSelector(isLoadingSelector);
  const token = useSelector(state => state.auth.token);

  const updateLastUpdatedTime = () => {
    const newTime = Date.now();
    localStorage.setItem('lastUpdatedTime', newTime);
  };

  useEffect(() => {
    // if (!token) return;
    const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');
    console.log('here');
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

  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTabletAndMobile = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  // const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <StyledBox>
      <StyledTable>
        <StyledThBox>
          <StyledTh>Currency</StyledTh>
          <StyledTh>Purchase</StyledTh>
          <StyledTh>Sale</StyledTh>
        </StyledThBox>

        <StyledTBody>
          {currency?.length &&
            currency.map(el => {
              console.log('el', el);
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
      <img src={image} alt="" />
    </StyledBox>
  );
  // return (
  //   <div>
  //     <div>
  //       <div>
  //         <h2>Currency</h2>
  //         <h2>Purchase</h2>
  //         <h2>Sale</h2>
  //       </div>
  //       <div>
  //         <div>
  //           <h2>usd</h2>
  //           <h2>eur</h2>
  //         </div>
  //       </div>
  //     </div>
  //     <img src={image} alt="" />
  //   </div>
  // );
};

export default Currency;
