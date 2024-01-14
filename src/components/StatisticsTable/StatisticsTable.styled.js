import styled from 'styled-components';

export const StyledTable = styled.div`
  width: 395px;

  @media only screen and (min-width: 768px) {
    width: 336px;
  }

  @media only screen and (max-width: 767px) {
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
  font-family: 'Poppins-SemiBold';
  font-size: 16px;

  @media only screen and (min-width: 768px) {
    width: 336px;
  }

  @media only screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 29px 16px 28px;
  font-size: 14px;
  line-height: 1.28;
  gap: 19px;
`;

export const StyledSpanExpenses = styled.span`
  color: var(--dashboard-text, #ff868d);
  font-family: 'Poppins-SemiBold';
`;

export const StyledSpanIncome = styled.span`
  color: var(--yellow, #ffb627);
  font-family: 'Poppins-SemiBold';
`;

export const StyledList = styled.ul`
  padding-left: 0;
  max-height: 435px;
  overflow-y: auto;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--transparency-20);
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px 29px 16px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  position: relative;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledSum = styled.p`
  color: var(--white, #fbfbfb);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
