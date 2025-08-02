const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const createUser = asyncHandler(async (req, res) => {
  const { name, email, age, role } = req.body;
  if (!name || !email || !age)
    return res.status(400).json({ message: 'All fields required' });

  const exists = await User.findOne({ email });
  if (exists)
    return res.status(400).json({ message: 'Email already exists' });

  const user = await User.create({ name, email, age, role });
  res.status(201).json(user);
});


const getUsers = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, role, minAge } = req.query;
  let filter = {};
  if (role) filter.role = role;
  if (minAge) filter.age = { $gte: Number(minAge) };

  const users = await User.find(filter)
    .sort({ age: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .select('name email age role');
  res.json(users);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  Object.assign(user, req.body);
  const updated = await user.save();
  res.json(updated);
});


const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted' });
});

module.exports = { createUser, getUsers, updateUser, deleteUser };
