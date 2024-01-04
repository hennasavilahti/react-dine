import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CartProvider } from './context/CartContext.jsx';

import Menu from './pages/Menu.jsx';
import Cart from './pages/Cart/Cart.jsx';
import RootLayout from './pages/RootLayout.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Menu /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
};

export default App;
