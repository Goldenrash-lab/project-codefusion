import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: 395px;
  height: 50px;
  gap: 30px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    width: 336px;
    gap: 16px;
  }

  @media only screen and (max-width: 767px) {
    width: 280px;
    height: 120px;
    flex-direction: column;
    gap: 20px;
  }
`;
