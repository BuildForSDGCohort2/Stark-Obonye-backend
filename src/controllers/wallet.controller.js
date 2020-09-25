/* eslint-disable no-console */
import Wallet from '../models/wallet.model';
import WalletService from '../services/wallet.service';

export default class WalletController {
  async createWallet(walletObj) {
    const walletService = new WalletService();
    const wallet = walletObj;
    this.wallet = await Wallet.findById(wallet.id);
    if (this.wallet) {
      throw new Error('Wallet already Exists!');
    }
    wallet.accountNumber = walletService.generateAccount();
    this.wallet = new Wallet(wallet);
    return this.wallet
      .save()
      .then()
      .catch((e) => console.log(e));
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
