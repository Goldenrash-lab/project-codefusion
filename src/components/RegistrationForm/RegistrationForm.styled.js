import styled from 'styled-components';

import background from '../../images/Register/deskRegister.jpg';
import form from '../../images/Register/deskForm.jpg';
import user from '../../images/Register/user.svg';

export const WrapperReg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const WrapperForm = styled.div`
  /* background-image: url(${form});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  border: 1px solid red;
  padding: 40px 62px;
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
  color: #fbfbfb;

  font-family: Poppins;
  font-size: 26.963px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin: 0 auto;
`;
export const Button = styled.button`
  &::before {
    /* position: absolute; */
    content: '';
    color: white;
    background-color: white;

    width: 24px;
    height: 24px;
    /* background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.0001 15C8.83002 15 6.01089 16.5306 4.21609 18.906C3.8298 19.4172 3.63665 19.6728 3.64297 20.0183C3.64785 20.2852 3.81546 20.6219 4.02546 20.7867C4.29728 21 4.67396 21 5.42733 21H18.5729C19.3262 21 19.7029 21 19.9747 20.7867C20.1847 20.6219 20.3523 20.2852 20.3572 20.0183C20.3635 19.6728 20.1704 19.4172 19.7841 18.906C17.9893 16.5306 15.1702 15 12.0001 15Z" fill="white" fill-opacity="0.4"/><path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" fill="white" fill-opacity="0.4"/></svg>'); */
  }
`;
export const Input = styled.input`
  min-width: 409px;
  padding: 8px 8px 8px 54px;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);

    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
