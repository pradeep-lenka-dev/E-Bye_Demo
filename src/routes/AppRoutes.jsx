import React from 'react';
import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PrivateRoute from './PrivateRoutes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../componet/layout/Layout';
import HomePage from '../page/HomePage';
import ProductPage from '../page/ProductPage';
import ProductDetailsPage from '../page/ProductDetailsPage';
import CartPage from '../page/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
       children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "/details/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/Procducts",
        element: <ProductPage />,
      },
      {
        path:"/Home",
        element:<HomePage />

      },
      {
        path: "/cart",
        element: (
          <PrivateRoute 
          element={<CartPage/>}
          redirectTo="/Procducts"
          />
        )
      }
    ],
  },

]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}
export default AppRoutes;
