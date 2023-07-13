import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, HomePage, RoomPage, BarcodePage, InvListPage } from './pages';

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
    path: '/room',
    element: <RoomPage />,
  },
  {
    path: '/barcode',
    element: <BarcodePage />,
  },
  {
    path: '/invlist',
    element: <InvListPage />,
  }
]);
