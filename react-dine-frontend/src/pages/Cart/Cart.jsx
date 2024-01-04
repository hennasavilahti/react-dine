import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CartContext } from '../../context/CartContext';

import CartItem from '../../components/CartItem/CartItem';

import styles from './Cart.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cartItems, clearCart, getCartTotal } = useContext(CartContext);

  const navigate = useNavigate();

  const notifyAllItemsRemoved = () =>
    toast.info('All items removed from cart', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  let content = <h2>Your cart is empty</h2>;

  if (cartItems.length > 0) {
    content = (
      <div>
        <ul className={styles.list}>
          {cartItems.map((item) => {
            return (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            );
          })}
        </ul>
        <div className={styles.total_container}>
          <h2 className={styles.total_amount}>
            Total: {getCartTotal().toFixed(2)}€
          </h2>
          <div className={styles.buttons_container}>
            <button
              className={styles.button}
              onClick={() => {
                notifyAllItemsRemoved();
                clearCart();
              }}
            >
              Remove all items
            </button>
            <button
              className={styles.button}
              onClick={() => navigate('/checkout')}
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cart_container}>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.content_container}>{content}</div>
    </div>
  );
};

export default Cart;
