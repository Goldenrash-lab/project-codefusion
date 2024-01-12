import styled from 'styled-components';

export const StyledThead = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 715px;
  height: 56px;
  padding: 20px 16px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.8);
`;

export const StyledTheadItem = styled.th`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  text-align: ${props =>
    props.$sum ? 'end' : props.$type ? 'center' : 'start'};
`;
