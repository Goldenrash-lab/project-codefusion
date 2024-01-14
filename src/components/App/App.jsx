import Layout from 'components/Layout/Layout';
import LoginForm from 'components/LoginForm/LoginForm';
import DashboardPage from 'pages/DashboardPage';
import ModalEditTransactions from 'components/ModalEditTransaction/ModalEditTransaction';
import RegistrationPage from 'pages/RegistrationPage';
import StatisticsTab from 'pages/StatisticsTab';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { refreshThunk } from 'store/Auth/thunk';
import { Loader } from 'components/Loader/Loader';
import CurrencyTab from 'pages/CurrencyTab';

import Global from 'styles/global';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

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
        <Route path="/edit" element={<ModalEditTransactions />} />
      </Routes>
    </>
  );
};
