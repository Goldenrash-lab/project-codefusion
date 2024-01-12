import styled from 'styled-components';
import switcherExpense from '../../images/Switcher/switcherExpense.svg';
import switcherIncome from '../../images/Switcher/switcherIncome.svg';
import background from '../../images/ModalAddTransaction/background1.png';
import backgroundMob from '../../images/ModalAddTransaction/backgroundMob.png';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(34, 13, 91, 0.23);

  backdrop-filter: blur(3.5px);
  z-index: 20;
  /* @media only screen and (max-width: 480px) {
    position: relative;
  } */
`;

export const Modal = styled.div`
  width: 540px;
  max-height: 589px;
  overflow: hidden;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;

  padding: 40px 73px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  /* background: rgba(255, 255, 255, 0.1); */
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  @media only screen and (max-width: 480px) {
    background-image: url(${backgroundMob});
    max-width: 320px;
    min-height: 650px;
    padding: 40px 20px;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  /* width: calc(100% - 40px); */
  h1 {
    color: var(--white, #fbfbfb);
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 42px;
    @media only screen and (max-width: 480px) {
      font-size: 24px;
    }
  }
  select {
    position: relative;
    appearance: none;
    cursor: pointer;
    width: 394px;
    margin-bottom: 40px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
    @media only screen and (max-width: 480px) {
      width: 280px;
    }
  }
  select > option {
    background-color: rgba(106, 70, 165, 0.52);

    /* border-radius: 8px; */
    /* background: linear-gradient(
      0deg,
      rgba(83, 61, 186, 0.7) 0%,
      rgba(80, 48, 154, 0.7) 43.14%,
      rgba(106, 70, 165, 0.52) 73.27%,
      rgba(133, 93, 175, 0.13) 120.03%
    ); */

    /* form effects */
    /* box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px); */
  }

  select:required {
    color: rgba(255, 255, 255, 0.6);
    padding-left: 8px;
    padding-bottom: 8px;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding-left: 8px;
    padding-bottom: 8px;
  }
`;

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 42px;
`;

export const Switcher = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  input[type='checkbox'] {
    display: none;
  }
  span {
    width: 80px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  span::before {
    position: absolute;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    content: url(${switcherIncome});
    top: 6px;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  input[type='checkbox']:checked + span::before {
    width: 44px;
    height: 44px;
    transform: translateX(38px);
    content: url(${switcherExpense});
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input[type='checkbox']:checked + span {
    background-color: #ffffff;
  }
`;

export const SumDateContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 40px;

  & > :first-child {
    text-align: center;
    color: #fbfbfb;
    font-size: 18px;

    font-weight: 600;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 181px;
    outline: transparent;

    @media only screen and (max-width: 480px) {
      width: 280px;
    }
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    @media only screen and (max-width: 480px) {
      text-align: start;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  button {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    color: #623f8b;
    @media only screen and (max-width: 480px) {
      width: 280px;
    }
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

export const CommentInput = styled.input`
  width: 394px;
  margin-bottom: 40px;
  outline: transparent;
  color: #fbfbfb;
  font-size: 18px;

  font-weight: 600;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    font-weight: 400;
  }
  @media only screen and (max-width: 480px) {
    width: 280px;
    padding-bottom: 52px !important;
  }
`;

export const CheckedExpense = styled.p`
  color: #ff868d;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const UncheckedText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 600;
`;
export const CheckedIncome = styled.p`
  color: #ffb627;
  font-size: 16px;
  font-weight: 600;
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  input {
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const CalendarImg = styled.img`
  position: absolute;
  top: -4px;
  right: 11px;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Arrow = styled.img`
  position: absolute;
  top: 213px;
  right: 81px;
  pointer-events: none;
  @media only screen and (max-width: 480px) {
    top: 206px;
    right: 40px;
  }
`;

export const TestDiv = styled.div`
  border-radius: 454px;
  background: rgba(47, 21, 176, 0.73);
  max-width: 454px;
  height: 454px;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  filter: blur(100px);
  @media only screen and (min-width: 480px) {
    width: 454px;
  }
`;
