import styled from 'styled-components';

export const SpanName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.45;
`;

export const SpanItem = styled.span`
  text-align: right;
  font-size: 16px;
  color: ${props =>
    props.$type === '+'
      ? 'var(--yellow)'
      : props.$type === '-'
      ? 'var(--dashboard-text)'
      : null};
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);

  &:last-child {
    border-bottom: none;
  }
`;

export const TransactionCard = styled.li`
  width: 280px;
  height: 293px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-left: 5px solid
    ${props =>
      props.$type === '+'
        ? 'var(--yellow)'
        : props.$type === '-'
        ? 'var(--dashboard-text)'
        : null};
  margin-bottom: 8px;
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--white, 0.6);
`;

export const EditSpan = styled.span`
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.02em;
`;
