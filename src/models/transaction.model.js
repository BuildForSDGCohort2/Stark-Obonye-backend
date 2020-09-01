import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = Schema({
  fromWallet: {
    address: String,
    privateKey: String,
    name: String
  },
  toWallet: {
    address: String,
    privateKey: String,
    name: String
  },
  date: Date,
  value: Number,
  status: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
