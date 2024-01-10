import Layout from 'components/Layout/Layout';
import DashboardPage from 'pages/DashboardPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import { Route, Routes } from 'react-router';
import Global from 'styles/global';

export const App = () => {
  return (
    <>
      <Global />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />}>
            <Route path="/statistics" element={<RegistrationPage />} />
          </Route>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
