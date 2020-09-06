import express from 'express';
import jwt from 'jsonwebtoken';
import WalletController from '../controllers/wallet.controller';

const router = express.Router();
const walletController = new WalletController();
router.post('/create', async (req, res) => {
  const token = req.header('auth-token');
  if (!token) { res.send('Access Denied'); }
  const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
  const { id } = decodedToken;
  const wallet = {
    id,
    accountNumber: req.body.accountNumber,
    address: req.body.address,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    balance: req.body.deposit
  };
  const status = await walletController.createWallet(wallet);
  res.send(status);
});

router.get('/balance', async (req, res) => {
  const { accountNumber } = req.body;
  const token = req.header('auth-token');
  if (!token) { res.send('Access Denied'); }
  const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
  if (!decodedToken) { res.send({ error: 'Invalid User!' }); }
  const walletObj = await walletController.getWallet(accountNumber);
  res.send(walletObj);
});
router.put('/update', async (req, res) => {
  const { walletData } = req.body;
  const token = req.header('auth-token');
  if (!token) { res.send('Access Denied'); }
  const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
  if (!decodedToken) { res.send({ error: 'Invalid User!' }); }
  const walletObj = await walletController.updateWallet(walletData);
  res.send(walletObj);
});
const walletRouter = router;
export default walletRouter;
