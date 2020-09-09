/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sikaDB';
try {
  mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('MongoDB is Connected...');
} catch (err) {
  console.error(err);
  process.exit(1);
}

const dbConnection = mongoose.connection;
export default dbConnection;
