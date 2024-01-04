import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import OrderSummaryListItem from '../OrderSummaryListItem/OrderSummaryListItem';

import styles from './OrderSummaryList.module.css';

const OrderSummaryList = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);

  return (
    <>
      <ul className={styles.summary_list}>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <OrderSummaryListItem item={item} />
            </li>
          );
        })}
      </ul>
      <h4>Total: {getCartTotal().toFixed(2)}€</h4>
    </>
  );
};

export default OrderSummaryList;
