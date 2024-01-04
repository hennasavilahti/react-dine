import { useContext } from 'react';
import { toast } from 'react-toastify';

import { CartContext } from '../../context/CartContext';

import styles from './CartItem.module.css';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item }) => {
  const { name, price, quantity, description } = item;

  const { addToCart, removeFromCart, removeAllFromCart } =
    useContext(CartContext);

  const notifyItemRemoved = () =>
    toast.info(`${name} removed from cart`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  return (
    <div className={styles.list_item}>
      <div className={styles.title}>
        <h2>{name}</h2>
        <h2>{(price * quantity).toFixed(2)} €</h2>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.button_divs_container}>
        <div className={styles.quantity_buttons}>
          <button className={styles.button} onClick={() => addToCart(item)}>
            ➕
          </button>
          <p className={styles.quantity}>{quantity}</p>
          <button
            className={styles.button}
            onClick={() => removeFromCart(item)}
          >
            ➖
          </button>
        </div>
        <div className={styles.remove_button}>
          <button
            className={styles.button}
            onClick={() => {
              removeAllFromCart(item);
              notifyItemRemoved();
            }}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
