import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import OrderSummaryList from '../../components/OrderSummaryList/OrderSummaryList';

import styles from './Checkout.module.css';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  let content = <h2>Your cart is empty</h2>;

  if (cartItems.length > 0) {
    content = (
      <>
        <OrderSummaryList />
        <CheckoutForm />
      </>
    );
  }

  return (
    <div className={styles.checkout_container}>
      <h1>Checkout</h1>
      <div>{content}</div>
    </div>
  );
};

export default Checkout;
