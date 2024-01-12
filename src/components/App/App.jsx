import Layout from 'components/Layout/Layout';
import LoginForm from 'components/LoginForm/LoginForm';
import DashboardPage from 'pages/DashboardPage';

import RegistrationPage from 'pages/RegistrationPage';
import StatisticsTab from 'pages/StatisticsTab';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { refreshThunk } from 'store/Auth/thunk';
import Global from 'styles/global';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Global />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/statistics" element={<StatisticsTab />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
