import express from 'express';
import jwt from 'jsonwebtoken';
import StokvelController from '../controllers/stokvel.controller';

const router = express.Router();
const stokvel = new StokvelController();

router.post('/create', async (req, res) => {
  try {
    const stokvelGroup = {};
    const doc = await stokvel.createStokvel(stokvelGroup);
    res.send(doc);
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get('/retrieve', async (req, res) => {
  try {
    const { groupName } = req.body;
    const doc = await stokvel.getStokvel(groupName);
    res.send(doc);
  } catch (error) {
    res.send({ error: error.message });
  }
});
