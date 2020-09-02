/* eslint-disable no-console */
import express from 'express';

const router = express.Router();
router.get('/test', (req, res) => {
  res.send('working');
});
const walletRouter = router;
export default walletRouter;
