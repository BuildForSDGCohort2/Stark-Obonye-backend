import WalletTransactions from '../models/transaction.model';

export default class TranscationsController {
  async getHistory(accountNumber) {
    this.history = await WalletTransactions.find({ accountNumber }).exec();
    if (!this.history) {
      throw new Error('History for Account not Available!');
    }
    return this.history;
  }
}
