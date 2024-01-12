import React, { useEffect } from 'react';
import {
  Button,
  ButtonsDiv,
  ErrorText,
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
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'store/Auth/thunk';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { selectUser } from 'store/Auth/selectors';

const schema = yup
  .object({
    username: yup
      .string()
      .min(4, 'Name must be at least 4 characters')
      .required('Name is required'),
    email: yup
      .string()
      .email('Please write valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(25)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        "Passwords don't match, please try again."
      )
      .min(8, 'Password must be at least 8 characters')
      .required('Confirm password is required'),
  })
  .required();

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  function submit({ username, email, password }) {
    const user = {
      username,
      email,
      password,
    };

    dispatch(registerThunk(user))
      .unwrap()
      .then(() => {
        navigate('/');
        toast.success('Welcome!');
      })
      .catch(err => {
        toast.error(err);
      });
  }
  function handleClick() {
    navigate('/login');
  }

  const user = useSelector(selectUser);
  console.log(user);
  if (user) {
    return <Navigate to={'/'} />;
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
              {...register('username')}
              type="text"
              // name="username"
              placeholder="Name"
            />
            <ErrorText>{errors.username?.message}</ErrorText>
          </InputWrapper>
          <InputWrapper>
            <EmailIcon />
            <Input
              {...register('email')}
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <ErrorText>{errors.email?.message}</ErrorText>
          </InputWrapper>
          <InputWrapper>
            <LockIcon />
            <Input
              {...register('password')}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorText>{errors.password?.message}</ErrorText>
          </InputWrapper>
          <InputWrapper>
            <LockIcon />
            <Input
              {...register('confirmPassword')}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <ErrorText>{errors.confirmPassword?.message}</ErrorText>
          </InputWrapper>
          <ButtonsDiv>
            <Button $gradient={true} type="submit">
              REGISTER
            </Button>
            <Button onClick={handleClick}>LOG IN</Button>
          </ButtonsDiv>
        </Form>
      </WrapperForm>
    </WrapperReg>
  );
};

export default RegistrationForm;
