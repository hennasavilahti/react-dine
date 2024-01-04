import { useState, useCallback, useEffect } from 'react';

import MenuItem from '../MenuItem/MenuItem';

import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(
        'https://react-dine-backend-3ukh.onrender.com/api/dishes'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error);
      console.error('Error: ', error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let content = <p>No menu data found</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (loading) {
    content = <p>Fetching menu... Please wait</p>;
  }

  if (products.length > 0) {
    content = (
      <ul className={styles.product_list}>
        {products.map((product) => (
          <li key={product.id}>
            <MenuItem product={product} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
};

export default ProductList;
