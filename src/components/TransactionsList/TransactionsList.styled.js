import styled from 'styled-components';

export const StyledAddTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 40px;
  bottom: 41px;
  width: 44px;
  height: 44px;
  background: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    box-shadow: 1px 9px 15px 1px rgba(0, 0, 0, 0.4);
  }
`;
