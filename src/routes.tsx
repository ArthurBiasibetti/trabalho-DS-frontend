import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  LoginPage,
  HomePage,
  AdminRoomPage,
  InvListPage,
  ReadcodePage,
  InvItemPage,
} from './pages';
import { ServidorRoomPage } from './pages/ServidorRoom';

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
    path: 'admin/room',
    element: <AdminRoomPage />,
  },
  {
    path: 'servidor/room',
    element: <ServidorRoomPage />,
  },
  {
    path: '/readcode',
    element: <ReadcodePage />,
  },
  {
    path: '/invlist',
    element: <InvListPage />,
  },
  {
    path: '/invitem',
    element: <InvItemPage />,
  },
]);
