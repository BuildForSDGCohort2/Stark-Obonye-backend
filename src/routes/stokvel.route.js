import express from 'express';
import jwt from 'jsonwebtoken';
import StokvelController from '../controllers/stokvel.controller';

const router = express.Router();
const stokvel = new StokvelController();

router.post('/create', async (req, res) => {
  try {
    const stokvelGroup = {
    };
    const token = req.header('auth-token');
    if (!token) {
      res.send('Access Denied');
    }
    const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
    if (!decodedToken) {
      res.send({ error: 'Invalid User!' });
    }
    const doc = await stokvel.createStokvel(stokvelGroup);
    res.send(doc);
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get('/retrieve', async (req, res) => {
  try {
    const { groupName } = req.body;
    const token = req.header('auth-token');
    if (!token) {
      res.send('Access Denied');
    }
    const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
    if (!decodedToken) {
      res.send({ error: 'Invalid User!' });
    }
    const doc = await stokvel.getStokvel(groupName);
    res.send(doc);
  } catch (error) {
    res.send({ error: error.message });
  }
});
const stokvelRouter = router;
export default stokvelRouter;
