import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const routes = createBrowserRouter([{
  path: '/',
  element: <div>Home</div>
},{
  path: '/login',
  element: <div>Login</div>
}]);

