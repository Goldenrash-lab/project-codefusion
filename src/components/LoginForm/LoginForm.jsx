import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  InputDiv,
  LoginButton,
  LoginDiv,
  LoginDivButton,
  LoginDivForm,
  LoginDivLogo,
  LoginFormContainer,
  LoginFormDivGradient,
  LoginInput,
  LoginNavLink,
  LoginNavLinkSpan,
  LoginSpanLogo,
  LoginTextError,
} from './LoginFormStyded';
import { loginThunk } from 'store/Auth/thunk';

import EmailLogo from '../../images/Login/EmailLogo';
import PasswordLogo from '../../images/Login/PasswordLogo';
import LoginLogo from '../../images/Login/LoginLogo';
import { Navigate } from 'react-router-dom';
import { ErrorText } from 'components/RegistrationForm/RegistrationForm.styled';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please write valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(25)
      .required('Password is required'),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        toast.success("You're logged in!");
      })
      .catch(() => toast.error('Something went wrong!'));
  }

  const isAuthenticated = useSelector(state => state.auth.user);

  if (isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return (
    <LoginDiv>
      <LoginDivForm>
        <LoginFormDivGradient></LoginFormDivGradient>
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
              placeholder="E-mail"
            />
            <LoginTextError>{errors.email?.message}</LoginTextError>
          </InputDiv>
          <InputDiv>
            <PasswordLogo />
            <LoginInput
              {...register('password')}
              type="password"
              name="password"
              placeholder="Password"
            />
            <LoginTextError>{errors.password?.message || ''}</LoginTextError>
          </InputDiv>
          <LoginDivButton>
            <LoginButton type="submit">log in</LoginButton>
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
