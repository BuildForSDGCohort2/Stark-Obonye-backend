import { response } from 'express';
import Wallet from '../models/wallet.model';
import WalletService from '../services/wallet.service';

export default class WalletController {
  async createWallet(walletObj) {
    this.wallet = await Wallet.findById(walletObj.id);
    if (this.wallet) {
      throw new Error('Account already Exists!');
    }
    const walletService = new WalletService();
    this.wallet.accountNumber = walletService.generateAccount();
    this.wallet = new Wallet(walletObj);
    return this.wallet.save().then().catch((e) => response.send({ error: e }));
  }

  async getWallet(accountNumber) {
    this.wallet = await Wallet.findOne(accountNumber).exec();
    if (!this.wallet) {
      throw new Error('Invalid Account Number!');
    }
    return this.wallet;
  }

  async updateWallet(walletObj) {
    this.wallet = await (await Wallet.findOne(walletObj.accountNumber)).exec();
    if (!this.wallet) {
      throw new Error('Invalid Account Number!');
    }
    this.wallet = Wallet(walletObj);
  }
}
