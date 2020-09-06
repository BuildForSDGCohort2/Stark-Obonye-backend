import Stokvel from '../models/stokvel.model';

export default class StokvelController {
  async createStokvel(stokvelObj) {
    this.stokvel = await Stokvel.findOne(stokvelObj.groupName).exec();
    if (this.stokvel) {
      throw new Error('Stokvel exists!');
    }
    this.stokvel = new Stokvel(stokvelObj);
    return this.stokvel.save();
  }

  async getStokvel(groupName) {
    this.stokvel = await Stokvel.findOne(groupName).exec();
    if (!this.stokvel) {
      throw new Error('Stokvel doesn\'t exist!');
    }
    return this.stokvel;
  }
}
