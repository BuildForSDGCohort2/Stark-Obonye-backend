import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobilePhoneNumber: { type: String, required: true },
  identityNumber: { type: String, required: true },
  balance: Number,
  stokvel: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stokvel'
      },
      title: {
        type: String,
        ref: 'Stokvel'
      },
      cause: {
        type: String,
        ref: 'Stokvel'
      }
    }
  ]
});
const User = mongoose.model('User', UserSchema);
export default User;
