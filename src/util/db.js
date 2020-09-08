import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** remote connection */
// const uri = ;
/** localhost */
dotenv.config();
let uri = 'mongodb+srv://team33H:T3@m33h2020@cluster0.dghpw.mongodb.net/sikaDB?retryWrites=true&w=majority';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  uri = process.env.DB_PATH_DEV;
} else {
  uri = 'mongodb+srv://team33H:T3@m33h2020@cluster0.dghpw.mongodb.net/sikaDB?retryWrites=true&w=majority';
}

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const dbConnection = mongoose.connection;
export default dbConnection;
