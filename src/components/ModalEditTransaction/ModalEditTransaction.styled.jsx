import styled from 'styled-components';
import backDesktop from '../../images/ModalAddTransaction/background.png';
import backMobile from '../../images/ModalAddTransaction/backgroundMob.png';
// import backMobile from '../../images/EditTransaction/backgroundMobile.png';

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  position: fixed;
  max-width: 540px;
  min-width: 481px;

  height: 580px;
  padding: 40px 0;
  background-image: url(${backDesktop});
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media only screen and (max-width: 480px) {
    height: 100vh;
    background-image: url(${backMobile});
    background-size: cover;
  }
`;

export const Title = styled.h2`
  margin: 40px auto;
  text-align: center;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  @media only screen and (max-width: 480px) {
    font-size: 24px;
    margin: 20px auto 40px;
  }
`;

export const FormGroup = styled.div`
  margin: 0 auto 15px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 0 auto 40px;
  }
`;

export const FormGroupType = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Category = styled.p`
  width: 394px;
  padding-left: 8px;
  padding-bottom: 8px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background: none;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  &:hover,
  &:active,
  &:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
  }
  @media only screen and (max-width: 480px) {
    width: 280px;
  }
`;

export const Input = styled.input`
  width: 181px;
  height: 38px;
  padding: 8px;
  color: #ffffff;
  box-sizing: border-box;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 18px;
  font-weight: 600;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover,
  &:active,
  &:focus {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
  }
  @media only screen and (max-width: 480px) {
    width: 280px;
  }
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  input {
    width: 181px;
    height: 34px;
    color: #fbfbfb;
    font-size: 18px;
    font-weight: 400;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding: 8px;
    color: #ffffff;
    @media only screen and (max-width: 480px) {
      width: 280px;
    }

    &:hover,
    &:active,
    &:focus {
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      outline: none;
    }
  }
`;
export const CalendarImg = styled.img`
  position: absolute;
  bottom: 11px;
  left: 146px;

  @media only screen and (max-width: 480px) {
    bottom: 8px;
    left: 239px;
  }
`;

export const TextArea = styled.textarea`
  width: 394px;
  padding: 8px;
  box-sizing: border-box;
  color: #ffffff;
  resize: none;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  &:hover,
  &:active,
  &:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
  }
  @media only screen and (max-width: 480px) {
    width: 280px;
    /* height: 76px; */
  }
  @media only screen and (min-width: 481px) {
    padding-top: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  margin-bottom: 10px;
  padding: 10px 20px;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  border-radius: 20px;
  color: #fff;
  width: 300px;
  height: 50px;
  @media only screen and (max-width: 480px) {
    width: 280px;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  border-radius: 20px;
  color: var(--button-text-color);
  width: 300px;
  height: 50px;
  @media only screen and (max-width: 480px) {
    width: 280px;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const StyledText = styled.p`
  flex: 1;
  font-size: 16px;
  cursor: pointer;
  border: none;
  //   border-radius: 4px;
  height: 24px;
  background: none;
  color: ${props => props.$color || '#fff'};
`;
export const SpanButton = styled.span`
  font-size: 14px;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  @media only screen and (max-width: 480px) {
    top: -50px;
    right: -50px;
  }
`;
