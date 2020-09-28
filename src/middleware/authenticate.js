import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      res.send({ message: 'Access Denied' });
    }
    const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');
    if (!decodedToken) {
      res.status(400).send({ error: 'Invalid User!' });
    }
    req.userData = { userId: decodedToken.id };
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export default authenticate;
