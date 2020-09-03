import mongoose from 'mongoose';

const { Schema } = mongoose;
const stokvelSchema = Schema({
  wallet: [
    {
      accountNumber: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Wallet'
      },
      balance: {
        type: Number,
        required: true
      }
    }
  ],
  cause: String,
  groupName: {
    type: String,
    required: true,
    unique: true
  },
  members: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
      }
    }
  ],
  manager: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    mobilePhoneNumber: {
      type: Number,
      required: true,
      ref: 'User'
    },
    identityNumber: {
      type: Number,
      required: true,
      ref: 'User'
    }
  },
  transaction: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
      }
    }
  ]
});

const Stokvel = mongoose.model('Stokvel', stokvelSchema);
export default Stokvel;
