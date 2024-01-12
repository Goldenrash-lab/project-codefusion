import styled from 'styled-components';

import background from '../../images/iMac.jpg';

export const Container = styled.div`
  /* containers */
  position: relative;
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;

  background: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: 1272px) {
    max-width: 1312px;
    padding: 0 16px;
  }
`;

export const WrapperLeftAndRight = styled.div`
  display: flex;
`;
export const WrapperLeft = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.6);
`;
