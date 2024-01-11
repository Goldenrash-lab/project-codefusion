import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
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
import { signInThunk } from 'store/Auth/thunk';

import EmailLogo from '../../images/Login/EmailLogo';
import PasswordLogo from '../../images/Login/PasswordLogo';
import LoginLogo from '../../images/Login/LoginLogo';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const location = useLocation();

  function submit(data) {
    console.log(data);
    dispatch(signInThunk(data))
      .then(() => {
        console.log("You're logged in!");
      })
      .catch(() => console.log('Something went wrong!'));
  }

  const isAuthenticated = useSelector(state => !!state.auth.user);

  if (isAuthenticated) {
    return <Navigate to={location.state?.from || '/Home'} />;
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
