import React from 'react';
import { StyledMobBox } from './CurrencyTabStyled';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { currencySelector } from 'store/currency/currencySelector';
import {
  StyledBox,
  StyledTable,
  StyledThBox,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTdBox,
  StyledTableHead,
} from '../components/Currency/CurrencyStyled';
import { nanoid } from 'nanoid';
import imageTabl from '../images/currency/currency-tablet.png';

const CurrencyTab = () => {
  const selectedCurrency = useSelector(currencySelector);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {isMobile && (
        <StyledMobBox>
          <StyledBox $maxw="336px" $mart="0px">
            <StyledTable>
              <StyledTableHead $padl="20px" $marb="8px">
                <StyledThBox>
                  <StyledTh>Currency</StyledTh>
                  <StyledTh>Purchase</StyledTh>
                  <StyledTh>Sale</StyledTh>
                </StyledThBox>
              </StyledTableHead>
              <StyledTBody $padl="20px" $gap="12px">
                {selectedCurrency?.length &&
                  selectedCurrency.map(el => {
                    return (
                      <StyledTdBox key={nanoid()}>
                        <StyledTd>{el.currencyName}</StyledTd>
                        <StyledTd>{el.rateBuy}</StyledTd>
                        <StyledTd>
                          {el.rateSell.toString().slice(0, -2)}
                        </StyledTd>
                      </StyledTdBox>
                    );
                  })}
              </StyledTBody>
            </StyledTable>
            <img src={imageTabl} alt="" width="336px" />
          </StyledBox>
        </StyledMobBox>
      )}
    </>
  );
};

export default CurrencyTab;
