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

const RegistrationForm = () => {
  return (
    <WrapperReg>
      <WrapperForm>
        <WrapperLogo>
          <Logo />
          <TextLogo>Money Guard</TextLogo>
        </WrapperLogo>
        <Form>
          <div>
            <Input type="text" name="name" placeholder="Name" />
          </div>
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Password" />
          <Input
            type="password"
            name="conf_password"
            placeholder="Confirm password"
          />
        </Form>
        <ButtonsDiv>
          <Button>REGISTER</Button>
          <Button>LOG IN</Button>
        </ButtonsDiv>
      </WrapperForm>
    </WrapperReg>
  );
};

export default RegistrationForm;
