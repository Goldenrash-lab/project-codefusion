import styled from 'styled-components';

export const Container = styled.div`
  /* containers */

  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: 1272px) {
    max-width: 1272px;
    padding: 0 16px;
  }
`;
