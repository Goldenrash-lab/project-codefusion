// import Currency from 'components/Currency/Currency';
import Layout from 'components/Layout/Layout';
import LoginForm from 'components/LoginForm/LoginForm';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import DashboardPage from 'pages/DashboardPage';

import RegistrationPage from 'pages/RegistrationPage';
import StatisticsTab from 'pages/StatisticsTab';
import { Route, Routes } from 'react-router';
import Global from 'styles/global';

export const App = () => {
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
        
      </Routes>
      <ModalAddTransactions></ModalAddTransactions>
    </>
  );
};
