import mongoose from 'mongoose';

const { Schema } = mongoose;
const stokvelSchema = Schema({
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
    mobilePhoneNumber: {
      type: Number,
      required: true,
      ref: 'User'
    }
  },
  wallet: {
    accountNumber: {
      type: String,
      ref: 'Wallet',
      required: true
    }
  }
});

const Stokvel = mongoose.model('Stokvel', stokvelSchema);
export default Stokvel;
