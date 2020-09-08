import express from 'express';
import AuthController from '../controllers/user.controller';

const router = express.Router();
const auth = new AuthController();

router.post('/register', async (req, res, next) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
      mobilePhoneNumber: req.body.mobilePhoneNumber,
      identityNumber: req.body.identityNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };
    const doc = await auth.registerUser(user);
    // eslint-disable-next-line no-underscore-dangle
    res.send(doc._id);
    next();
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password
    };
    const doc = await auth.postLogin(user);
    res.header('auth-token', doc).send(doc);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

const userRoute = router;
export default userRoute;
