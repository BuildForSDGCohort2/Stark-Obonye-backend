import express from 'express';
import jwt from 'jsonwebtoken';
import WalletController from '../controllers/wallet.controller';

const router = express.Router();
const walletController = new WalletController();
router.post('/create', async (req, res) => {
  const token = req.headers.authorization.split('')[1];
  const decodedToken = jwt.verify(token, '');
  const { userId } = decodedToken;
  const wallet = {
    userId,
    accountNumber: req.body.accountNumber,
    address: req.body.address,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    balance: req.body.deposit
  };
  const status = await walletController.createWallet(wallet);
  res.send(status);
});
const walletRouter = router;
export default walletRouter;
