import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layuot = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
