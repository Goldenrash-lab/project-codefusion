import styled from 'styled-components';
import background from '../../images/ModalAddTransaction/background.png';
import backgroundMob from '../../images/ModalAddTransaction/backgroundMob.png';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(45px);
  z-index: 20;
  @media only screen and (max-width: 540px) {
    backdrop-filter: blur(50px);
  }
`;

export const Modal = styled.div`
  width: 540px;
  overflow: hidden;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  padding: 24px 73px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;

  @media only screen and (max-width: 540px) {
    padding: 40px 20px;
    height: 100%;
    background-image: none;
    background-image: url(${backgroundMob});
    background-size: cover;
    /* background: var(--Form-color, rgba(255, 255, 255, 0.1)); */

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  h1 {
    color: var(--white, #fbfbfb);
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 42px;

    @media only screen and (max-width: 540px) {
      font-size: 24px;
    }
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding-left: 8px;
    padding-bottom: 8px;
  }
`;

export const CommentInput = styled.input`
  width: 394px;
  outline: transparent;
  color: #fbfbfb;
  font-size: 18px;
  font-weight: 600;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    font-weight: 400;
  }

  @media only screen and (max-width: 540px) {
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

  @media only screen and (max-width: 540px) {
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

  @media only screen and (min-width: 540px) {
    width: 454px;
  }
`;

export const ErrorText = styled.p`
  color: #ff868d;
  font-size: 14px;
  height: 14px;
`;
