import Layout from 'components/Layout/Layout';
import LoginForm from 'components/LoginForm/LoginForm';
import DashboardPage from 'pages/DashboardPage';
import RegistrationPage from 'pages/RegistrationPage';
import StatisticsTab from 'pages/StatisticsTab';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { refreshThunk } from 'store/Auth/thunk';
import { Loader } from 'components/Loader/Loader';
import CurrencyTab from 'pages/CurrencyTab';

import Global from 'styles/global';
import { currencyThunk } from 'store/currency/currencyThunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // currency useEffect
  useEffect(() => {
    const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');

    const isHourPassed = () => {
      const ONE_HOUR_IN_MS = 60 * 60 * 1000;
      return Date.now() - Number(lastUpdatedTime) >= ONE_HOUR_IN_MS;
    };

    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(currencyThunk());
      const newTime = Date.now();
      localStorage.setItem('lastUpdatedTime', newTime);
    }
  }, [dispatch]);
  //
  const loading = useSelector(state => state.loader.loading);

  return (
    <>
      <Global />
      {loading && <Loader />}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/statistics" element={<StatisticsTab />} />
          <Route path="/currency" element={<CurrencyTab />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
