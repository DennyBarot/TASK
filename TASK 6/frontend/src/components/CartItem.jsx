import React from 'react';

const CartItem = ({ item, onUpdate, onRemove }) => (
  <div className="flex items-center justify-between p-2 border rounded mb-2 bg-white">
    <div className="flex items-center">
      <img src={item.productId?.image} alt={item.productId?.name} className="h-12 w-12 object-contain mr-3" />
      <div>
        <h4>{item.productId?.name}</h4>
        <p className="text-gray-500">${item.productId?.price}</p>
      </div>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => onUpdate(item._id, Math.max(1, item.quantity - 1))}
        className="px-2"
        disabled={item.quantity <= 1}
      >-</button>
      <span className="mx-2">{item.quantity}</span>
      <button
        onClick={() => onUpdate(item._id, item.quantity + 1)}
        className="px-2"
      >+</button>
      <button
        onClick={() => onRemove(item._id)}
        className="ml-2 px-2 text-red-600 font-bold"
      >x</button>
    </div>
  </div>
);

export default CartItem;
