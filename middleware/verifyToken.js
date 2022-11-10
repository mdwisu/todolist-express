const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization.split('Bearer ')[1];

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.email = decoded.email;
      next();
    });
  },
};
