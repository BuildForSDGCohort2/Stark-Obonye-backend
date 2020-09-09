/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** remote connection */
// const uri = ;
/** localhost */
dotenv.config();
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   uri = process.env.DB_PATH_DEV;
// } else {
//   uri = process.env.DB_PATH_PROD;
// }

const test = process.env.TEST_KEY;

const db = 'mongodb+srv://team33H:T3@m33h2020@cluster0.dghpw.mongodb.net/sikaDB?retryWrites=true&w=majority';
try {
  mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log(`MongoDB is Connected...${test}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}

const dbConnection = mongoose.connection;
export default dbConnection;
