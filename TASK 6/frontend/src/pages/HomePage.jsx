import React, { useEffect, useState } from 'react';
import { fetchProducts, addToCart } from '../services/api';
import ProductList from '../components/ProductList';

const HomePage = ({ refreshCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  const handleAdd = product => {
    addToCart(product._id, 1).then(refreshCart);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl mb-3">Products</h2>
      <ProductList products={products} onAdd={handleAdd} />
    </div>
  );
};

export default HomePage;
