// import Currency from 'components/Currency/Currency';
import Layout from 'components/Layout/Layout';
import DashboardPage from 'pages/DashboardPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import StatisticsTab from 'pages/StatisticsTab';
import { Route, Routes } from 'react-router';
import Global from 'styles/global';
// тест ввапапвапва
export const App = () => {
  return (
    <>
      <Global />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/statistics" element={<StatisticsTab />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        
      </Routes>
    </>
  );
};
