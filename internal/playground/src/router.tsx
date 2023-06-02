import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/App.layout';
import { ErrorLayout } from './layouts/Error.layout';
import App from './app/App';
import { NotFountLayout } from './layouts/NotFound.layout';
import { TransitionPage } from './views/TransitionPage';
import { TransitionGroupPage } from './views/transition-group';

const router = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/transition',
        element: <TransitionPage />,
      },
      {
        path: '/transition-group',
        element: <TransitionGroupPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFountLayout />,
  },
]);

export default router;
