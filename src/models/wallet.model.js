import mongoose from 'mongoose';

const { Schema } = mongoose;
const walletSchema = Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  accountNumber: Number,
  address: String,
  privateKey: String,
  name: String,
  balance: Number
});

const Wallet = mongoose.Model('Wallet', walletSchema);
export default Wallet;
