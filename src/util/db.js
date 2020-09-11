/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const { MongoClient } = require('mongodb');

const PORT = process.env.MONGODB_PORT || 27017;
const HOST = process.env.MONGODB_HOST || 'localhost';

dotenv.config();

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
// async function main() {
//   const client = new MongoClient(db, {
//     useUnifiedTopology: true
//   });
//   try {
//     await client.connect();
//     await client
//       .db()
//       .collection('exampleCollection')
//       .insertOne({
//         someKey: 'someVal'
//       });
//     const result = await client
//       .db()
//       .collection('exampleCollection')
//       .findOne({});
//     console.log(JSON.stringify(result));
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);
const dbConnection = mongoose.connection;
export default dbConnection;
