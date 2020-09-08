import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** remote connection */
// const uri = 'mongodb+srv://team33H:T3@m33h2020@cluster0.dghpw.mongodb.net/test?retryWrites=true&w=majority';
/** localhost */
dotenv.config();
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   uri = process.env.DB_PATH_DEV;
// } else {
//   uri = process.env.DB_PATH_PROD;
// }

mongoose.connect(
  process.env.MONGODB_URI || process.env.DB_PATH_DEV,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const dbConnection = mongoose.connection;
export default dbConnection;
