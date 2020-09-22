import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = Schema({
  accountNumber: {
    type: String,
    ref: 'Wallet'
  },
  fromWallet: {
    accountNumber: {
      type: String,
      required: true
    },
    bankName: { type: String, required: true },
    reference: String
  },
  toWallet: {
    accountNumber: { type: String, required: true },
    bankName: { type: String, required: true },
    reference: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  amount: Number,
  status: String
});

const WalletTransactions = mongoose.model('WalletTransaction', transactionSchema);
export default WalletTransactions;
