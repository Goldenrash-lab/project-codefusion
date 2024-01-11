import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import {
  InputDiv,
  LoginButton,
  LoginDiv,
  LoginDivButton,
  LoginDivForm,
  LoginDivLogo,
  LoginFormContainer,
  LoginInput,
  LoginNavLink,
  LoginNavLinkSpan,
  LoginSpanLogo,
} from './LoginFormStyded';
import { loginThunk } from 'store/Auth/thunk';

import EmailLogo from '../../images/Login/EmailLogo';
import PasswordLogo from '../../images/Login/PasswordLogo';
import LoginLogo from '../../images/Login/LoginLogo';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    console.log(data);
    dispatch(loginThunk(data))
      .then(() => {
        console.log("You're logged in!");
      })
      .catch(() => console.log('Something went wrong!'));
  }

  return (
    <LoginDiv>
      <LoginDivForm>
        <LoginFormContainer onSubmit={handleSubmit(submit)}>
          <LoginDivLogo>
            <LoginLogo />
            <LoginSpanLogo>Money Guard</LoginSpanLogo>
          </LoginDivLogo>
          <InputDiv>
            <EmailLogo />
            <LoginInput
              {...register('email')}
              type="email"
              name="email"
              placeholder="Email"
            />
          </InputDiv>
          <InputDiv>
            <PasswordLogo />
            <LoginInput
              {...register('password')}
              type="password"
              name="password"
              placeholder="Password"
            />
          </InputDiv>
          <LoginDivButton>
            <LoginButton>log in</LoginButton>
            <LoginNavLink to="/register">
              <LoginNavLinkSpan>Register</LoginNavLinkSpan>
            </LoginNavLink>
          </LoginDivButton>
        </LoginFormContainer>
      </LoginDivForm>
    </LoginDiv>
  );
};

export default LoginForm;
