import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** remote connection */
/* const uri = "mongodb+srv://team_275:04tLXMQ4mmllwy2P@cluster0-dghpw.mongodb.net/test?retryWrites=true&w=majority"; */
/** localhost */
dotenv.config();
let uri = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  uri = process.env.DB_PATH_DEV;
} else {
  uri = process.env.DB_PATH_PROD;
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConnection = mongoose.connection;
export default dbConnection;
