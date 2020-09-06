import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

export default class AuthController {
  async registerUser(userModel) {
    this.user = await User.findOne({ email: userModel.email });
    if (this.user) {
      throw new Error('Email already exists!');
    }
    this.user = new User(userModel);
    this.user.password = await bcrypt.hash(this.user.password, 10);
    return this.user.save(); // this is bad practice
  }

  async postLogin(userModel) {
    this.user = await User.findOne({ email: userModel.email });
    if (!this.user) {
      throw new Error('Incorrect email or password');
    }
    const isMatch = await bcrypt.compare(userModel.password, this.user.password);
    if (!isMatch) {
      throw new Error('Incorrect email or password');
    }
    const token = jwt.sign({ id: this.user.id }, '1913155164FC4B4DA16CCEA62C6C98A6', { expiresIn: '2Hrs' });
    return token;
  }

  async resetPassword(userData) {
    this.user = await User.findOne({ email: userData.email }).exec();
    if (!this.user) {
      throw new Error('Incorrect email or password');
    }
    const isMatch = await bcrypt.compare(userData.oldPassword, this.user.password);
    if (!isMatch) {
      throw new Error('Incorrect email or password');
    }
    this.user.password = await bcrypt.hash(userData.newPassword, 10);
    return this.user.save();
  }
}
