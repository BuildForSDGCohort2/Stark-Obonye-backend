import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = Schema({
  accountNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wallet'
  },
  fromWallet: {
    accountNumber: mongoose.Schema.Types.ObjectId,
    bankName: { type: String, required: true },
    privateKey: { type: String, required: true },
    name: String
  },
  toWallet: {
    accountNumber: mongoose.Schema.Types.ObjectId,
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
