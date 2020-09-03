import express from 'express';
import AuthController from '../controllers/user.controller';

const router = express.Router();
const auth = new AuthController();

router.post('/register', async (req, res) => {
  try {
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      mobilePhoneNumber: req.body.mobilePhoneNumber,
      identityNumber: req.body.identityNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };
    // const doc = await auth.registerUser(user);
    const doc = user;
    res.send(doc.userId);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

const userRoute = router;
export default userRoute;
