import { lazy } from 'react';

// const Home = lazy(() => import('./pages/Home'));
const Tweets = lazy(() => import('./pages/Tweets'));

export const App = () => {
  return (
    <div>
      <Tweets />
    </div>
  );
};
