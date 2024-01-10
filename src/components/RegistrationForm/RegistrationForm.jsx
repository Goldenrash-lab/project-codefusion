import React from 'react';
import {
  Button,
  ButtonsDiv,
  Form,
  Input,
  TextLogo,
  WrapperForm,
  WrapperLogo,
  WrapperReg,
} from './RegistrationForm.styled';
import Logo from 'images/Register/Logo';
import UserIcon from 'images/Register/UserIcon';
import EmailIcon from 'images/Register/EmailIcon';
import LockIcon from 'images/Register/LockIcon';
import { InputWrapper } from './RegistrationForm.styled';
import { TestDiv } from './RegistrationForm.styled';

const RegistrationForm = () => {
  return (
    <WrapperReg>
      <WrapperForm>
        <TestDiv />
        <WrapperLogo>
          <Logo />
          <TextLogo>Money Guard</TextLogo>
        </WrapperLogo>
        <Form>
          <InputWrapper>
            <UserIcon />
            <Input type="text" name="name" placeholder="Name" />
          </InputWrapper>
          <InputWrapper>
            <EmailIcon />
            <Input type="email" name="email" placeholder="E-mail" />
          </InputWrapper>
          <InputWrapper>
            <LockIcon />
            <Input type="password" name="password" placeholder="Password" />
          </InputWrapper>
          <InputWrapper>
            <LockIcon />
            <Input
              type="password"
              name="conf_password"
              placeholder="Confirm password"
            />
          </InputWrapper>
        </Form>
        <ButtonsDiv>
          <Button $gradient={true}>REGISTER</Button>
          <Button>LOG IN</Button>
        </ButtonsDiv>
      </WrapperForm>
    </WrapperReg>
  );
};

export default RegistrationForm;
