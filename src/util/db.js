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

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://team33H:t3@m33h2020@cluster0.dghpw.mongodb.net/sikaDB?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
client.connect((err) => {
  const collection = client.db('sikaDB').collection('users');
  // perform actions on the collection object
  // eslint-disable-next-line no-console
  console.log(collection, err);
  client.close();
});

const dbConnection = mongoose.connection;
export default dbConnection;
