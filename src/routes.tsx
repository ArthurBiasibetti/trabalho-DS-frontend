import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, HomePage, CheckListPage } from './pages';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/check-list',
    element: <CheckListPage />,
  },
]);
