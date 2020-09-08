import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** remote connection */
// const uri = 'mongodb+srv://team33H:T3@m33h2020@cluster0.dghpw.mongodb.net/sikaDB?retryWrites=true&w=majority';
/** localhost */
dotenv.config();
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   uri = process.env.DB_PATH_DEV;
// } else {
//   uri = process.env.DB_PATH_PROD;
// }

const db = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(
      db || process.env.DB_PATH_DEV,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

const dbConnection = mongoose.connection;
export default dbConnection;
