const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async () => {
  // Only supports one cart (first found/created)
  let cart = await Cart.findOne();
  if (!cart) cart = await Cart.create({ items: [] });
  return cart;
};

exports.getCart = async (req, res) => {
  try {
    const cart = await getCart();
    await cart.populate('items.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await getCart();
    const existing = cart.items.find(item => item.productId.equals(productId));
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    await cart.save();
    await cart.populate('items.productId');
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const cart = await getCart();
    const item = cart.items.id(id);
    if (!item) return res.status(404).json({ error: 'Cart item not found' });
    item.quantity = quantity;
    await cart.save();
    await cart.populate('items.productId');
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await getCart();

    // Find the index of the item to remove
    const itemIndex = cart.items.findIndex(item => item._id.toString() === id);

    if (itemIndex > -1) {
      // Remove the item from the array
      cart.items.splice(itemIndex, 1);
      await cart.save();
      await cart.populate('items.productId');
      res.json(cart);
    } else {
      // If item not found, return 404
      res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
