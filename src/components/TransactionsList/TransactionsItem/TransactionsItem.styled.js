import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  width: 69px;
  height: 29px;
  color: #fbfbfb;
  padding: 4px 12px 4px 12px;
  margin-left: 8px;
  border-radius: 20px;
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
  @media screen and (max-width: 1280px) {
    margin-right: 0px;
  }
`;

export const StyledTransaction = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 704px;
  height: 56px;
  padding-left: 16px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  font-size: ${props => (props.$normalFont ? '14px' : null)};
  font-weight: 400;
  &:last-child {
    border-bottom: none;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 0;
  }
`;
export const StyledTh = styled.th`
  text-align: ${props =>
    props.$sum ? 'end' : props.$type ? 'center' : 'start'};
  width: ${props => (props.$width ? '90px' : '100px')};
  font-weight: 400;
  color: ${props =>
    props.$type === '+'
      ? 'var(--yellow)'
      : props.$type === '-'
      ? 'var(--dashboard-text)'
      : null};

  &:last-child {
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1280px) {
      padding-right: 0;
      margin-right: 0;
    }
  }
`;

export const StyledEditButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  &:hover {
    box-shadow: 5px 9px 15px 5px rgba(0, 0, 0, 0.2);
  }
`;
