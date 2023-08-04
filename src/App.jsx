import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layuot } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Tweets = lazy(() => import('./pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layuot />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
