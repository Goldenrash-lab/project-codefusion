import styled from 'styled-components';

export const StyledBalance = styled.div`
  padding: 8px 56px 11px;
  background-color: rgba(82, 59, 126, 0.6);
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    padding-left: 32px;
    padding-right: 0px;
    border-radius: 8px;
    background: rgba(82, 59, 126, 0.6);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);

    min-width: 280px;
  }
  @media (min-width: 768px) {
    min-width: 335px;
  }
`;
export const StyledTitle = styled.h3`
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.4);
`;
export const StyledAmount = styled.p`
  color: #fbfbfb;
  font-size: 30px;
  font-family: 'Poppins-SemiBold';
  display: flex;
  align-items: center;
`;
export const StyledBalanceDiv = styled.div`
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;

    /* justify-content: flex-start; */
  }
`;
export const StyledBalanceDivText = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavigBalanceContainerDiv = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
