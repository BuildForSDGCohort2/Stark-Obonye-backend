import express from 'express';
import WalletController from '../controllers/wallet.controller';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const walletController = new WalletController();
router.post('/create', authenticate, async (req, res, next) => {
  try {
    const id = req.userData;
    const wallet = {
      id,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };
    const doc = await walletController.createWallet(wallet);
    res.send({ message: doc });
  } catch (error) {
    res.status(400).send({ error: error.message });
    next();
  }
});

router.get('/balance', authenticate, async (req, res) => {
  try {
    const { accountNumber } = req.body;
    const walletObj = await walletController.getWallet(accountNumber);
    res.send(walletObj);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
router.put('/update', authenticate, async (req, res) => {
  try {
    const { walletData } = req.body;
    const walletObj = await walletController.updateWallet(walletData);
    res.send({ wallet: walletObj });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
const walletRouter = router;
export default walletRouter;
