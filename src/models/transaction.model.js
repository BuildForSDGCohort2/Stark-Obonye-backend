import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = Schema({
  fromWallet: {
    accountNumber: Number,
    bankName: { type: String, required: true },
    privateKey: { type: String, required: true },
    name: String
  },
  toWallet: {
    accountNumber: Number,
    bankName: { type: String, required: true },
    privateKey: { type: String, required: true },
    name: String
  },
  date: Date,
  value: Number,
  status: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
