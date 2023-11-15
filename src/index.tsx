import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Expenses from '@pages/Expenses/Expenses';
import { defaultTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <App/>
        {/*<Outlet />*/}
      </>,
    children:[
      {
        index: true,
        element: <Navigate to="/home" replace />, 
      },
      {
        path:'home',
        element:
          <>
            <Home/>
            <Outlet />
          </>,
      },
      {
        path:'expenses',
        element:
          <>
            <Expenses/>
            <Outlet />
          </>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Helmet>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
    </Helmet>
    <CssBaseline>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
