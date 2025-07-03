import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './components/user/pages/Home/Home';
import Cart from './components/user/pages/Cart/Cart';
import ErrorPage from './components/layout/ErrorPage';
import OurProdctsDetails from './components/user/shared/OurProducts/OurProdctsDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/productsDetails/:equipmentId",
        element: <OurProdctsDetails />,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
