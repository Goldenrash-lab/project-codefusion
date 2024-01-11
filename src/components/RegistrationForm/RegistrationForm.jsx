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
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'store/Auth/thunk';

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  function submit(data) {
    console.log(data);
    dispatch(registerThunk(data));
  }
  return (
    <WrapperReg>
      <WrapperForm>
        <TestDiv />
        <WrapperLogo>
          <Logo />
          <TextLogo>Money Guard</TextLogo>
        </WrapperLogo>
        <Form onSubmit={handleSubmit(submit)}>
          <InputWrapper>
            <UserIcon />
            <Input
              {...register('name')}
              type="text"
              name="name"
              placeholder="Name"
            />
          </InputWrapper>
          <InputWrapper>
            <EmailIcon />
            <Input
              {...register('email')}
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </InputWrapper>
          <InputWrapper>
            <LockIcon />
            <Input
              {...register('password')}
              type="password"
              name="password"
              placeholder="Password"
            />
          </InputWrapper>
          <InputWrapper>
            <LockIcon />
            <Input
              type="password"
              name="conf_password"
              placeholder="Confirm password"
            />
          </InputWrapper>
          <ButtonsDiv>
            <Button $gradient={true} type="submit">
              REGISTER
            </Button>
            <Button>LOG IN</Button>
          </ButtonsDiv>
        </Form>
      </WrapperForm>
    </WrapperReg>
  );
};

export default RegistrationForm;
