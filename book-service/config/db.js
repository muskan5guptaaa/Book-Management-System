const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for Auth Service');
  } catch (error) {
    console.error('DB Connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
