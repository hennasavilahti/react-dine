import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';

import OrderConfirmationModal from '../OrderConfirmationModal/OrderConfirmationModal';

import styles from './CheckoutForm.module.css';

const CheckoutForm = () => {
  const { cartItems } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setShowModal(false);
  }, [showModal]);

  const onSubmit = async (data) => {
    const order = {
      order: {
        customer: {
          name: data.name,
          email: data.email,
          street: data.street,
          'postal-code': data.postal_code,
          city: data.city,
          'special-instructions': data.special_instructions,
        },
        items: cartItems.map((item) => {
          return {
            id: item.id,
            quantity: item.quantity,
          };
        }),
      },
    };

    try {
      const response = await fetch(
        'https://react-dine-backend-3ukh.onrender.com/api/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        }
      );

      if (!response.ok) {
        throw new Error('Error posting data');
      }

      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Contact Info</label>
            {errors.name && (
              <span className={styles.error_message}>Name is required!</span>
            )}
            <input
              placeholder="Name"
              {...register('name', { required: true })}
            />

            {errors.email && (
              <span className={styles.error_message}>Email is required!</span>
            )}
            <input
              placeholder="Email"
              {...register('email', { required: true })}
            />

            {errors.street && (
              <span className={styles.error_message}>Street is required!</span>
            )}
            <input
              placeholder="Street"
              {...register('street', { required: true })}
            />

            {errors.postal_code && (
              <span className={styles.error_message}>
                Postal Code is required!
              </span>
            )}
            <input
              placeholder="Postal Code"
              {...register('postal_code', { required: true })}
            />

            {errors.city && (
              <span className={styles.error_message}>City is required!</span>
            )}
            <input
              placeholder="City"
              {...register('city', { required: true })}
            />
          </div>

          <textarea
            placeholder="Special Instructions"
            {...register('special_instructions')}
          />
          <div className={styles.button_container}>
            <button className={styles.button} type="submit">
              Confirm Order
            </button>
          </div>
        </form>
        <OrderConfirmationModal isOpen={showModal} />
      </div>
    </>
  );
};

export default CheckoutForm;
