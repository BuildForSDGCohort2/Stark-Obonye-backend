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
}
