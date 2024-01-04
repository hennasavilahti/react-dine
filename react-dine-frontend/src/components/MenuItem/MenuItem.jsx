import { useContext } from 'react';
import { toast } from 'react-toastify';

import { CartContext } from '../../context/CartContext';

import styles from './MenuItem.module.css';
import 'react-toastify/dist/ReactToastify.css';

const MenuItem = ({ product }) => {
  const { image, name, price, description } = product;

  const { addToCart } = useContext(CartContext);

  const notifyItemAdded = () =>
    toast.success(`${name} added to cart!`, {
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
      <div>
        <img
          className={styles.image}
          src={`https://react-dine-backend-3ukh.onrender.com/${image}`}
        ></img>
      </div>

      <div>
        <h2>{name}</h2>
        <h3 className={styles.price}>{price} €</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div>
        <button
          onClick={() => {
            addToCart(product);
            notifyItemAdded();
          }}
          className={styles.button}
        >
          ➕ Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
