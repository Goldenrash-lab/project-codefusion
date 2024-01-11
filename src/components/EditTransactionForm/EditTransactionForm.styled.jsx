import styled from 'styled-components';
import backDesktop from '../../images/EditTransaction/backDesktop.png';

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const FormContainer = styled.div`
  width: 540px;
  height: 580px;
  padding: 40px 0;
  background-image: url(${backDesktop});
  background-position: center;
  background-repeat: repeat;
  //   background-size: cover;
  background-size: 100% 100%;
  background-color: red;

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  margin: 40px auto;
  text-align: center;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const FormGroupType = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background: none;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  color: #ffffff;
  box-sizing: border-box;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  &:hover,
  &:active,
  &:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
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
  border-radius: 4px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  border-radius: 20px;
  color: #fff;
  width: 300px;
  height: 50px;
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
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToggleButton = styled.button`
  flex: 1;
  font-size: 16px;
  cursor: pointer;
  border: none;
  //   border-radius: 4px;
  height: 24px;
  background: none;
  color: #fff;
  &:hover,
  &:active,
  &:focus {
    color: var(--dashboard-text);
    border: none;
    outline: none;
  }
`;
export const SpanButton = styled.span`
  font-size: 14px;
`;
