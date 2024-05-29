import React from 'react';
import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../componet/layout/Layout';
import HomePage from '../page/HomePage';
import ProductPage from '../page/ProductPage';

// import CartPage from './pages/CartPage';
// import UserProfilePage from './pages/UserProfilePage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/HomePage" />,
//   },
//   {
//     path: "/ProductPage",
//     element: <ProductPage />,
//   },
//   {
//     path: "HomePage",
//     element: <HomePage />,
//   },
//   // {
//   //   path: "/purchase",
//   //   element: <PrivateRoute />,
//   //   children: [
//   //     {
//   //       index: true,
//   //       element: <CartPage />,
//   //     },
//   //     {
//   //       path: "checkout",
//   //       element: <CheckoutPage />,
//   //     },
//   //   ],
//   // },
// ]);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />}>
          {/* <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} /> */}
          {/* <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<UserProfilePage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};
function AppRoutes() {
  return <RouterProvider router={router} />;
}
export default AppRoutes;
