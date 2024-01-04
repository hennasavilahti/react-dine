import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation/MainNavigation.jsx';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Outlet />
    </>
  );
};

export default RootLayout;
