import Wallet from '../models/wallet.model';

export default class WalletController {
  async createWallet(walletObj) {
    this.wallet = await Wallet.findById(walletObj.id);
    if (this.wallet) {
      throw new Error('Account already Exists!');
    }
    this.wallet = new Wallet(walletObj);
    return this.wallet.save();
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
