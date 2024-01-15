import styled from 'styled-components';

import backgroundDesk from '../../images/iMac.jpg';
import backgroundMob from '../../images/mobile.jpg';

export const Container = styled.div`
  /* containers */
  position: relative;
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;

  /* background: url(${backgroundMob});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

  @media only screen and (min-width: 768px) {
    /* background: url(${backgroundDesk});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    max-width: 768px;
    padding: 0 32px;
  }

  @media only screen and (max-width: 375px) {
    padding: 0;
  }
  @media only screen and (min-width: 1272px) {
    max-width: 1312px;
    padding: 0 16px;
  }
`;

export const WrapperLeftAndRight = styled.div`
  display: flex;

  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
export const WrapperLeft = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media only screen and (min-width: 1280px) {
    border-right: 1px solid rgba(255, 255, 255, 0.6);
    flex-direction: column;
  }
`;
