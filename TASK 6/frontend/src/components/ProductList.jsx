import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAdd }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {products.map(product => (
      <ProductCard key={product._id} product={product} onAdd={onAdd} />
    ))}
  </div>
);

export default ProductList;
