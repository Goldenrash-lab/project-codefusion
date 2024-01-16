import styled from 'styled-components';

import backgroundDesk from '../../images/Register/deskRegister.jpg';
import backgroundTablet from '../../images/Register/tabletRegister.jpg';
import backgroundMobile from '../../images/Register/mobileRegister.jpg';
import PasswordStrengthBar from 'react-password-strength-bar';

export const WrapperReg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundDesk});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1279px) {
    background-image: url(${backgroundDesk});
  }
  @media only screen and (max-width: 767px) {
    background-image: url(${backgroundTablet});
  }

  @media only screen and (max-width: 555px) {
    background-image: url(${backgroundMobile});
  }
`;
export const WrapperForm = styled.div`
  /* display: none; */
  @media only screen and (min-width: 555px) {
    display: block;
    border-radius: 8px;
    background: var(--Form-color, rgba(255, 255, 255, 0.1));
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    padding: 40px 62px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 48px;
`;
export const WrapperLogo = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TextLogo = styled.span`
  color: var(--white);

  font-size: 26.963px;
  font-weight: 400;
  @media only screen and (max-width: 555px) {
    font-size: 19px;
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin: 0 auto;
`;
export const Button = styled.button`
  border-radius: 20px;
  background: ${props =>
    props.$gradient ? 'var(--button-gradient)' : 'var(--white)'};
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  padding: 13px 55px;
  color: ${props => (props.$gradient ? '#fff' : 'var(--button-text-color)')};

  text-align: center;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
  min-height: 50px;
  cursor: pointer;

  filter: drop-shadow(1px 9px 15px rgba(0, 0, 0, 0.2));
`;
export const Input = styled.input`
  min-width: 409px;
  padding: 8px 8px 8px 54px;

  color: #fff;
  outline: transparent;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  @media only screen and (max-width: 555px) {
    min-width: 100%;
  }
`;

export const Eye = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
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
  @media only screen and (min-width: 555px) {
    width: 454px;
  }
`;
export const ErrorText = styled.p`
  color: #ff868d;

  font-size: 14px;
  padding-left: 30px;
  display: block;
  height: 14px;
  @media only screen and (max-width: 555px) {
    font-size: 12px;
  }
`;

export const PasswordStrengthBarStyle = styled(PasswordStrengthBar)`
  div {
    div {
      filter: drop-shadow(0px 1px 8px rgba(255, 182, 39, 0.5));
      height: 4px !important;

      &:nth-child(even) {
        width: 0 !important;
      }
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
  p {
    display: none;
  }
`;
