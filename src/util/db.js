/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.MONGODB_PORT || 27017;
const HOST = process.env.MONGODB_HOST || 'localhost';
const db = process.env.MONGODB_URI || `mongodb://${HOST}:${PORT}/sikaDB`;
try {
  mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then().catch((err) => console.log(err));
  console.log('MongoDB is Connected...');
} catch (err) {
  console.error(err);
  process.exit(1);
}

const dbConnection = mongoose.connection;
export default dbConnection;
