import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';

import { CartContext } from '../../context/CartContext.jsx';

import OrderSummaryList from '../OrderSummaryList/OrderSummaryList.jsx';

import styles from './OrderConfirmationModal.module.css';

const OrderConfirmationModal = ({ isOpen }) => {
  ReactModal.setAppElement('#root');

  const navigate = useNavigate();

  const { clearCart } = useContext(CartContext);

  const customStyles = {
    content: {
      width: '50%',
      height: '30rem',
      margin: 'auto',
    },
  };

  return (
    <div>
      <ReactModal
        style={customStyles}
        isOpen={isOpen}
        closeTimeoutMS={10000}
        onAfterClose={() => {
          clearCart();
          navigate('/');
        }}
        shouldCloseOnEsc={true}
      >
        <div className={styles.modal}>
          <h1 className={styles.title}>Order was placed successfully! ✅</h1>
          <div>
            <h3 className={styles.label}>Order summary:</h3>
            <OrderSummaryList />
          </div>
          <h3 className={styles.label}>
            Returning back to menu in 10 seconds...
          </h3>
        </div>
      </ReactModal>
    </div>
  );
};

export default OrderConfirmationModal;
