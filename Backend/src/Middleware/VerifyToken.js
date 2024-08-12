import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const header = req.get('Authorization');
  if (header) {
    const token = header.split(' ')[1];
    jwt.verify(token, 'bhawbhaw', (error, payload) => {
      if (error) {
        console.log('Token verification error:', error); // Log token verification errors
        return res.status(401).send({ message: 'Token is Invalid' });
      }
      next();
    });
  } else {
    res.status(401).send({ message: 'Token is missing' });
  }
};
