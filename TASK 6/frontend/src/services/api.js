import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchProducts = () => axios.get(`${API_BASE}/items`);
export const fetchCart = () => axios.get(`${API_BASE}/cart`);
export const addToCart = (productId, quantity) => axios.post(`${API_BASE}/cart`, { productId, quantity });
export const updateCartItem = (id, quantity) => axios.put(`${API_BASE}/cart/${id}`, { quantity });
export const deleteCartItem = id => axios.delete(`${API_BASE}/cart/${id}`);
