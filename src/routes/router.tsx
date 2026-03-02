import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router';
import paths, { rootPaths } from './paths';

import MainLayout from 'layouts/main-layout';
import ResetPassword from 'pages/authentication/ResetPassword';
import Signin from 'pages/authentication/Signin';
import Signup from 'pages/authentication/Signup';
import AuthLayout from 'layouts/auth-layout';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/Dashboard'));

const routes = [
  {
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: paths.signin,
            element: (
              <AuthLayout>
                <Signin />
              </AuthLayout>
            ),
          },
          {
            path: paths.signup,
            element: (
              <AuthLayout>
                <Signup />
              </AuthLayout>
            ),
          },
          {
            path: paths.resetPassword,
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: '*',
        element: <h1>404 Not Found!</h1>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/base' });

export default router;
