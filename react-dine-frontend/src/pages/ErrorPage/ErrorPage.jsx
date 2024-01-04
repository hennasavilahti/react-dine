import { useNavigate } from 'react-router-dom';

import MainNavigation from '../../components/MainNavigation/MainNavigation.jsx';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainNavigation />
      <div className={styles.error_container}>
        <h1 className={styles.error_title}>Page not found!</h1>
        <button className={styles.button} onClick={() => navigate('/')}>
          Go back to menu
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
