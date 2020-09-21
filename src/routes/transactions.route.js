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
      res.status(400).send({ message: 'Access Denied' });
    }
    const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
    if (!decodedToken) {
      res.status(400).send({ error: 'Invalid User!' });
    }
    const transactions = await transactController.getHistory(accountNumber);
    res.send(transactions);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
router.put('/deposit', (req, res) => {
  res.status(400).send({ message: 'Success' });
});
const transactionsRouter = router;
export default transactionsRouter;
