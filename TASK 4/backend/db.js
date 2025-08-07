const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/mernlogin';
// Change above to your MongoDB Atlas string if needed

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
