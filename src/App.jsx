import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layuot } from 'components/Layout/Layout';

// const Home = lazy(() => import('./pages/Home'));
const Tweets = lazy(() => import('./pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layuot />}>
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
};
