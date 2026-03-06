import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router';
import paths, { rootPaths } from './paths';

import MainLayout from 'layouts/main-layout';
import ResetPassword from 'pages/authentication/ResetPassword';
import Signin from 'pages/authentication/Signin';
import Signup from 'pages/authentication/Signup';
import AuthLayout from 'layouts/auth-layout';

import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';
import Error404 from 'pages/Error404';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/Dashboard'));

const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
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
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        ),
        children: [
          {
            path: paths.signin,
            element: <Signin />,
          },
          {
            path: paths.signup,
            element: <Signup />,
          },
          {
            path: paths.resetPassword,
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/base' });

export default router;
