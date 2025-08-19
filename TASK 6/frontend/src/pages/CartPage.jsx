import React from 'react';
import { updateCartItem, deleteCartItem } from '../services/api';
import CartItem from '../components/CartItem';

const CartPage = ({ cart, refreshCart }) => {
  const items = cart?.items || [];
  const total = items.reduce(
    (sum, item) => sum + (item.productId?.price || 0) * item.quantity,
    0
  );

  const handleUpdate = (id, qty) => {
    updateCartItem(id, qty).then(refreshCart);
  };

  const handleRemove = id => {
    deleteCartItem(id).then(refreshCart);
  };

  return (
    <div className="container mx-auto max-w-lg">
      <h2 className="text-xl mb-4">Your Cart</h2>
      {items.length ? (
        <>
          {items.map(item => (
            <CartItem key={item._id} item={item} onUpdate={handleUpdate} onRemove={handleRemove} />
          ))}
          <div className="mt-4 text-right font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
