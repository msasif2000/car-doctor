import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Provider/AuthProvider';
import About from './Pages/About';
import Services from './Pages/Services';
import CheckOut from './Pages/CheckOut/CheckOut';
import Bookings from './Pages/Bookings/Bookings';
import PrivateRoute from './Provider/PrivateRoute/PrivateRoute';
import ErrorPage from './Pages/ErrorPage';
import axios from 'axios';

axios.defaults.withCredentials = true;


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/myBookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)