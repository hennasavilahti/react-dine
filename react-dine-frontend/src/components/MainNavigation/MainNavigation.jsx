import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo_image} src="/logo.png"></img>
        <nav>
          <ul>
            <li>
              <Link to="/">MENU</Link>
            </li>
            <li>
              <Link to="/cart">CART</Link>
            </li>
            <li>
              <Link to="/checkout">CHECKOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
