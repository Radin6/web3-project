import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/home/home';
import Wallet from './pages/wallet/wallet';
//import { Test } from './pages/test/test';

const router = createBrowserRouter([
  {
    path: "/web3-project/",
    element: <Home />,
  },
  {
    path: "/web3-project/wallet",
    element: <Wallet />
  },
  // {
  //   path: "/test",
  //   element: <Test />
  // }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
