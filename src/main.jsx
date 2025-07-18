import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './components/user/pages/Home/Home';
import ErrorPage from './components/layout/ErrorPage';
import OurProdctsDetails from './components/user/shared/OurProducts/OurProdctsDetails';
import PaymentGateway from './components/user/pages/PaymentGateway/PaymentGateway';



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
        path: "/productsDetails/:equipmentId",
        element: <OurProdctsDetails />,
      },
      {
        path: "/paymentGateway",
        element: <PaymentGateway />,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
