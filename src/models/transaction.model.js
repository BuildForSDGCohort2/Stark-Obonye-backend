import mongoose from 'mongoose';

const { Schema } = mongoose;

const transactionSchema = Schema({
  accountNumber: {
    type: Number,
    ref: 'Wallet'
  },
  fromWallet: {
    accountNumber: {
      type: Number,
      required: true
    },
    bankName: { type: String, required: true },
    privateKey: { type: String, required: true },
    reference: String
  },
  toWallet: {
    accountNumber: { type: Number, required: true },
    bankName: { type: String, required: true },
    privateKey: { type: String, required: true },
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
