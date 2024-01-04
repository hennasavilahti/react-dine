import styles from './OrderSummaryListItem.module.css';

const OrderSummaryListItem = ({ item }) => {
  const { quantity, name, price } = item;

  return (
    <div className={styles.list_item}>
      <h4>{quantity} x</h4>
      <p>{name}</p>
      <h4>{(price * quantity).toFixed(2)} €</h4>
    </div>
  );
};

export default OrderSummaryListItem;
