import React,{useState} from 'react';
import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PrivateRoute from './PrivateRoutes';

import Layout from '../componet/layout/Layout';
import HomePage from '../page/HomePage';
import ProductPage from '../page/ProductPage';
import ProductDetailsPage from '../page/ProductDetailsPage';
import CartPage from '../page/CartPage';



function AppRoutes() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
         children: [
        {
          index: true,
          element: <ProductPage addToCart={addToCart} />,
        },
        {
          path: "/details/:id",
          element: <ProductDetailsPage addToCart={addToCart} />,
        },
        {
          path: "/Procducts",
          element: <ProductPage addToCart={addToCart} />,
        },
        {
          path:"/Home",
          element:<HomePage />
  
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute 
            element={<CartPage cart={cart}/>}
            redirectTo="/Procducts"
            />
          )
        }
      ],
    },
  
  ]);
  return <RouterProvider router={router} />;
}
export default AppRoutes;
