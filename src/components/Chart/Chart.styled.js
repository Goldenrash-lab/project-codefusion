import styled from 'styled-components';

export const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  padding-left: 60px;
  font-size: 34px;
  margin-bottom: 20px;
  margin-top: 32px;
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 715px;
  height: 677px;

  @media only screen and (max-width: 767px) {
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledStatsInfo = styled.div`
  flex-direction: column;
`;

export const StyledChartContainer = styled.div`
  margin-right: 32px;
  width: 288px;
  height: 288px;

  @media only screen and (max-width: 767px) {
    width: 336px;
    height: 336px;
  }

  @media only screen and (max-width: 480px) {
    width: 280px;
    height: 280px;
    margin-bottom: 32px;
  }
`;
