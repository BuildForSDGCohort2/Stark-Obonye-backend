import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobilePhoneNumber: { type: String, required: true },
  identityNumber: { type: String, required: true },
  wallet: Object,
  randBalance: Number,
  tokenBalance: Number
});
const User = mongoose.model('User', UserSchema);
export default User;
