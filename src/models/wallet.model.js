import mongoose from 'mongoose';

const { Schema } = mongoose;
const walletSchema = Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    ref: 'User'
  },
  lastName: {
    type: String,
    required: true,
    ref: 'User'
  },
  balance: {
    type: Number,
    required: true
  }
});

const Wallet = mongoose.model('Wallet', walletSchema);
export default Wallet;
