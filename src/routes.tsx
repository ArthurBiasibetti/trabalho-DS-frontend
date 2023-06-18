import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, HomePage } from './pages';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
