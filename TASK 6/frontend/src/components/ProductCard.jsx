import React from 'react';

const ProductCard = ({ product, onAdd }) => (
  <div className="bg-white rounded shadow-md p-4 flex flex-col items-center">
    <img src={product.image} alt={product.name} className="h-32 object-contain mb-2" />
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-gray-700">${product.price}</p>
    <button
      onClick={() => onAdd(product)}
      className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
