import Layout from 'components/Layout/Layout';
import { Loader } from 'components/Loader/Loader';
import LoginForm from 'components/LoginForm/LoginForm';
import DashboardPage from 'pages/DashboardPage';

import RegistrationPage from 'pages/RegistrationPage';
import StatisticsTab from 'pages/StatisticsTab';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { refreshThunk } from 'store/Auth/thunk';
import { useSelector } from 'react-redux';

import { selectIsLoading } from 'store/Auth/selectors';
// import { isLoadingSelector } from 'store/currency/currencySelector';
import Global from 'styles/global';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Global />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/statistics" element={<StatisticsTab />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};
{
  /* <Global />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/statistics" element={<StatisticsTab />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      )} */
}
