import styled from 'styled-components';

export const StyledTable = styled.div`
  width: 395px;
  height: 607px;

  @media only screen and (max-width: 767px) {
    width: 336px;
  }

  @media only screen and (max-width: 480px) {
    width: 280px;
  }
`;

export const StyledTitleContainer = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  width: 395px;
  height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (max-width: 767px) {
    width: 336px;
  }

  @media only screen and (max-width: 480px) {
    width: 280px;
  }
`;

export const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 29px 16px 28px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  gap: 19px;
`;

export const StyledSpanExpenses = styled.span`
  color: var(--dashboard-text, #ff868d);
`;

export const StyledSpanIncome = styled.span`
  color: var(--yellow, #ffb627);
`;

export const StyledList = styled.ul`
  padding-left: 0;
  max-height: 200px;
  overflow-y: auto;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px 29px 16px 16px;
`;

export const StyledColorItem = styled.div`
  display: flex;
  gap: 16px;
`;

export const ColorIndicator = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10%;
  background-color: ${props => props.color || '#FFFFFF'};
`;

export const StyledCategory = styled.p`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledSum = styled.p`
  color: var(--white, #fbfbfb);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
