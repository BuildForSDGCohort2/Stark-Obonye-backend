import express from 'express';
import jwt from 'jsonwebtoken';
import TransactionsController from '../controllers/transactions.controller';

const router = express.Router();
const transactController = new TransactionsController();

router.get('/history', async (req, res) => {
  try {
    const { accountNumber } = req.body;
    const token = req.header('auth-token');
    if (!token) {
      res.send('Access Denied');
    }
    const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
    if (!decodedToken) {
      res.send({ error: 'Invalid User!' });
    }
    const transactions = await transactController.getHistory(accountNumber);
    res.send(transactions);
  } catch (error) {
    res.send({ error: error.message });
  }
});
const transactionsRouter = router;
export default transactionsRouter;
