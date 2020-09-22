export default class WalletService {
  constructor() {
    this.first = 0;
    this.second = 0;
    this.third = 0;
    this.fourth = 0;
  }

  generateAccount() {
    this.first = Math.floor(Math.random() * 1000);
    this.second = Math.floor(Math.random() * 1000);
    this.third = Math.floor(Math.random() * 1000);
    this.fourth = Math.floor(Math.random() * 1000);
    const accountNumber = '';
    return accountNumber.concat(this.first, this.second, this.third, this.fourth);
  }
}
