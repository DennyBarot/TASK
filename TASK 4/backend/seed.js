const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/mernlogin');

async function createTestUser() {
  const hash = await bcrypt.hash('password123', 10);
  await User.create({
    username: 'testuser',
    email: 'test@example.com',
    password: hash
  });
  console.log('Test user created!');
  mongoose.disconnect();
}
createTestUser();
