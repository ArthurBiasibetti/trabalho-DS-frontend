import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, HomePage, RoomPage, InvListPage, ReadcodePage, InvItemPage } from './pages';

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
  }
]);
