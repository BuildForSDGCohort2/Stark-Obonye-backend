import Wallet from '../models/wallet.model';

export default class WalletController {
  async createWallet(walletObj) {
    this.wallet = Wallet.findById(walletObj.userId);
    if (this.wallet) {
      throw new Error('Account already Exists!');
    }
    this.wallet = new Wallet(walletObj);
    return this.wallet.save();
  }
}
