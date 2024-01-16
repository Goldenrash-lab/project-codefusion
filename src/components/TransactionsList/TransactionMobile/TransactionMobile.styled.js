import styled from 'styled-components';

export const SpanName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.45;
`;

export const SpanItem = styled.span`
  text-align: right;
  font-size: ${props =>
    props.$longcategory === true || props.$longcomment === true
      ? '15.5px'
      : props.$longcategory === false
      ? '16px'
      : null};
  color: ${props =>
    props.$type === '+'
      ? 'var(--yellow)'
      : props.$type === '-'
      ? 'var (--dashboard-text)'
      : null};
  padding-top: ${props => (props.$longcategory === true ? '3px' : null)};
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-top: ${props => (props.$longcomment === true ? '11px' : '12px')};
  padding-right: 20px;
  padding-bottom: ${props => (props.$longcomment === true ? '11px' : '12px')};

  border-bottom: 1px solid rgba(255, 255, 255, 0.41);

  &:last-child {
    border-bottom: none;
  }
`;

export const TransactionCard = styled.li`
  width: 280px;
  height: 293px;
  height: ${props => (props.$longcomment === true ? '303px' : '293px')};
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
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const EditSpan = styled.span`
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  margin-left: 4px;
  color: rgba(255, 255, 255, 0.6);
`;
export const StyledUlWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledButton = styled.button`
  width: 69px;
  height: 29px;
  color: #fbfbfb;
  font-size: 14px;
  padding: 4px 12px 4px 12px;
  margin-left: 0px;
  border-radius: 18px;
  border: transparent;
  background: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  text-align: center;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    box-shadow: 1px 9px 15px 1px rgba(0, 0, 0, 0.4);
  }
`;
