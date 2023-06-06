import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/App.layout';
import { ErrorLayout } from './layouts/Error.layout';
import App from './app/App';
import { NotFountLayout } from './layouts/NotFound.layout';
import { TransitionPage } from './views/TransitionPage';
import { TransitionGroupPage } from './views/transition-group';
import { LoadingPage } from './views/loading';
import { ButtonPage } from './views/button';
import { LayoutPage } from './views/LayoutPage';

export const baseRouter = [
  {
    name: 'transition',
    path: '/transition',
    element: <TransitionPage />,
  },
  {
    name: 'transition-group',
    path: '/transition-group',
    element: <TransitionGroupPage />,
  },
  {
    name: 'loading',
    path: '/loading',
    element: <LoadingPage />,
  },
  {
    name: 'button',
    path: '/button',
    element: <ButtonPage />,
  },
  {
    name: 'layout',
    path: '/layout',
    element: <LayoutPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      ...baseRouter,
    ],
  },
  {
    path: '*',
    element: <NotFountLayout />,
  },
]);
