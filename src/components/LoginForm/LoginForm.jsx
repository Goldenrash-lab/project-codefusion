import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Eye,
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
import SvgNoEye from 'images/Login/NoEye';
import SvgEye from 'images/Login/Eye';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please write valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(15)
      .required('Password is required'),
  })
  .required();

const LoginForm = () => {
  const [eye, setEye] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  function toggleEye() {
    if (!eye) {
      setEye(true);
    } else {
      setEye(false);
    }
  }

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

  const isEye = !eye ? { type: 'password' } : { type: 'text' };

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
              {...isEye}
              // type="password"
              name="password"
              placeholder="Password"
            />
            <Eye type="button" onClick={toggleEye}>
              {!eye ? <SvgNoEye /> : <SvgEye />}
            </Eye>
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
