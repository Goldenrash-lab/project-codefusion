import React, { useState } from 'react';
import {
  Button,
  ButtonsDiv,
  ErrorText,
  Eye,
  Form,
  Input,
  PasswordStrengthBarStyle,
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
import { useMediaQuery } from 'react-responsive';
import SvgEye from 'images/Register/Eye';
import SvgNoEye from 'images/Register/NoEye';

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
      .min(6, 'Password must be at least 6 characters')
      .max(15)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        "Passwords don't match, please try again."
      )
      .min(6, 'Password must be at least 6 characters')
      .required('Confirm password is required'),
  })
  .required();

const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(false);
  const mobileQuery = useMediaQuery({ query: '(max-width:555px)' });
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

  function toggleEye() {
    if (!eye) {
      setEye(true);
    } else {
      setEye(false);
    }
  }

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

  if (user) {
    return <Navigate to={'/'} />;
  }
  const isEye = !eye ? { type: 'password' } : { type: 'text' };

  return (
    <WrapperReg>
      <WrapperForm>
        <TestDiv />
        <WrapperLogo>
          <div>{!mobileQuery ? <Logo width="36" height="36" /> : <Logo />}</div>
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
              {...isEye}
              name="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <Eye type="button" onClick={toggleEye}>
              {!eye ? <SvgNoEye /> : <SvgEye />}
            </Eye>
            <ErrorText>{errors.password?.message}</ErrorText>
          </InputWrapper>
          <InputWrapper>
            <LockIcon />
            <Input
              {...register('confirmPassword')}
              {...isEye}
              name="confirmPassword"
              placeholder="Confirm password"
            />
            {/* <Eye type="button" onClick={toggleEye}>
              {!eye ? <SvgNoEye /> : <SvgEye />}
            </Eye> */}
            <PasswordStrengthBarStyle password={password} minLength={6} />
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
