import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/wallet',
    element: <Wallet/>,
  },
],
{
  basename: '/',
},
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
