import express from 'express';
import TransactionsController from '../controllers/transactions.controller';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const transactController = new TransactionsController();

router.get('/history', authenticate, async (req, res) => {
  try {
    const { accountNumber } = req.body;
    const transactions = await transactController.getHistory(accountNumber);
    res.send(transactions);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
router.put('/deposit', authenticate, (req, res) => {
  res.status(400).send({ message: 'Success' });
});
const transactionsRouter = router;
export default transactionsRouter;
