import styled from 'styled-components';

export const SumDateContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 40px;

  & > :first-child > input {
    text-align: center;
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 600;
  }

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 181px;
    outline: transparent;

    @media only screen and (max-width: 540px) {
      width: 280px;
    }
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    font-size: 18px;
    font-weight: 700;

    @media only screen and (max-width: 540px) {
      text-align: start;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  button {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    color: #623f8b;
    @media only screen and (max-width: 540px) {
      width: 280px;
    }
  }
  button:first-child {
    background: linear-gradient(
      97deg,
      #ffc727 -16.42%,
      #9e40ba 97.04%,
      #7000ff 150.71%
    );
    cursor: pointer;
    transition: 8ms ease-in-out;
    color: #ffff;
  }

  button:hover,
  button:focus {
    background: linear-gradient(
      97deg,
      #ffc727 -16.42%,
      #9e40ba 97.04%,
      #7000ff 150.71%
    );
    cursor: pointer;
    transition: 8ms ease-in-out;
    color: #ffff;
  }
`;

export const ErrorInputContainer = styled.div`
  position: relative;
`;
