import React from 'react';
import styled from 'styled-components';

const DeleteButton = () => {
  return <StyledButton>Delete</StyledButton>;
};

const StyledButton = styled.button`
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

  @media screen and (max-width: 320px) {
    margin-left: 8px;
  }
`;

export default DeleteButton;
