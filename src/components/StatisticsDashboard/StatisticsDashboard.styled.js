import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: 395px;
  height: 50px;
  gap: 30px;
  margin-bottom: 20px;

  @media only screen and (max-width: 767px) {
    gap: 16px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const StyledSelect = styled.select`
  display: flex;
  align-items: center;
  font-family: 'Poppins-Regular';
  color: white;
  font-size: 12px;
  width: 182px;
  height: 50px;
  padding: 13px 20px;
  border-radius: 8px;
  border: 1px solid var(--white-60, rgba(255, 255, 255, 0.6));
  background: rgba(74, 86, 226, 0.1);

  @media only screen and (max-width: 767px) {
    width: 160px;
  }

  @media only screen and (max-width: 480px) {
    width: 280px;
  }
`;
