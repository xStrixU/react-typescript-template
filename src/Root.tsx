import { Route, Routes } from 'react-router-dom';

import { AuthPage } from 'pages/AuthPage/AuthPage';
import { MainView } from 'views/MainView';

export const Root = () => (
  <Routes>
    <Route path="/*" element={<MainView />} />
    <Route path="/login" element={<AuthPage />} />
  </Routes>
);
