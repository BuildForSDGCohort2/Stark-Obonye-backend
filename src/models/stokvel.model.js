import mongoose from 'mongoose';

const { Schema } = mongoose;
const stokvelSchema = Schema({
  title: String,
  wallet: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet'
      },
      accountNumber: Number,
      address: String,
      privateKey: String,
      name: String,
      balance: Number
    }
  ],
  cause: String,
  members: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      firstName: String,
      lastName: String,
      mobilePhoneNumber: String,
      identityNumber: String
    }
  ],
  transaction: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
      },
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
    }
  ]
});

const Stokvel = mongoose.model('Stokvel', stokvelSchema);
export default Stokvel;
