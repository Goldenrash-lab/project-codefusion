import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  max-width: ${props => props.$maxw || '480px'};
  /* margin-top: 32px; */
  margin-top: ${props => props.$mart || '32px'};
  background-color: ${props => props.$bgc || '#4a56e21a'};
`;

export const StyledTable = styled.div`
  max-height: 170px;
  width: 100%;
`;

export const StyledTableHead = styled.div`
  /* background: rgba(82, 59, 126, 0.6); */
  background: ${props => props.$bgc || 'rgba(255, 255, 255, 0.2)'};
  padding-left: ${props => props.$padl || '62px'};
  margin-bottom: ${props => props.$marb || '24px'};
  height: 48px;
  display: flex;
  align-items: center;
`;

export const StyledThBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  /* padding: 16px 0; */
  padding: ${props => props.$pad || '16px 0'};
`;

export const StyledTdBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
  gap: 60px;
`;

export const StyledTBody = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: ${props => props.$padl || '62px'};
  gap: ${props => props.$gap || '24px'};
  /* margin-bottom: 6px; */
  margin-bottom: ${props => props.$marb || '6px'};
`;

export const StyledTh = styled.span`
  color: var(--white, #fbfbfb);
  /* font-family: 'Poppins SemiBold'; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(16 / 24);
  text-align: center;
  &:last-child {
  }
  &:first-child {
  }
`;

export const StyledTd = styled.span`
  display: inline-block;
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(24 / 16);
  text-align: center;
  width: 62px;
  &:last-child {
    width: 42px;
  }
  &:first-child {
    width: 65px;
  }
`;

export const StyledImg = styled.img`
  margin-top: 7px;
  display: inline-block;
  width: ${props => props.$w || '480px'};
`;

// numbers
export const StyledNum = styled.div`
  position: relative;
`;
export const StyledNumUsd = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-style: normal;
`;

export const StyledNumEur = styled.div`
  position: absolute;
  top: -10px;
  right: 95px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-style: normal;
`;
